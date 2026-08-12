#!/usr/bin/env python3
"""
Voice Activity Detection (VAD) Controller for Whisper Linux Dictation
Uses Silero VAD to detect when user is speaking
"""

import numpy as np
from PyQt6.QtCore import QObject, pyqtSignal, QMutex, QMutexLocker


class SileroVADController(QObject):
    """Handles voice activity detection using Silero model"""
    
    # Signals for GUI updates
    speaking_detected = pyqtSignal(bool)  # True if currently speaking
    confidence_changed = pyqtSignal(float)  # Confidence score (0-1)
    error_occurred = pyqtSignal(str)  # Error message
    
    def __init__(self, threshold=0.5):
        super().__init__()
        
        self.threshold = threshold
        
        # State tracking
        self.is_speaking = False
        self.last_confidence = 0.0
        
        # Audio buffer for VAD processing
        self.audio_buffer = np.array([])
        self.buffer_size = 16000  # 1 second of audio at 16kHz
        
        # Smoothing parameters
        self.smoothing_factor = 0.3
        
    def initialize(self):
        """Initialize Silero VAD model"""
        try:
            import silero_vad
            
            print("Initializing Silero VAD...")
            
            # Load the VAD model (lightweight, ~1MB)
            self.vad_model = silero_vad.load_model(path="silero_vad.onnx")
            
            if self.vad_model is not None:
                print("Silero VAD initialized successfully")
                return True
            else:
                raise Exception("Failed to load Silero model")
        
        except ImportError as e:
            error_msg = f"Silero VAD not installed: {e}"
            print(error_msg)
            self.error_occurred.emit(error_msg)
            return False
        
        except Exception as e:
            error_msg = f"Error initializing Silero VAD: {e}"
            print(error_msg)
            self.error_occurred.emit(error_msg)
            return False
    
    def is_speaking(self, audio_samples):
        """
        Check if current audio indicates speaking
        
        Args:
            audio_samples: numpy array of audio data (16kHz, mono)
        
        Returns:
            bool: True if currently speaking
        """
        try:
            # Ensure we have enough samples for VAD processing
            if len(audio_samples) < 8000:  # At least 0.5 seconds
                return self.is_speaking
            
            # Use Silero VAD to detect speech
            vad_prob, _, _ = self.vad_model(
                audio_samples.astype(np.float32),
                sampling_rate=16000
            )
            
            # Get probability (0-1)
            prob = float(vad_prob[0]) if len(vad_prob) > 0 else 0.0
            
            # Update state with smoothing
            self.last_confidence = (self.smoothing_factor * prob + 
                                   (1 - self.smoothing_factor) * self.last_confidence)
            
            current_speaking = self.last_confidence > self.threshold
            
            # Only update state if it changed
            if current_speaking != self.is_speaking:
                self.is_speaking = current_speaking
                self.speaking_detected.emit(self.is_speaking)
                
                if self.is_speaking:
                    print("Speaking detected!")
                else:
                    print("Silence detected")
            
            # Emit confidence for GUI display
            self.confidence_changed.emit(self.last_confidence)
            
            return current_speaking
        
        except Exception as e:
            error_msg = f"Error in VAD processing: {e}"
            print(error_msg)
            self.error_occurred.emit(error_msg)
            return False
    
    def get_confidence(self):
        """Get current confidence score"""
        return self.last_confidence
    
    def reset(self):
        """Reset VAD state"""
        self.is_speaking = False
        self.last_confidence = 0.0
        print("VAD state reset")


def test_vad():
    """Test function to verify Silero VAD works"""
    import sounddevice as sd
    
    vad = SileroVADController(threshold=0.5)
    
    if not vad.initialize():
        print("Failed to initialize VAD!")
        return
    
    print("\nTesting Voice Activity Detection...")
    print("Press Enter to start, Ctrl+C to stop\n")
    input()
    
    # Start audio capture and VAD monitoring
    handler = AudioInputHandler()
    handler.start_recording()
    
    try:
        while True:
            samples = handler.get_last_samples()
            
            if len(samples) >= 8000:
                is_speaking = vad.is_speaking(samples)
                
                # Display status
                confidence = vad.get_confidence()
                volume = handler.get_volume_level()
                
                status = "🎤 SPEAKING" if is_speaking else "🔇 SILENCE"
                print(f"{status} | Confidence: {confidence:.2f} | Volume: {volume:.3f}")
            
            vad.msleep(100)
    
    except KeyboardInterrupt:
        pass
    
    finally:
        handler.stop_recording()


if __name__ == '__main__':
    test_vad()
