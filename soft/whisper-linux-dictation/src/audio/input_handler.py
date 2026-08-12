#!/usr/bin/env python3
"""
Audio Input Handler for Whisper Linux Dictation
Captures microphone input using sounddevice and PulseAudio/PipeWire
"""

import sounddevice as sd
import numpy as np
from PyQt6.QtCore import QObject, pyqtSignal, QThread
import logging


logger = logging.getLogger(__name__)


class AudioInputHandler(QObject):
    """Handles real-time audio capture from microphone"""
    
    # Signals for communication with GUI
    sample_received = pyqtSignal(np.ndarray)  # New audio samples ready
    recording_finished = pyqtSignal(np.ndarray)  # Complete recorded audio ready for Whisper
    volume_changed = pyqtSignal(float)  # Current input volume (0-1)
    error_occurred = pyqtSignal(str)  # Error message
    
    def __init__(self, sample_rate=16000, channels=1):
        super().__init__()
        
        self.sample_rate = sample_rate
        self.channels = channels
        
        # Audio buffer settings
        self.buffer_size = 512  # Samples per chunk
        self.min_volume_threshold = 0.3  # Minimum volume to consider "speaking"
        
        # State tracking
        self.is_recording = False
        self.audio_stream = None
        self.last_samples = np.zeros(0, dtype=np.float32)
        self.recorded_chunks = []
        
        # Volume history for smoothing
        self.volume_history = []
        self.max_volume_history = 10
        
    def start_recording(self):
        """Start capturing audio from microphone"""
        try:
            if self.is_recording:
                return True

            self.recorded_chunks = []
            self.volume_history = []
            logger.info(
                "Starting audio recording at %sHz, %s channel(s)",
                self.sample_rate,
                self.channels,
            )
            
            # Create stream callback
            def audio_callback(indata, frames, time_info, status):
                if status:
                    logger.warning("Audio input status: %s", status)
                
                # Calculate volume for VAD
                if len(indata) > 0:
                    chunk = indata.copy().flatten()
                    self.recorded_chunks.append(chunk)
                    
                    # RMS is a stable representation of signal energy. Multiplying by
                    # ten maps typical microphone speech into a useful 0..1 UI range.
                    volume = min(float(np.sqrt(np.mean(chunk ** 2))) * 10.0, 1.0)
                    
                    # Smooth the volume reading
                    self.volume_history.append(volume)
                    if len(self.volume_history) > self.max_volume_history:
                        self.volume_history.pop(0)
                    
                    avg_volume = np.mean(self.volume_history)
                    self.last_samples = indata.copy()
                    self.volume_changed.emit(float(avg_volume))
                    self.sample_received.emit(indata.copy())
            
            # Create and start the audio stream
            self.audio_stream = sd.InputStream(
                samplerate=self.sample_rate,
                channels=self.channels,
                dtype='float32',
                callback=audio_callback,
                blocksize=self.buffer_size
            )
            
            self.audio_stream.start()
            self.is_recording = True

            logger.info("Audio recording started successfully")
            return True
            
        except Exception as e:
            error_msg = f"Error starting audio stream: {e}"
            self.is_recording = False
            if self.audio_stream is not None:
                try:
                    self.audio_stream.close()
                except Exception:
                    pass
                self.audio_stream = None
            logger.exception(error_msg)
            self.error_occurred.emit(error_msg)
            return False
    
    def stop_recording(self):
        """Stop capturing audio from microphone"""
        try:
            if not self.is_recording:
                return np.zeros(0, dtype=np.float32)

            logger.info("Stopping audio recording")
            
            # Stop the stream
            if self.audio_stream:
                self.audio_stream.stop()
                self.audio_stream.close()
                self.audio_stream = None
            
            self.is_recording = False
            logger.info("Audio recording stopped")
            
            # Process accumulated audio
            if self.recorded_chunks:
                full_audio = np.concatenate(self.recorded_chunks)
                self.recorded_chunks = []
                logger.info(
                    "Captured %s audio samples (%.2fs)",
                    len(full_audio),
                    len(full_audio) / self.sample_rate,
                )
                self.recording_finished.emit(full_audio)
                return full_audio

            return np.zeros(0, dtype=np.float32)
            
        except Exception as e:
            error_msg = f"Error stopping audio stream: {e}"
            self.is_recording = False
            logger.exception(error_msg)
            self.error_occurred.emit(error_msg)
            return np.zeros(0, dtype=np.float32)
    
    def get_last_samples(self):
        """Get the last captured audio samples"""
        return self.last_samples.copy()
    
    def get_volume_level(self):
        """Get current smoothed volume level (0-1)"""
        if not self.volume_history:
            return 0.0
        
        return min(float(np.mean(self.volume_history)), 1.0)
    
    def is_speaking(self, threshold=0.5):
        """Check if current volume indicates speaking"""
        volume = self.get_volume_level()
        return volume > (self.min_volume_threshold * threshold)
    
    def get_available_devices(self):
        """Get list of available audio input devices"""
        try:
            devices = sd.query_devices()
            inputs = []
            
            for i, device in enumerate(devices):
                if device['max_input_channels'] > 0:
                    name = device['name']
                    # Filter out system devices
                    if 'System' not in name and 'Cable' not in name:
                        inputs.append({
                            'id': i,
                            'name': name,
                            'channels': device['max_input_channels'],
                            'samplerate': int(device['default_samplerate'])
                        })
            
            return sorted(inputs, key=lambda x: x['name'])
        except Exception as e:
            print(f"Error querying devices: {e}")
            return []


class AudioCaptureThread(QThread):
    """Background thread for continuous audio capture"""
    
    def __init__(self, handler):
        super().__init__()
        self.handler = handler
        self.running = True
    
    def run(self):
        """Main loop - continuously process audio"""
        while self.running:
            try:
                # Get last samples (already captured by callback)
                if self.handler.is_recording:
                    samples = self.handler.get_last_samples()
                    
                    if len(samples) > 0:
                        # Process with Whisper engine here
                        pass
                
                # Small sleep to prevent CPU spinning
                self.msleep(10)
                
            except Exception as e:
                print(f"Error in audio capture thread: {e}")
                self.msleep(100)
    
    def stop(self):
        """Stop the capture thread"""
        self.running = False


def test_audio_input():
    """Test function to verify microphone is working"""
    handler = AudioInputHandler()
    
    print("Testing audio input...")
    print(f"Available devices: {len(handler.get_available_devices())}")
    
    if handler.get_available_devices():
        print("\nDetected microphones:")
        for dev in handler.get_available_devices():
            print(f"  - {dev['name']} (ID: {dev['id']}, SR: {dev['samplerate']}Hz)")
        
        # Test recording
        print("\nPress Enter to start recording, Ctrl+C to stop...")
        input()
        
        handler.start_recording()
        
        try:
            while True:
                volume = handler.get_volume_level()
                if volume > 0.5:
                    print(f"Speaking detected! Volume: {volume:.2f}")
                
                # Capture a chunk for processing
                samples = handler.get_last_samples()
                if len(samples) >= 16000:  # 1 second of audio
                    print("Captured 1 second of audio")
                    break
                
                handler.msleep(100)
        
        except KeyboardInterrupt:
            pass
        
        finally:
            handler.stop_recording()


if __name__ == '__main__':
    test_audio_input()
