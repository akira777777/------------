#!/usr/bin/env python3
"""
Main Window for Whisper Linux Dictation
GUI implementation using PyQt6
"""

import os
import shutil
import subprocess
import sys
from pathlib import Path

from PyQt6.QtCore import QDateTime, QObject, Qt, QThread, QTimer, pyqtSignal
from PyQt6.QtGui import QFont, QIcon
from PyQt6.QtWidgets import (
    QApplication,
    QCheckBox,
    QComboBox,
    QDialog,
    QFileDialog,
    QFormLayout,
    QFrame,
    QGroupBox,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QMainWindow,
    QMessageBox,
    QPlainTextEdit,
    QProgressBar,
    QPushButton,
    QTabWidget,
    QVBoxLayout,
    QWidget,
)

from ..audio.input_handler import AudioInputHandler
from ..config.settings import get_settings
from ..engine.whisper_engine import WhisperEngine, normalize_language
from ..postprocessing import improve_transcript


def paste_clipboard_text():
    """Send Ctrl+V using the native display path when possible."""
    if os.environ.get('WAYLAND_DISPLAY') and shutil.which('wtype'):
        try:
            subprocess.run(
                ['wtype', '-M', 'ctrl', 'v', '-m', 'ctrl'],
                check=True,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
                timeout=2,
            )
            return
        except (OSError, subprocess.SubprocessError):
            pass

    import pyautogui

    pyautogui.hotkey('ctrl', 'v')


class SettingsDialog(QDialog):
    """Settings dialog window"""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        
        self.setWindowTitle("Whisper Linux Dictation - Settings")
        self.setMinimumSize(500, 400)
        
        # Load settings
        self.settings = get_settings()
        
        self._create_ui()
    
    def _create_ui(self):
        """Create dialog UI"""
        main_layout = QVBoxLayout(self)
        
        # Model selection group
        model_group = QGroupBox("Model Selection")
        model_layout = QFormLayout(model_group)
        
        self.model_combo = QComboBox()
        self.model_combo.addItems(['tiny', 'small', 'base', 'large'])
        self.model_combo.setCurrentText(self.settings.get('model', 'small'))
        model_layout.addRow("Model Size:", self.model_combo)
        
        # Russian/English recognition mode
        lang_group = QGroupBox("Russian / English Recognition")
        lang_layout = QFormLayout(lang_group)
        
        self.lang_combo = QComboBox()
        self.languages = [
            ('Automatic (Russian / English)', 'auto'),
            ('Russian', 'ru'),
            ('English', 'en'),
        ]
        for display_name, code in self.languages:
            self.lang_combo.addItem(display_name, code)
        
        current_lang = normalize_language(self.settings.get('language', 'auto'))
        idx = self.lang_combo.findData(current_lang)
        if idx >= 0:
            self.lang_combo.setCurrentIndex(idx)
        else:
            self.lang_combo.setCurrentIndex(0)
        lang_layout.addRow("Mode:", self.lang_combo)
        
        # Trigger key group
        key_group = QGroupBox("Trigger Key")
        key_layout = QFormLayout(key_group)
        
        self.trigger_key_edit = QLineEdit()
        self.trigger_key_edit.setText(self.settings.get('trigger_key', 'F12'))
        key_layout.addRow("Activate Key:", self.trigger_key_edit)
        
        # Additional options group
        opts_group = QGroupBox("Additional Options")
        opts_layout = QVBoxLayout(opts_group)
        
        self.auto_copy_check = QCheckBox("Auto-copy to clipboard after typing")
        self.auto_copy_check.setChecked(self.settings.get('auto_copy_to_clipboard', True))
        opts_layout.addWidget(self.auto_copy_check)
        
        self.inject_window_check = QCheckBox("Automatically paste text after recording")
        self.inject_window_check.setChecked(self.settings.get('inject_into_focused_window', True))
        opts_layout.addWidget(self.inject_window_check)

        self.improve_text_check = QCheckBox("Automatically improve recognized text")
        self.improve_text_check.setChecked(self.settings.get('auto_improve_text', True))
        opts_layout.addWidget(self.improve_text_check)

        self.remove_fillers_check = QCheckBox("Remove filler words (optional)")
        self.remove_fillers_check.setChecked(self.settings.get('remove_filler_words', False))
        self.remove_fillers_check.setEnabled(self.improve_text_check.isChecked())
        self.improve_text_check.toggled.connect(self.remove_fillers_check.setEnabled)
        opts_layout.addWidget(self.remove_fillers_check)
        
        main_layout.addWidget(model_group)
        main_layout.addWidget(lang_group)
        main_layout.addWidget(key_group)
        main_layout.addSpacing(10)
        main_layout.addWidget(opts_group)
        
        # Buttons
        button_layout = QHBoxLayout()
        
        self.save_btn = QPushButton("Save & Close")
        self.save_btn.clicked.connect(self._save_and_close)
        button_layout.addWidget(self.save_btn)
        
        self.cancel_btn = QPushButton("Cancel")
        self.cancel_btn.clicked.connect(self.reject)
        button_layout.addWidget(self.cancel_btn)
        
        main_layout.addLayout(button_layout)
    
    def _save_and_close(self):
        """Save settings and close dialog"""
        try:
            trigger_key = self.trigger_key_edit.text().strip()
            if not trigger_key or trigger_key.lower() in {'esc', 'escape'}:
                raise ValueError("Choose a trigger key other than Esc")

            # Save all settings
            self.settings.set('model', self.model_combo.currentText())
            lang_code = self.lang_combo.currentData()
            self.settings.set('language', normalize_language(lang_code))
            self.settings.set('trigger_key', trigger_key)
            self.settings.set('auto_copy_to_clipboard', self.auto_copy_check.isChecked())
            self.settings.set('inject_into_focused_window', self.inject_window_check.isChecked())
            self.settings.set('auto_improve_text', self.improve_text_check.isChecked())
            self.settings.set('remove_filler_words', self.remove_fillers_check.isChecked())
            
            QMessageBox.information(self, "Success", "Settings saved successfully!")
            self.accept()
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to save settings:\n{e}")


from pynput import keyboard


class GlobalHotkeyListener(QObject):
    hotkey_triggered = pyqtSignal()
    cancel_triggered = pyqtSignal()
    
    def __init__(self, key_name='F12'):
        super().__init__()
        self.key_name = key_name
        self.listener = None
        self._pressed = False
        self._escape_pressed = False

    def _matches(self, key):
        configured = self.key_name.strip().lower().replace('-', '_').replace(' ', '_')
        configured = {'capslock': 'caps_lock', 'escape': 'esc'}.get(configured, configured)
        special_key = getattr(keyboard.Key, configured, None)
        if special_key is not None:
            return key == special_key
        return (getattr(key, 'char', None) or '').lower() == configured
        
    def start(self):
        def on_press(key):
            try:
                if key == keyboard.Key.esc and not self._escape_pressed:
                    self._escape_pressed = True
                    self.cancel_triggered.emit()
                    return
                if self._matches(key) and not self._pressed:
                    self._pressed = True
                    self.hotkey_triggered.emit()
            except Exception:
                pass

        def on_release(key):
            try:
                if key == keyboard.Key.esc:
                    self._escape_pressed = False
                if self._matches(key):
                    self._pressed = False
            except Exception:
                pass
                
        try:
            self.listener = keyboard.Listener(on_press=on_press, on_release=on_release)
            self.listener.daemon = True
            self.listener.start()
        except Exception as e:
            print(f"Could not start global hotkey listener: {e}")

    def stop(self):
        if self.listener:
            try:
                self.listener.stop()
            except Exception:
                pass
            self.listener = None
            self._pressed = False
            self._escape_pressed = False


class TranscriptionWorker(QThread):
    succeeded = pyqtSignal(str)
    failed = pyqtSignal(str)
    
    def __init__(self, engine, audio_data, language):
        super().__init__()
        self.engine = engine
        self.audio_data = audio_data
        self.language = language
        
    def run(self):
        try:
            text = self.engine.transcribe_audio(self.audio_data, language=self.language)
            self.succeeded.emit(text)
        except Exception as e:
            self.failed.emit(str(e))


class ModelLoadWorker(QThread):
    completed = pyqtSignal(bool)

    def __init__(self, engine, model_size, language, use_cuda):
        super().__init__()
        self.engine = engine
        self.model_size = model_size
        self.language = language
        self.use_cuda = use_cuda

    def run(self):
        loaded = self.engine.load_model(
            model_size=self.model_size,
            language=self.language,
            use_cuda=self.use_cuda,
        )
        self.completed.emit(loaded)


class MainWindow(QMainWindow):
    """Main application window"""
    
    def __init__(self):
        super().__init__()
        
        # Application state
        self.settings = get_settings()
        self.whisper_engine = WhisperEngine()
        self.audio_handler = AudioInputHandler()
        
        # UI components
        self.is_listening = False
        self.current_text = ""
        self.worker = None
        self.model_worker = None
        self._shutting_down = False
        self.minimize_to_tray = False
        
        # Timer for status updates
        self.status_timer = QTimer()
        self.status_timer.timeout.connect(self._update_status)
        
        # Setup UI
        self._create_ui()
        
        # Connect signals
        self._connect_signals()

        # Load and initialize model
        self._load_model()
        
        # Global Hotkey Listener
        trigger_key = self.settings.get('trigger_key', 'F12')
        self.hotkey_listener = GlobalHotkeyListener(trigger_key)
        self.hotkey_listener.hotkey_triggered.connect(self._toggle_dictation)
        self.hotkey_listener.cancel_triggered.connect(self._cancel_dictation)
        self.hotkey_listener.start()

    def closeEvent(self, event):
        """Keep the application available from the system tray."""
        if self._shutting_down or not self.minimize_to_tray:
            self.shutdown()
            event.accept()
        else:
            self.hide()
            event.ignore()

    def shutdown(self):
        """Release audio and background resources before application exit."""
        self._shutting_down = True
        if self.audio_handler.is_recording:
            self.audio_handler.stop_recording()
        if self.hotkey_listener:
            self.hotkey_listener.stop()
        if self.worker and self.worker.isRunning():
            self.worker.wait()
        if self.model_worker and self.model_worker.isRunning():
            self.model_worker.wait()
    
    def _create_ui(self):
        """Create main window UI with Tabs and Notepad/History panel"""
        self.setWindowTitle("Whisper Linux Dictation")
        self.setMinimumSize(700, 550)
        self.setWindowIcon(QIcon())  # Will be replaced with actual icon
        
        # Central widget
        central = QWidget()
        self.setCentralWidget(central)
        
        main_layout = QVBoxLayout(central)
        
        # Main Tab Widget
        self.tabs = QTabWidget()
        
        # Tab 1: Dictation Control
        dictation_tab = QWidget()
        dictation_layout = QVBoxLayout(dictation_tab)
        
        # Title section
        title_group = QGroupBox("Whisper Linux Dictation")
        title_layout = QHBoxLayout(title_group)
        
        self.status_label = QLabel("Ready - Press F12 to start dictating")
        self.status_label.setFont(QFont("Arial", 14, QFont.Weight.Bold))
        self.status_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        title_layout.addWidget(self.status_label)
        
        # Status indicator (color circle)
        self.indicator_frame = QFrame()
        self.indicator_frame.setFixedSize(20, 20)
        self.indicator_frame.setStyleSheet("""
            QFrame {
                border-radius: 10px;
                background-color: #4CAF50;
            }
        """)
        title_layout.addWidget(self.indicator_frame)
        dictation_layout.addWidget(title_group)
        
        # Controls section
        controls_group = QGroupBox("Controls")
        controls_layout = QHBoxLayout(controls_group)
        
        self.start_btn = QPushButton("Start Dictation (F12)")
        self.start_btn.setFixedSize(160, 40)
        self.start_btn.setStyleSheet("""
            QPushButton {
                background-color: #4CAF50;
                color: white;
                font-weight: bold;
                border-radius: 5px;
            }
            QPushButton:hover {
                background-color: #45a049;
            }
            QPushButton:pressed {
                background-color: #3d8b40;
            }
        """)
        self.start_btn.clicked.connect(self._toggle_dictation)
        controls_layout.addWidget(self.start_btn)
        
        self.stop_btn = QPushButton("Stop (Esc)")
        self.stop_btn.setFixedSize(150, 40)
        self.stop_btn.setStyleSheet("""
            QPushButton {
                background-color: #f44336;
                color: white;
                font-weight: bold;
                border-radius: 5px;
            }
            QPushButton:hover {
                background-color: #da190b;
            }
        """)
        self.stop_btn.clicked.connect(self._stop_dictation)
        controls_layout.addWidget(self.stop_btn)
        dictation_layout.addWidget(controls_group)
        
        # Settings section
        settings_group = QGroupBox("Settings")
        settings_layout = QHBoxLayout(settings_group)
        
        self.settings_btn = QPushButton("Open Settings")
        self.settings_btn.setFixedSize(150, 30)
        self.settings_btn.clicked.connect(self._open_settings)
        settings_layout.addWidget(self.settings_btn)
        dictation_layout.addWidget(settings_group)
        
        # Progress section
        progress_group = QGroupBox("Processing Status")
        progress_layout = QVBoxLayout(progress_group)
        
        self.progress_bar = QProgressBar()
        self.progress_bar.setValue(0)
        self.progress_bar.setFormat("%p% - %v")
        progress_layout.addWidget(self.progress_bar)
        
        self.detail_label = QLabel("")
        self.detail_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        progress_layout.addWidget(self.detail_label)
        dictation_layout.addWidget(progress_group)
        
        # Keyboard shortcuts info
        shortcuts_group = QGroupBox("Keyboard Shortcuts")
        shortcuts_layout = QVBoxLayout(shortcuts_group)
        
        shortcuts_text = """
        <b>Dictation:</b><br>
        • Press F12 (or click button) to start speaking<br>
        • Press F12 or click Stop when done<br>
        • Press Esc to cancel<br><br>
        <b>Notepad & History:</b><br>
        • Switch to the "Notepad & History" tab to view all transcribed entries<br>
        • Copy, edit, or save your dictations to a text file"""
        
        shortcuts_label = QLabel(shortcuts_text)
        shortcuts_label.setWordWrap(True)
        shortcuts_layout.addWidget(shortcuts_label)
        dictation_layout.addWidget(shortcuts_group)
        
        # Tab 2: Notepad & History
        history_tab = QWidget()
        history_layout = QVBoxLayout(history_tab)
        
        # Action Toolbar
        toolbar_layout = QHBoxLayout()
        
        self.search_input = QLineEdit()
        self.search_input.setPlaceholderText("🔍 Search history...")
        self.search_input.textChanged.connect(self._filter_history)
        toolbar_layout.addWidget(self.search_input)
        
        self.copy_btn = QPushButton("📋 Copy All")
        self.copy_btn.clicked.connect(self._copy_history_to_clipboard)
        toolbar_layout.addWidget(self.copy_btn)
        
        self.export_btn = QPushButton("💾 Export .txt")
        self.export_btn.clicked.connect(self._export_history_to_file)
        toolbar_layout.addWidget(self.export_btn)
        
        self.clear_btn = QPushButton("🧹 Clear")
        self.clear_btn.clicked.connect(self._clear_history)
        toolbar_layout.addWidget(self.clear_btn)
        
        history_layout.addLayout(toolbar_layout)
        
        # Notepad Text Area
        self.history_edit = QPlainTextEdit()
        self.history_edit.setPlaceholderText("Transcribed dictation history will automatically appear here...")
        self.history_edit.setFont(QFont("Monospace", 10))
        self.history_edit.textChanged.connect(self._on_history_text_changed)
        history_layout.addWidget(self.history_edit)
        
        # History Stats Footer
        self.history_stats_label = QLabel("Entries: 0 | Words: 0 | Characters: 0")
        self.history_stats_label.setStyleSheet("color: #888888; font-size: 11px;")
        history_layout.addWidget(self.history_stats_label)
        
        # Add tabs
        self.tabs.addTab(dictation_tab, "🎙️ Dictation")
        self.tabs.addTab(history_tab, "📝 Notepad & History")
        
        main_layout.addWidget(self.tabs)
        
        # Load persistent history file
        self._load_history_file()
    
    def _load_model(self):
        """Load Whisper model based on settings"""
        try:
            if self.model_worker and self.model_worker.isRunning():
                return

            model_size = self.settings.get('model', 'small')
            language = normalize_language(self.settings.get('language', 'auto'))

            self.status_label.setText(f"Loading Whisper model: {model_size}...")
            self.detail_label.setText("The first launch may download model files")
            worker = ModelLoadWorker(
                self.whisper_engine,
                model_size,
                language,
                self._has_gpu(),
            )
            self.model_worker = worker
            worker.completed.connect(self._on_model_loaded)
            worker.finished.connect(worker.deleteLater)
            worker.start()
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to load model:\n{e}")

    def _on_model_loaded(self, loaded):
        """Update the interface after background model initialization."""
        self.model_worker = None
        if loaded:
            self.status_label.setText("Ready - Press F12 to start dictating")
            self.detail_label.setText("")
            self.indicator_frame.setStyleSheet("QFrame { background-color: #4CAF50; }")
        else:
            self.status_label.setText("Whisper model failed to load")
            self.indicator_frame.setStyleSheet("QFrame { background-color: #f44336; }")

        configured_model = self.settings.get('model', 'small')
        configured_language = normalize_language(self.settings.get('language', 'auto'))
        if loaded and (
            self.whisper_engine.model_size != configured_model
            or self.whisper_engine.language != configured_language
        ):
            self._load_model()
    
    def _has_gpu(self):
        """Check if GPU is available"""
        try:
            import torch
            return torch.cuda.is_available()
        except ImportError:
            return False
    
    def _connect_signals(self):
        """Connect engine and audio signals to UI updates"""
        self.whisper_engine.transcription_ready.connect(self._on_transcription)
        self.whisper_engine.progress_updated.connect(self._on_progress)
        self.whisper_engine.status_changed.connect(self._on_status)
        self.whisper_engine.error_occurred.connect(self._on_error)
        self.whisper_engine.language_detected.connect(self._on_language_detected)
        self.audio_handler.recording_finished.connect(self._on_recording_finished)
        self.audio_handler.error_occurred.connect(self._on_error)
    
    def _toggle_dictation(self):
        """Toggle dictation on/off"""
        if not self.is_listening:
            self._start_dictation()
        else:
            self._stop_dictation()
    
    def _start_dictation(self):
        """Start real-time dictation mode"""
        try:
            if self.worker and self.worker.isRunning():
                self.detail_label.setText("Please wait for transcription to finish")
                return

            # Start audio capture
            if not self.whisper_engine.is_loaded:
                if not self.model_worker or not self.model_worker.isRunning():
                    self._load_model()
                self.detail_label.setText("Please wait for the Whisper model to load")
                return

            if not self.audio_handler.start_recording():
                self.detail_label.setText("Could not open the microphone")
                return
            
            # Update UI state
            self.is_listening = True
            self.start_btn.setText("Stop Dictation")
            self.start_btn.setStyleSheet("""
                QPushButton {
                    background-color: #f44336;
                    color: white;
                    font-weight: bold;
                    border-radius: 5px;
                }
            """)
            
            self.status_label.setText("Listening... Speak now!")
            self.status_label.setStyleSheet("color: #ff9800;")
            
            self.indicator_frame.setStyleSheet("""
                QFrame {
                    background-color: #ff9800;
                }
            """)
            
            self.progress_bar.setValue(0)
            self.detail_label.setText("Recording audio from microphone...")
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to start dictation:\n{e}")
    
    def _stop_dictation(self):
        """Stop real-time dictation mode and process speech"""
        try:
            if not self.is_listening:
                return
                
            # Stop audio capture (emits recording_finished)
            self.audio_handler.stop_recording()
            
            # Update UI state
            self.is_listening = False
            self.start_btn.setText("Start Dictation (F12)")
            self.start_btn.setStyleSheet("""
                QPushButton {
                    background-color: #4CAF50;
                    color: white;
                    font-weight: bold;
                    border-radius: 5px;
                }
            """)
            
            self.status_label.setText("Recognizing speech...")
            self.status_label.setStyleSheet("color: #2196F3;")
            
            self.indicator_frame.setStyleSheet("""
                QFrame {
                    background-color: #2196F3;
                }
            """)
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to stop dictation:\n{e}")

    def _cancel_dictation(self):
        """Discard the active recording without transcribing it."""
        if not self.is_listening:
            return
        self.audio_handler.stop_recording(emit_audio=False)
        self.is_listening = False
        self.start_btn.setText(f"Start Dictation ({self.settings.get('trigger_key', 'F12')})")
        self.status_label.setText("Recording cancelled")
        self.status_label.setStyleSheet("color: #888888;")
        self.indicator_frame.setStyleSheet("QFrame { background-color: #888888; }")
        self.progress_bar.setValue(0)
        self.detail_label.setText("Audio was discarded")

    def _on_recording_finished(self, audio_data):
        """Process recorded audio array through Whisper model"""
        try:
            if len(audio_data) < 3200:  # less than 0.2 sec
                self.status_label.setText("Recording too short")
                self.status_label.setStyleSheet("color: #888888;")
                self.indicator_frame.setStyleSheet("QFrame { background-color: #888888; }")
                self.detail_label.setText("Hold button/F12 longer to speak")
                return

            self.status_label.setText("Recognizing speech...")
            self.status_label.setStyleSheet("color: #2196F3;")
            self.indicator_frame.setStyleSheet("QFrame { background-color: #2196F3; }")
            self.progress_bar.setValue(40)
            self.detail_label.setText("Transcribing audio through Whisper...")

            language = normalize_language(self.settings.get('language', 'auto'))
            worker = TranscriptionWorker(self.whisper_engine, audio_data, language)
            self.worker = worker
            worker.succeeded.connect(self._on_transcription_completed)
            worker.failed.connect(self._on_error)
            worker.finished.connect(lambda: self._clear_transcription_worker(worker))
            worker.finished.connect(worker.deleteLater)
            worker.start()
        except Exception as e:
            print(f"Error starting transcription worker: {e}")

    def _clear_transcription_worker(self, worker):
        if self.worker is worker:
            self.worker = None

    def _on_transcription_completed(self, text):
        """Handle completed transcription text"""
        self.progress_bar.setValue(100)
        cleaned = text.strip()
        if cleaned and self.settings.get('auto_improve_text', True):
            configured_language = normalize_language(self.settings.get('language', 'auto'))
            text_language = (
                self.whisper_engine.last_detected_language
                if configured_language == 'auto'
                else configured_language
            )
            cleaned = improve_transcript(
                cleaned,
                language=text_language,
                remove_fillers=self.settings.get('remove_filler_words', False),
            )
        if cleaned:
            self._on_transcription(cleaned)
            self.status_label.setText("Ready - Press F12 to start dictating")
            self.status_label.setStyleSheet("color: #4CAF50;")
            self.indicator_frame.setStyleSheet("QFrame { background-color: #4CAF50; }")
            
            should_copy = self.settings.get('auto_copy_to_clipboard', True)
            should_inject = self.settings.get('inject_into_focused_window', True)
            clipboard = QApplication.clipboard()
            previous_clipboard = clipboard.text() if should_inject and not should_copy else None
            if should_copy or should_inject:
                clipboard.setText(cleaned)

            if should_inject:
                try:
                    paste_clipboard_text()
                except Exception as e:
                    print(f"Could not inject text into active window: {e}")
                    if previous_clipboard is not None:
                        clipboard.setText(previous_clipboard)
                else:
                    if previous_clipboard is not None:
                        QTimer.singleShot(250, lambda value=previous_clipboard: clipboard.setText(value))
        else:
            self.status_label.setText("No speech detected")
            self.status_label.setStyleSheet("color: #ff9800;")
            self.indicator_frame.setStyleSheet("QFrame { background-color: #ff9800; }")
            self.detail_label.setText("No speech recognized in recording")
    
    def _open_settings(self):
        """Open settings dialog"""
        try:
            dialog = SettingsDialog(self)
            if dialog.exec() == 1:  # QDialog.Accepted
                self.hotkey_listener.stop()
                trigger_key = self.settings.get('trigger_key', 'F12')
                self.hotkey_listener = GlobalHotkeyListener(trigger_key)
                self.hotkey_listener.hotkey_triggered.connect(self._toggle_dictation)
                self.hotkey_listener.cancel_triggered.connect(self._cancel_dictation)
                self.hotkey_listener.start()
                self.start_btn.setText(f"Start Dictation ({trigger_key})")
                # Reload model with new settings
                self._load_model()
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to open settings:\n{e}")
    
    def _on_transcription(self, text):
        """Handle received transcription"""
        try:
            cleaned = text.strip()
            if cleaned:
                self.current_text += cleaned + " "
                
                timestamp = QDateTime.currentDateTime().toString("yyyy-MM-dd HH:mm:ss")
                entry = f"[{timestamp}] {cleaned}\n"
                
                # Append to Notepad
                if hasattr(self, 'history_edit'):
                    self.history_edit.appendPlainText(entry)
                    self._update_history_stats()
                    self._save_history_file()
                
                # Update progress bar (simulate)
                current = self.progress_bar.value()
                if current < 100:
                    self.progress_bar.setValue(min(current + 5, 100))
                
                # Show in detail label
                self.detail_label.setText(f"Transcribed: {cleaned[:50]}...")
        
        except Exception as e:
            print(f"Error handling transcription: {e}")

    # --- Notepad & History Helper Methods ---
    def _get_history_file_path(self):
        """Path to persistent history file"""
        history_dir = Path.home() / ".whisper_linux_dictation"
        history_dir.mkdir(parents=True, exist_ok=True)
        return history_dir / "dictation_history.txt"

    def _load_history_file(self):
        """Load persistent history from file into notepad"""
        try:
            path = self._get_history_file_path()
            if path.exists():
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    self.history_edit.setPlainText(content)
                    self._update_history_stats()
        except Exception as e:
            print(f"Error loading history file: {e}")

    def _save_history_file(self):
        """Save notepad content to persistent file"""
        try:
            path = self._get_history_file_path()
            with open(path, 'w', encoding='utf-8') as f:
                f.write(self.history_edit.toPlainText())
        except Exception as e:
            print(f"Error saving history file: {e}")

    def _on_history_text_changed(self):
        """Handle text edits in notepad"""
        self._update_history_stats()
        self._save_history_file()

    def _update_history_stats(self):
        """Update line, word, and character counts"""
        text = self.history_edit.toPlainText()
        chars = len(text)
        words = len(text.split()) if text else 0
        lines = len([line for line in text.splitlines() if line.strip()])
        self.history_stats_label.setText(f"Entries: {lines} | Words: {words} | Characters: {chars}")

    def _copy_history_to_clipboard(self):
        """Copy all text in notepad to system clipboard"""
        text = self.history_edit.toPlainText()
        if text.strip():
            clipboard = QApplication.clipboard()
            clipboard.setText(text)
            QMessageBox.information(self, "Copied", "All notes copied to clipboard!")
        else:
            QMessageBox.information(self, "Info", "Notepad is empty.")

    def _export_history_to_file(self):
        """Export notepad content to user selected .txt file"""
        text = self.history_edit.toPlainText()
        if not text.strip():
            QMessageBox.warning(self, "Warning", "Notepad is empty!")
            return
        
        file_path, _ = QFileDialog.getSaveFileName(
            self, "Export Dictation Notepad", "dictation_history.txt", "Text Files (*.txt);;All Files (*)"
        )
        if file_path:
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(text)
                QMessageBox.information(self, "Success", f"File saved successfully:\n{file_path}")
            except Exception as e:
                QMessageBox.critical(self, "Error", f"Could not save file:\n{e}")

    def _clear_history(self):
        """Clear history notepad after confirmation"""
        if not self.history_edit.toPlainText().strip():
            return
        reply = QMessageBox.question(
            self, "Clear History", "Are you sure you want to clear the entire notepad history?",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No
        )
        if reply == QMessageBox.StandardButton.Yes:
            self.history_edit.clear()
            self._save_history_file()
            self._update_history_stats()

    def _filter_history(self, search_term):
        """Highlight or move to search term in history notepad"""
        if not search_term.strip():
            return
        doc = self.history_edit.document()
        cursor = doc.find(search_term)
        if not cursor.isNull():
            self.history_edit.setTextCursor(cursor)
    
    def _on_progress(self, progress, message):
        """Handle progress updates"""
        try:
            self.progress_bar.setValue(int(progress))
            self.detail_label.setText(message)
        
        except Exception as e:
            print(f"Error handling progress: {e}")
    
    def _on_status(self, status_message):
        """Handle status message changes"""
        try:
            self.status_label.setText(status_message)
        
        except Exception as e:
            print(f"Error handling status: {e}")

    def _on_language_detected(self, language, probability):
        """Show the language chosen by automatic recognition."""
        names = {'ru': 'Russian', 'en': 'English', 'auto': 'Russian / English'}
        self.detail_label.setText(
            f"Detected: {names.get(language, language)} ({probability:.0%})"
        )
    
    def _on_error(self, error_msg):
        """Handle errors"""
        try:
            QMessageBox.warning(self, "Warning", f"{error_msg}\n\nCheck the console for details.")
        
        except Exception as e:
            print(f"Error handling error: {e}")
    
    def _update_status(self):
        """Periodic status update (for VAD monitoring)"""
        try:
            if self.is_listening and self.audio_handler.is_recording:
                volume = self.audio_handler.get_volume_level()
                
                # Update indicator color based on activity
                if volume > 0.5:
                    self.indicator_frame.setStyleSheet("""
                        QFrame {
                            background-color: #ff9800;
                        }
                    """)
                    self.status_label.setText("Listening... Speak now!")
                else:
                    self.indicator_frame.setStyleSheet("""
                        QFrame {
                            background-color: #4CAF50;
                        }
                    """)
                    self.status_label.setText("Ready - Press F12 to start dictating")
        
        except Exception as e:
            print(f"Error in status update: {e}")


def main():
    """Main entry point"""
    app = QApplication(sys.argv)
    
    # Set application info
    app.setApplicationName("Whisper Linux Dictation")
    app.setApplicationVersion("1.0.0")
    
    # Create and show main window
    window = MainWindow()
    window.show()
    
    sys.exit(app.exec())


if __name__ == '__main__':
    main()
