#!/usr/bin/env python3
"""
Whisper Engine for Linux Dictation
Uses faster-whisper for optimized speech recognition
"""

import logging

import numpy as np
from faster_whisper import WhisperModel
from PyQt6.QtCore import QObject, QThread, pyqtSignal

logger = logging.getLogger('whisper_engine')
SUPPORTED_LANGUAGES = {'auto', 'ru', 'en'}


def normalize_language(language):
    """Return one of the language modes supported by this application."""
    return language if language in SUPPORTED_LANGUAGES else 'auto'


def choose_supported_language(language_probabilities):
    """Choose Russian or English from Whisper's complete probability list."""
    probabilities = dict(language_probabilities)
    scores = {'ru': float(probabilities.get('ru', 0.0)), 'en': float(probabilities.get('en', 0.0))}
    language = max(('ru', 'en'), key=lambda item: scores[item])
    supported_total = scores['ru'] + scores['en']
    confidence = scores[language] / supported_total if supported_total else 0.5
    return language, confidence


class WhisperEngine(QObject):
    """Manages the Whisper transcription engine"""
    
    # Signals for GUI updates
    transcription_ready = pyqtSignal(str)  # Transcribed text ready
    progress_updated = pyqtSignal(float, str)  # Progress (0-100), message
    status_changed = pyqtSignal(str)  # Current status message
    error_occurred = pyqtSignal(str)  # Error message
    language_detected = pyqtSignal(str, float)  # Language code and confidence
    
    def __init__(self):
        super().__init__()
        
        self.model = None
        self.is_loaded = False
        
        # Processing state
        self.is_processing = False
        self.current_audio = np.array([])
        
        # Model configuration from settings
        self.model_size = 'tiny'  # tiny, small, base, large
        self.language = 'auto'
        self.last_detected_language = 'auto'
        self.last_language_probability = 0.0
        self.use_cuda = False
        
        # Thread for background processing
        self.processing_thread = None
    
    def load_model(self, model_size='small', language='en', use_cuda=True):
        """Load the Whisper model (thread-safe)"""
        language = normalize_language(language)
        try:
            self.is_loaded = False
            logger.info(f"Loading Whisper model: {model_size} ({language})")
            
            # Determine device for inference
            if use_cuda and self._has_gpu():
                device = 'cuda'
                logger.info("Using CUDA GPU acceleration")
            else:
                device = 'cpu'
                logger.info("Using CPU for inference")
            
            # Load model with faster-whisper
            self.model = WhisperModel(
                model_size_or_path=model_size,
                device=device,
                compute_type='float16' if device == 'cuda' else 'int8',
                cpu_threads=4,
                num_workers=1  # Single worker for real-time processing
            )
                        
            self.is_loaded = True
            self.model_size = model_size
            self.language = language
            self.use_cuda = device == 'cuda'
            self.status_changed.emit(f"Model loaded: {model_size} on {device}")
            logger.info(f"Whisper model '{model_size}' loaded successfully")
            return True
            
        except Exception as e:
            self.model = None
            self.is_loaded = False
            error_msg = f"Error loading Whisper model: {e}"
            logger.error(error_msg)
            self.status_changed.emit("Error loading model")
            self.error_occurred.emit(error_msg)
            return False
    
    def _has_gpu(self):
        """Check if CUDA GPU is available"""
        try:
            import torch
            return torch.cuda.is_available()
        except ImportError:
            return False
    
    def transcribe_audio(self, audio_samples, language=None):
        """
        Transcribe audio samples using Whisper
        
        Args:
            audio_samples: numpy array of audio data (16kHz, mono)
            language: Optional language code (auto-detect if None)
        
        Returns:
            str: Transcribed text
        """
        full_text = ''
        try:
            if not self.is_loaded or self.model is None:
                raise RuntimeError("Whisper model is not loaded")

            audio_samples = np.asarray(audio_samples, dtype=np.float32).flatten()
            if audio_samples.size == 0:
                return ''

            self.is_processing = True
            self.status_changed.emit("Processing...")
            
            # In automatic mode, constrain detection to the two languages the
            # application supports. Whisper's default detector considers 99+
            # languages and can pick an unrelated one for short recordings.
            lang = normalize_language(language or self.language)
            if lang == 'auto':
                _, _, language_probabilities = self.model.detect_language(audio=audio_samples)
                recognition_language, language_probability = choose_supported_language(
                    language_probabilities
                )
            else:
                recognition_language = lang
                language_probability = 1.0
            
            # Process with faster-whisper
            segments, _info = self.model.transcribe(
                audio_samples,
                language=recognition_language,
                task='transcribe',
                beam_size=3,
                word_timestamps=False,
                condition_on_previous_text=False,
                vad_filter=True,    # Use VAD to reduce noise
                vad_parameters={
                    'min_silence_duration_ms': 300,
                    'threshold': 0.5,
                    'max_speech_duration_s': 60,
                },
            )

            self.last_detected_language = recognition_language
            self.last_language_probability = language_probability
            self.language_detected.emit(recognition_language, language_probability)
            logger.info(
                "Recognition language: %s (%.1f%%)",
                recognition_language,
                language_probability * 100,
            )
            
            # Combine all segments into single text
            full_text = ' '.join([seg.text for seg in segments])
            
            self.is_processing = False
            
            if full_text.strip():
                logger.debug(f"Transcribed: {full_text[:100]}...")
            else:
                logger.warning("Empty transcription result")
                
        except Exception as e:
            error_msg = f"Error during transcription: {e}"
            logger.error(error_msg)
            self.is_processing = False
            self.status_changed.emit(f"Processing error: {str(e)[:50]}")
            self.error_occurred.emit(error_msg)
            raise

        return full_text.strip()
    
    def transcribe_stream(self, audio_callback):
        """
        Continuous streaming transcription
        
        Args:
            audio_callback: Function that receives audio chunks for processing
        """
        if not self.is_loaded:
            logger.warning("Model not loaded")
            return
        
        try:
            while True:
                # Get audio chunk from callback
                samples = audio_callback()
                
                if len(samples) > 0 and len(samples) >= 16000:
                    # Process in chunks for real-time response
                    self.transcribe_audio(samples, language=self.language)
                    
                    # Small delay to prevent CPU overload
                    import time
                    time.sleep(0.05)
                
        except KeyboardInterrupt:
            logger.info("Stream interrupted")
        except Exception as e:
            logger.error(f"Error in stream: {e}")


class WhisperProcessingThread(QThread):
    """Background thread for non-blocking transcription"""
    
    def __init__(self, engine, audio_callback):
        super().__init__()
        self.engine = engine
        self.audio_callback = audio_callback
        self.running = True
    
    def run(self):
        """Main processing loop"""
        try:
            while self.running:
                # Get audio from callback
                samples = self.audio_callback()
                
                if len(samples) > 0 and len(samples) >= 16000:
                    # Process transcription in background thread
                    text = self.engine.transcribe_audio(samples, language=self.engine.language)

                    if text.strip():
                        # Emit signal to GUI
                        self.engine.transcription_ready.emit(text)
                
                # Small sleep to prevent CPU spinning
                self.msleep(50)
        
        except Exception as e:
            logger.error(f"Error in processing thread: {e}")
    
    def stop(self):
        """Stop the processing thread"""
        self.running = False


def test_transcription():
    """Test function to verify Whisper model works"""
    
    engine = WhisperEngine()
    
    print("Testing Whisper transcription...")
    
    # Load a small model for testing
    engine.load_model(model_size='tiny', language='en')
    
    if not engine.is_loaded:
        print("Failed to load model!")
        return
    
    # Test with sample audio (silence)
    print("\nTest 1: Silence detection")
    silence = np.zeros(16000, dtype=np.float32)
    text = engine.transcribe_audio(silence)
    print(f"Result: '{text}'")
    
    # Test with sample audio (simple tone - simulate speech)
    print("\nTest 2: Sample audio processing")
    # Create a simple test signal (simulated speech pattern)
    t = np.linspace(0, 1, 16000)
    test_audio = 0.5 * np.sin(2 * np.pi * 440 * t) + 0.3 * np.random.randn(16000)
    
    text = engine.transcribe_audio(test_audio)
    print(f"Result: '{text}'")
    
    print("\nTest complete!")


if __name__ == '__main__':
    test_transcription()
