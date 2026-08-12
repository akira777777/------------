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

from PyQt6.QtCore import (
    QDateTime,
    QEasingCurve,
    QObject,
    QPropertyAnimation,
    Qt,
    QThread,
    QTimer,
    pyqtSignal,
)
from PyQt6.QtGui import QColor, QCursor, QFont, QPainter
from PyQt6.QtWidgets import (
    QApplication,
    QBoxLayout,
    QCheckBox,
    QComboBox,
    QDialog,
    QFileDialog,
    QFormLayout,
    QFrame,
    QGraphicsOpacityEffect,
    QGroupBox,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QMainWindow,
    QMessageBox,
    QPlainTextEdit,
    QProgressBar,
    QPushButton,
    QScrollArea,
    QTabWidget,
    QVBoxLayout,
    QWidget,
)

from ..audio.input_handler import AudioInputHandler
from ..config.settings import get_settings
from ..engine.whisper_engine import WhisperEngine, normalize_language
from ..postprocessing import improve_transcript

APP_STYLESHEET = """
QWidget {
    color: #17243A;
    font-family: "Inter", "Noto Sans", "DejaVu Sans", sans-serif;
    font-size: 13px;
}
QMainWindow, QDialog, QWidget#appRoot, QWidget#dialogRoot {
    background: #F3F6FA;
}
QLabel#brandMark {
    color: #FFFFFF;
    background: #2D63F3;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 800;
}
QLabel#brandName {
    color: #17243A;
    font-size: 16px;
    font-weight: 750;
}
QLabel#brandCaption, QLabel#mutedLabel, QLabel#sectionCaption,
QLabel#metricLabel, QLabel#historyStats {
    color: #65728A;
}
QLabel#privacyBadge {
    color: #236757;
    background: #E2F3ED;
    border: 1px solid #C5E6DB;
    border-radius: 11px;
    padding: 5px 10px;
    font-size: 11px;
    font-weight: 650;
}
QLabel#toast {
    color: #FFFFFF;
    background: #25334A;
    border: 1px solid #34445E;
    border-radius: 10px;
    padding: 10px 14px;
    font-weight: 650;
}
QFrame#heroCard, QFrame#contentCard, QFrame#metricCard,
QGroupBox#settingsSection {
    background: #FFFFFF;
    border: 1px solid #DCE3EC;
    border-radius: 16px;
}
QFrame#heroCard[state="recording"] { border-color: #F3B4B5; background: #FFFDFD; }
QFrame#heroCard[state="processing"] { border-color: #BFD0FF; }
QFrame#heroCard[state="error"] { border-color: #E8B7BE; }
QFrame#signalPanel {
    background: #EAF0FF;
    border: 1px solid #D7E1FF;
    border-radius: 14px;
}
QFrame#signalPanel[state="recording"] { background: #FFF1F1; border-color: #F4C4C4; }
QFrame#signalPanel[state="processing"] { background: #EEF3FF; border-color: #CBD8FF; }
QLabel#eyebrow {
    color: #2D63F3;
    font-family: "IBM Plex Mono", "DejaVu Sans Mono", monospace;
    font-size: 10px;
    font-weight: 700;
}
QLabel#statusTitle {
    color: #17243A;
    font-size: 25px;
    font-weight: 750;
}
QLabel#sectionTitle {
    color: #17243A;
    font-size: 17px;
    font-weight: 700;
}
QLabel#metricValue {
    color: #17243A;
    font-size: 14px;
    font-weight: 700;
}
QLabel#latestTranscript {
    color: #17243A;
    font-size: 15px;
    font-weight: 550;
}
QLabel#latestTranscript[empty="true"] { color: #65728A; font-size: 13px; font-weight: 400; }
QFrame#statusDot {
    background: #25A37C;
    border-radius: 5px;
}
QFrame#statusDot[state="recording"] { background: #F05D5E; }
QFrame#statusDot[state="processing"] { background: #2D63F3; }
QFrame#statusDot[state="error"] { background: #CF3F50; }
QFrame#statusDot[state="muted"] { background: #96A2B5; }
QLabel#signalState {
    color: #2D63F3;
    font-family: "IBM Plex Mono", "DejaVu Sans Mono", monospace;
    font-size: 11px;
    font-weight: 700;
}
QLabel#signalState[state="recording"] { color: #D74349; }
QLabel#signalState[state="ready"] { color: #257B65; }
QLabel#shortcutKey {
    color: #334057;
    background: #EDF1F6;
    border: 1px solid #D7DEE8;
    border-bottom: 2px solid #C6CFDC;
    border-radius: 6px;
    padding: 4px 8px;
    font-family: "IBM Plex Mono", "DejaVu Sans Mono", monospace;
    font-size: 11px;
    font-weight: 700;
}
QPushButton {
    min-height: 38px;
    padding: 0 16px;
    background: #FFFFFF;
    color: #25334A;
    border: 1px solid #CFD8E5;
    border-radius: 9px;
    font-weight: 650;
}
QPushButton:hover { background: #F5F8FC; border-color: #AEBBD0; }
QPushButton:pressed { background: #E9EEF5; }
QPushButton:focus { border: 2px solid #7FA2FF; }
QPushButton:disabled { color: #9AA5B7; background: #EEF2F6; border-color: #E2E7EE; }
QPushButton#primaryButton {
    color: #FFFFFF;
    background: #2D63F3;
    border: 1px solid #2D63F3;
    min-height: 46px;
    font-size: 14px;
}
QPushButton#primaryButton:hover { background: #2456D8; border-color: #2456D8; }
QPushButton#primaryButton[recording="true"] { background: #F05D5E; border-color: #F05D5E; }
QPushButton#dangerButton { color: #B63B4A; }
QPushButton#dangerButton:hover { color: #922D39; background: #FFF1F2; border-color: #F1C4CA; }
QTabWidget::pane { border: 0; background: transparent; top: -1px; }
QTabBar::tab {
    color: #68758B;
    background: transparent;
    padding: 10px 3px;
    margin-right: 24px;
    border-bottom: 2px solid transparent;
    font-weight: 650;
}
QTabBar::tab:selected { color: #2D63F3; border-bottom-color: #2D63F3; }
QTabBar::tab:hover:!selected { color: #334057; }
QProgressBar {
    min-height: 5px;
    max-height: 5px;
    background: #E6EBF2;
    border: 0;
    border-radius: 2px;
    text-align: center;
    color: transparent;
}
QProgressBar::chunk { background: #2D63F3; border-radius: 2px; }
QLineEdit, QComboBox, QPlainTextEdit {
    background: #FFFFFF;
    color: #17243A;
    border: 1px solid #CCD6E3;
    border-radius: 9px;
    padding: 8px 10px;
    selection-background-color: #BED0FF;
}
QLineEdit:focus, QComboBox:focus, QPlainTextEdit:focus { border: 2px solid #7399FF; }
QLineEdit[noMatch="true"] { border-color: #D96874; background: #FFF7F8; }
QComboBox { min-height: 25px; }
QComboBox::drop-down { border: 0; width: 28px; }
QComboBox QAbstractItemView {
    background: #FFFFFF;
    color: #17243A;
    border: 1px solid #CCD6E3;
    border-radius: 8px;
    padding: 6px;
    selection-background-color: #E8EFFF;
    selection-color: #173C9E;
}
QPlainTextEdit { font-family: "IBM Plex Mono", "DejaVu Sans Mono", monospace; }
QGroupBox#settingsSection {
    margin-top: 12px;
    padding-top: 14px;
    font-size: 14px;
    font-weight: 700;
}
QGroupBox#settingsSection::title {
    subcontrol-origin: margin;
    left: 14px;
    padding: 0 6px;
    color: #25334A;
}
QCheckBox { spacing: 9px; padding: 3px 0; }
QScrollBar:vertical {
    background: transparent;
    width: 10px;
    margin: 2px;
}
QScrollBar::handle:vertical { background: #C7D1DE; border-radius: 4px; min-height: 32px; }
QScrollBar::handle:vertical:hover { background: #9FADBF; }
QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical { height: 0; }
QScrollArea { background: transparent; border: none; }
QScrollArea > QWidget > QWidget { background: transparent; }
QToolTip { color: #FFFFFF; background: #25334A; border: 0; padding: 6px; }
"""


class WaveformWidget(QWidget):
    """Compact live audio meter drawn without image assets."""

    def __init__(self, parent=None):
        super().__init__(parent)
        self._level = 0.08
        self._target_level = 0.08
        self._active = False
        self.setMinimumSize(210, 76)
        self.setAccessibleName('Microphone input level')
        self._motion_timer = QTimer(self)
        self._motion_timer.setInterval(33)
        self._motion_timer.timeout.connect(self._animate_level)

    def set_level(self, level):
        self._target_level = max(0.03, min(float(level), 1.0))
        if self._active and not self._motion_timer.isActive():
            self._motion_timer.start()

    def set_active(self, active):
        self._active = bool(active)
        if active:
            self._motion_timer.start()
        else:
            self._motion_timer.stop()
            self._level = 0.08
            self._target_level = 0.08
        self.update()

    def _animate_level(self):
        self._level += (self._target_level - self._level) * 0.24
        if abs(self._target_level - self._level) < 0.005:
            self._level = self._target_level
        self.update()

    def paintEvent(self, event):
        del event
        painter = QPainter(self)
        painter.setRenderHint(QPainter.RenderHint.Antialiasing)
        color = QColor('#F05D5E' if self._active else '#2D63F3')
        muted = QColor('#C3D0F4')
        bar_width = 6
        gap = 6
        count = max(8, self.width() // (bar_width + gap))
        center = self.height() / 2
        pattern = (0.32, 0.58, 0.86, 0.48, 1.0, 0.66, 0.4, 0.74)
        for index in range(count):
            strength = pattern[index % len(pattern)]
            amplitude = (8 + self._level * (self.height() - 18) * strength) if self._active else 8 + 10 * strength
            x = index * (bar_width + gap) + 2
            painter.setPen(Qt.PenStyle.NoPen)
            painter.setBrush(color if self._active else muted)
            painter.drawRoundedRect(int(x), int(center - amplitude / 2), bar_width, int(amplitude), 3, 3)


def paste_clipboard_text():
    """Send Ctrl+V using the native display path when possible."""
    if os.environ.get('WAYLAND_DISPLAY') and shutil.which('wtype'):
        try:
            subprocess.run(
                ['wtype', '-M', 'ctrl', '-k', 'v', '-m', 'ctrl'],
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


class RecordingIndicator(QWidget):
    """Focus-safe floating status capsule for the dictation lifecycle."""

    COLORS = {
        'recording': '#FF5A5F',
        'processing': '#4F8CFF',
        'ready': '#35B99A',
        'cancelled': '#94A3AE',
        'error': '#E24A4A',
    }

    def __init__(self):
        super().__init__(None)
        self.setWindowFlags(
            Qt.WindowType.Tool
            | Qt.WindowType.FramelessWindowHint
            | Qt.WindowType.WindowStaysOnTopHint
            | Qt.WindowType.WindowDoesNotAcceptFocus
        )
        self.setAttribute(Qt.WidgetAttribute.WA_TranslucentBackground)
        self.setAttribute(Qt.WidgetAttribute.WA_ShowWithoutActivating)
        self.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)
        self.setFixedSize(340, 82)

        self._elapsed_seconds = 0
        self._state = 'ready'
        self._hide_generation = 0

        outer_layout = QVBoxLayout(self)
        outer_layout.setContentsMargins(0, 0, 0, 0)

        self.card = QFrame()
        self.card.setObjectName('recordingCard')
        card_layout = QHBoxLayout(self.card)
        card_layout.setContentsMargins(18, 12, 18, 12)
        card_layout.setSpacing(14)

        waveform = QWidget()
        waveform.setFixedSize(38, 34)
        waveform_layout = QHBoxLayout(waveform)
        waveform_layout.setContentsMargins(0, 0, 0, 0)
        waveform_layout.setSpacing(4)
        waveform_layout.setAlignment(Qt.AlignmentFlag.AlignBottom)
        self.bars = []
        for height in (8, 16, 24, 12):
            bar = QFrame()
            bar.setFixedSize(6, height)
            self.bars.append(bar)
            waveform_layout.addWidget(bar, alignment=Qt.AlignmentFlag.AlignBottom)
        card_layout.addWidget(waveform)

        text_layout = QVBoxLayout()
        text_layout.setSpacing(2)
        self.state_label = QLabel('Recording')
        self.state_label.setFont(QFont('Sans Serif', 11, QFont.Weight.DemiBold))
        self.hint_label = QLabel('Esc: cancel')
        self.hint_label.setFont(QFont('Sans Serif', 9))
        text_layout.addWidget(self.state_label)
        text_layout.addWidget(self.hint_label)
        card_layout.addLayout(text_layout, 1)

        self.timer_label = QLabel('00:00')
        self.timer_label.setFont(QFont('Monospace', 10, QFont.Weight.DemiBold))
        card_layout.addWidget(self.timer_label)
        outer_layout.addWidget(self.card)

        self.elapsed_timer = QTimer(self)
        self.elapsed_timer.timeout.connect(self._tick)
        self._apply_state('recording')

    def _apply_state(self, state):
        self._state = state
        accent = self.COLORS[state]
        self.card.setStyleSheet(
            f"""
            QFrame#recordingCard {{
                background-color: #F4F7F9;
                border: 1px solid #CBD6DD;
                border-radius: 18px;
            }}
            QLabel {{ color: #14202B; background: transparent; border: none; }}
            """
        )
        self.hint_label.setStyleSheet('color: #60727F;')
        self.timer_label.setStyleSheet(f'color: {accent};')
        for bar in self.bars:
            bar.setStyleSheet(f'background-color: {accent}; border-radius: 3px;')

    def _position_on_active_screen(self):
        screen = QApplication.screenAt(QCursor.pos()) or QApplication.primaryScreen()
        if screen:
            area = screen.availableGeometry()
            self.move(area.right() - self.width() - 24, area.top() + 24)

    def _tick(self):
        self._elapsed_seconds += 1
        minutes, seconds = divmod(self._elapsed_seconds, 60)
        self.timer_label.setText(f'{minutes:02d}:{seconds:02d}')

    def start_recording(self, trigger_key='Mouse5', hold_to_talk=False):
        self._hide_generation += 1
        self._elapsed_seconds = 0
        self.timer_label.setText('00:00')
        self.state_label.setText('Listening')
        if hold_to_talk:
            self.hint_label.setText(f'Release {trigger_key} to insert')
        else:
            self.hint_label.setText(f'{trigger_key}: press again to finish')
        self._apply_state('recording')
        self.elapsed_timer.start(1000)
        self._position_on_active_screen()
        self.show()
        self.raise_()

    def update_volume(self, volume):
        if self._state != 'recording':
            return
        level = max(0.0, min(float(volume), 1.0))
        for bar, factor in zip(self.bars, (0.55, 0.9, 1.0, 0.7)):
            bar.setFixedHeight(7 + int(25 * level * factor))

    def show_processing(self):
        self.elapsed_timer.stop()
        self.state_label.setText('Transcribing')
        self.hint_label.setText('Polishing your text…')
        self._apply_state('processing')
        for bar, height in zip(self.bars, (10, 18, 26, 14)):
            bar.setFixedHeight(height)
        self._position_on_active_screen()
        self.show()

    def show_result(self, inserted):
        self.elapsed_timer.stop()
        self.state_label.setText('Text inserted' if inserted else 'Text ready')
        self.hint_label.setText('Ready for another dictation')
        self.timer_label.setText('✓')
        self._apply_state('ready')
        self._position_on_active_screen()
        self.show()
        self._hide_later(1400)

    def show_cancelled(self, message='Recording cancelled'):
        self.elapsed_timer.stop()
        self.state_label.setText(message)
        self.hint_label.setText('Audio was not saved')
        self.timer_label.setText('×')
        self._apply_state('cancelled')
        self._position_on_active_screen()
        self.show()
        self._hide_later(1200)

    def show_error(self):
        self.elapsed_timer.stop()
        self.state_label.setText('Dictation error')
        self.hint_label.setText('Open the app for details')
        self.timer_label.setText('!')
        self._apply_state('error')
        self._position_on_active_screen()
        self.show()
        self._hide_later(2200)

    def _hide_later(self, delay_ms):
        self._hide_generation += 1
        generation = self._hide_generation
        QTimer.singleShot(
            delay_ms,
            lambda: self.hide() if generation == self._hide_generation else None,
        )


class SettingsDialog(QDialog):
    """Settings dialog window"""
    
    def __init__(self, parent=None):
        super().__init__(parent)
        
        self.setWindowTitle("Settings — Whisper Linux Dictation")
        self.setMinimumSize(600, 620)
        self.resize(640, 740)
        self.setStyleSheet(APP_STYLESHEET)
        
        # Load settings
        self.settings = get_settings()
        
        self._create_ui()
    
    def _create_ui(self):
        """Create dialog UI"""
        self.setObjectName('dialogRoot')
        main_layout = QVBoxLayout(self)
        main_layout.setContentsMargins(28, 24, 28, 24)
        main_layout.setSpacing(16)

        heading = QLabel('Settings')
        heading.setObjectName('statusTitle')
        main_layout.addWidget(heading)
        caption = QLabel('Tune recognition and choose what happens after each dictation.')
        caption.setObjectName('sectionCaption')
        main_layout.addWidget(caption)

        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setHorizontalScrollBarPolicy(Qt.ScrollBarPolicy.ScrollBarAlwaysOff)
        scroll_content = QWidget()
        scroll_layout = QVBoxLayout(scroll_content)
        scroll_layout.setContentsMargins(0, 0, 8, 6)
        scroll_layout.setSpacing(16)
        
        # Model selection group
        model_group = QGroupBox("Recognition")
        model_group.setObjectName('settingsSection')
        model_layout = QFormLayout(model_group)
        model_layout.setContentsMargins(18, 22, 18, 18)
        model_layout.setHorizontalSpacing(24)
        model_layout.setVerticalSpacing(12)
        
        self.model_combo = QComboBox()
        self.model_combo.addItems(['tiny', 'small', 'base', 'large'])
        self.model_combo.setCurrentText(self.settings.get('model', 'small'))
        self.model_combo.setToolTip('Smaller models are faster; larger models are more accurate.')
        model_layout.addRow("Whisper model", self.model_combo)
        
        self.lang_combo = QComboBox()
        self.languages = [
            ('Automatic — Russian + English', 'auto'),
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
        model_layout.addRow("Language", self.lang_combo)
        
        # Trigger key group
        key_group = QGroupBox("Shortcut")
        key_group.setObjectName('settingsSection')
        key_layout = QFormLayout(key_group)
        key_layout.setContentsMargins(18, 22, 18, 18)
        key_layout.setHorizontalSpacing(24)
        key_layout.setVerticalSpacing(10)
        
        self.trigger_key_edit = QLineEdit()
        self.trigger_key_edit.setText(self.settings.get('trigger_key', 'Mouse5'))
        self.trigger_key_edit.setPlaceholderText('Mouse5, F12, CapsLock…')
        self.trigger_key_edit.setClearButtonEnabled(True)
        key_layout.addRow("Dictation key", self.trigger_key_edit)
        shortcut_hint = QLabel('Mouse side buttons use hold-to-talk. Keyboard keys toggle recording.')
        shortcut_hint.setObjectName('sectionCaption')
        shortcut_hint.setWordWrap(True)
        key_layout.addRow('', shortcut_hint)
        
        # Additional options group
        opts_group = QGroupBox("After dictation")
        opts_group.setObjectName('settingsSection')
        opts_group.setMinimumHeight(180)
        opts_layout = QVBoxLayout(opts_group)
        opts_layout.setContentsMargins(18, 22, 18, 18)
        opts_layout.setSpacing(10)
        
        self.auto_copy_check = QCheckBox("Keep the result on the clipboard")
        self.auto_copy_check.setMinimumHeight(24)
        self.auto_copy_check.setChecked(self.settings.get('auto_copy_to_clipboard', True))
        opts_layout.addWidget(self.auto_copy_check)
        
        self.inject_window_check = QCheckBox("Paste into the previously focused app")
        self.inject_window_check.setMinimumHeight(24)
        self.inject_window_check.setChecked(self.settings.get('inject_into_focused_window', True))
        opts_layout.addWidget(self.inject_window_check)

        self.improve_text_check = QCheckBox("Polish capitalization, spacing, and punctuation")
        self.improve_text_check.setMinimumHeight(24)
        self.improve_text_check.setChecked(self.settings.get('auto_improve_text', True))
        opts_layout.addWidget(self.improve_text_check)

        self.remove_fillers_check = QCheckBox("Remove filler words")
        self.remove_fillers_check.setMinimumHeight(24)
        self.remove_fillers_check.setChecked(self.settings.get('remove_filler_words', False))
        self.remove_fillers_check.setEnabled(self.improve_text_check.isChecked())
        self.improve_text_check.toggled.connect(self.remove_fillers_check.setEnabled)
        opts_layout.addWidget(self.remove_fillers_check)
        
        scroll_layout.addWidget(model_group)
        scroll_layout.addWidget(key_group)
        scroll_layout.addWidget(opts_group)
        scroll_layout.addStretch(1)
        scroll.setWidget(scroll_content)
        main_layout.addWidget(scroll, 1)
        
        # Buttons
        button_layout = QHBoxLayout()
        button_layout.addStretch(1)
        
        self.cancel_btn = QPushButton("Cancel")
        self.cancel_btn.clicked.connect(self.reject)
        button_layout.addWidget(self.cancel_btn)

        self.save_btn = QPushButton("Save changes")
        self.save_btn.setObjectName('primaryButton')
        self.save_btn.setDefault(True)
        self.save_btn.clicked.connect(self._save_and_close)
        button_layout.addWidget(self.save_btn)
        
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
            
            self.accept()
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to save settings:\n{e}")


from pynput import keyboard, mouse


class GlobalHotkeyListener(QObject):
    hotkey_triggered = pyqtSignal()
    hold_started = pyqtSignal()
    hold_released = pyqtSignal()
    cancel_triggered = pyqtSignal()
    
    def __init__(self, key_name='Mouse5'):
        super().__init__()
        self.key_name = key_name
        self.listener = None
        self.mouse_listener = None
        self._pressed = False
        self._mouse_pressed = False
        self._escape_pressed = False

    @property
    def is_hold_to_talk(self):
        configured = self.key_name.strip().lower().replace(' ', '')
        return configured in {'mouse4', 'mouse5', 'x1', 'x2'}

    def _configured_mouse_button(self):
        configured = self.key_name.strip().lower().replace(' ', '')
        if configured in {'mouse4', 'x1'}:
            return getattr(mouse.Button, 'button8', getattr(mouse.Button, 'x1', None))
        return getattr(mouse.Button, 'button9', getattr(mouse.Button, 'x2', None))

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
                if not self.is_hold_to_talk and self._matches(key) and not self._pressed:
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

        if self.is_hold_to_talk:
            target_button = self._configured_mouse_button()

            def on_click(x, y, button, pressed):
                if button != target_button:
                    return
                if pressed and not self._mouse_pressed:
                    self._mouse_pressed = True
                    self.hold_started.emit()
                elif not pressed and self._mouse_pressed:
                    self._mouse_pressed = False
                    self.hold_released.emit()

            try:
                self.mouse_listener = mouse.Listener(on_click=on_click)
                self.mouse_listener.daemon = True
                self.mouse_listener.start()
            except Exception as e:
                print(f"Could not start mouse hotkey listener: {e}")

    def stop(self):
        if self.listener:
            try:
                self.listener.stop()
            except Exception:
                pass
            self.listener = None
            self._pressed = False
            self._escape_pressed = False
        if self.mouse_listener:
            try:
                self.mouse_listener.stop()
            except Exception:
                pass
            self.mouse_listener = None
        self._mouse_pressed = False


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
        self._hold_to_talk_active = False
        self._animations = []
        self._progress_animation = None
        self._toast_generation = 0
        
        # Timer for status updates
        self.status_timer = QTimer()
        self.status_timer.timeout.connect(self._update_status)
        
        # Setup UI
        self._create_ui()
        self.recording_indicator = RecordingIndicator()
        
        # Connect signals
        self._connect_signals()

        # Load and initialize model
        self._load_model()
        
        # Global Hotkey Listener
        trigger_key = self.settings.get('trigger_key', 'Mouse5')
        self.hotkey_listener = GlobalHotkeyListener(trigger_key)
        self.hotkey_listener.hotkey_triggered.connect(self._toggle_dictation)
        self.hotkey_listener.hold_started.connect(self._start_hold_dictation)
        self.hotkey_listener.hold_released.connect(self._stop_hold_dictation)
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

    def resizeEvent(self, event):
        """Adapt the hero and page gutters for narrower desktop windows."""
        super().resizeEvent(event)
        if not hasattr(self, 'hero_layout'):
            return
        compact = self.width() < 760
        self.hero_layout.setDirection(
            QBoxLayout.Direction.TopToBottom
            if compact
            else QBoxLayout.Direction.LeftToRight
        )
        gutter = 18 if compact else 30
        self.main_layout.setContentsMargins(gutter, 20, gutter, 22)
        self.signal_panel.setMinimumHeight(116 if compact else 0)
        self._position_toast()

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
        self.recording_indicator.close()
    
    def _create_ui(self):
        """Create a focused dictation dashboard and editable history."""
        self.setWindowTitle("Whisper Linux Dictation")
        self.setMinimumSize(680, 600)
        self.resize(920, 700)
        self.setStyleSheet(APP_STYLESHEET)

        central = QWidget()
        central.setObjectName('appRoot')
        self.setCentralWidget(central)
        main_layout = QVBoxLayout(central)
        self.main_layout = main_layout
        main_layout.setContentsMargins(30, 24, 30, 24)
        main_layout.setSpacing(18)

        header = QHBoxLayout()
        header.setSpacing(12)
        brand_mark = QLabel('W')
        brand_mark.setObjectName('brandMark')
        brand_mark.setFixedSize(40, 40)
        brand_mark.setAlignment(Qt.AlignmentFlag.AlignCenter)
        header.addWidget(brand_mark)
        brand_text = QVBoxLayout()
        brand_text.setSpacing(0)
        brand_name = QLabel('Whisper Dictation')
        brand_name.setObjectName('brandName')
        brand_caption = QLabel('LOCAL VOICE WORKSPACE')
        brand_caption.setObjectName('brandCaption')
        brand_text.addWidget(brand_name)
        brand_text.addWidget(brand_caption)
        header.addLayout(brand_text)
        header.addStretch(1)
        privacy_badge = QLabel('Local processing')
        privacy_badge.setObjectName('privacyBadge')
        privacy_badge.setToolTip('Audio is processed on this computer.')
        header.addWidget(privacy_badge)
        self.settings_btn = QPushButton('Settings')
        self.settings_btn.setToolTip('Recognition, shortcut, and output settings')
        self.settings_btn.clicked.connect(self._open_settings)
        header.addWidget(self.settings_btn)
        main_layout.addLayout(header)

        self.tabs = QTabWidget()
        self.tabs.setDocumentMode(True)

        dictation_tab = QWidget()
        dictation_layout = QVBoxLayout(dictation_tab)
        dictation_layout.setContentsMargins(0, 18, 0, 0)
        dictation_layout.setSpacing(14)

        hero = QFrame()
        self.hero_card = hero
        hero.setObjectName('heroCard')
        hero_layout = QHBoxLayout(hero)
        self.hero_layout = hero_layout
        hero_layout.setContentsMargins(26, 24, 24, 24)
        hero_layout.setSpacing(28)

        status_column = QVBoxLayout()
        status_column.setSpacing(8)
        eyebrow_row = QHBoxLayout()
        eyebrow_row.setSpacing(8)
        self.indicator_frame = QFrame()
        self.indicator_frame.setObjectName('statusDot')
        self.indicator_frame.setProperty('state', 'ready')
        self.indicator_frame.setFixedSize(10, 10)
        eyebrow_row.addWidget(self.indicator_frame)
        eyebrow = QLabel('MICROPHONE READY')
        eyebrow.setObjectName('eyebrow')
        self.state_eyebrow = eyebrow
        eyebrow_row.addWidget(eyebrow)
        eyebrow_row.addStretch(1)
        status_column.addLayout(eyebrow_row)

        self.status_label = QLabel('Ready when you are')
        self.status_label.setObjectName('statusTitle')
        self.status_label.setWordWrap(True)
        status_column.addWidget(self.status_label)
        self.detail_label = QLabel('Hold your shortcut, speak naturally, then release to insert text.')
        self.detail_label.setObjectName('sectionCaption')
        self.detail_label.setWordWrap(True)
        status_column.addWidget(self.detail_label)
        status_column.addStretch(1)

        key_row = QHBoxLayout()
        key_row.setSpacing(9)
        self.shortcut_label = QLabel(self.settings.get('trigger_key', 'Mouse5'))
        self.shortcut_label.setObjectName('shortcutKey')
        key_row.addWidget(self.shortcut_label)
        self.shortcut_hint = QLabel('hold to talk')
        self.shortcut_hint.setObjectName('mutedLabel')
        key_row.addWidget(self.shortcut_hint)
        key_row.addStretch(1)
        status_column.addLayout(key_row)
        hero_layout.addLayout(status_column, 3)

        signal_panel = QFrame()
        self.signal_panel = signal_panel
        signal_panel.setObjectName('signalPanel')
        signal_layout = QVBoxLayout(signal_panel)
        signal_layout.setContentsMargins(18, 14, 18, 12)
        signal_layout.setSpacing(2)
        signal_head = QHBoxLayout()
        signal_title = QLabel('INPUT SIGNAL')
        signal_title.setObjectName('eyebrow')
        signal_head.addWidget(signal_title)
        signal_head.addStretch(1)
        self.signal_state_label = QLabel('STANDBY')
        self.signal_state_label.setObjectName('signalState')
        signal_head.addWidget(self.signal_state_label)
        signal_layout.addLayout(signal_head)
        self.waveform = WaveformWidget()
        signal_layout.addWidget(self.waveform, 1)
        hero_layout.addWidget(signal_panel, 2)
        dictation_layout.addWidget(hero)

        controls = QHBoxLayout()
        controls.setSpacing(10)
        self.start_btn = QPushButton('Start dictation')
        self.start_btn.setObjectName('primaryButton')
        self.start_btn.setAccessibleName('Start or stop dictation')
        self.start_btn.clicked.connect(self._toggle_dictation)
        controls.addWidget(self.start_btn, 1)
        self.stop_btn = QPushButton('Cancel recording')
        self.stop_btn.setObjectName('dangerButton')
        self.stop_btn.setEnabled(False)
        self.stop_btn.clicked.connect(self._cancel_dictation)
        controls.addWidget(self.stop_btn)
        dictation_layout.addLayout(controls)

        metrics = QHBoxLayout()
        self.metrics_layout = metrics
        metrics.setSpacing(10)
        self.model_value = self._add_metric(metrics, 'MODEL', '')
        self.language_value = self._add_metric(metrics, 'LANGUAGE', '')
        self.hotkey_value = self._add_metric(metrics, 'SHORTCUT', '')
        dictation_layout.addLayout(metrics)

        latest_card = QFrame()
        latest_card.setObjectName('contentCard')
        latest_layout = QVBoxLayout(latest_card)
        latest_layout.setContentsMargins(20, 17, 20, 18)
        latest_layout.setSpacing(10)
        latest_head = QHBoxLayout()
        latest_title = QLabel('Latest transcript')
        latest_title.setObjectName('sectionTitle')
        latest_head.addWidget(latest_title)
        latest_head.addStretch(1)
        open_history = QPushButton('Open history')
        open_history.clicked.connect(lambda: self.tabs.setCurrentIndex(1))
        latest_head.addWidget(open_history)
        latest_layout.addLayout(latest_head)
        self.latest_text = QLabel('Your next transcription will appear here.')
        self.latest_text.setObjectName('latestTranscript')
        self.latest_text.setProperty('empty', True)
        self.latest_text.setWordWrap(True)
        self.latest_text.setTextInteractionFlags(Qt.TextInteractionFlag.TextSelectableByMouse)
        self.latest_text.setMinimumHeight(34)
        latest_layout.addWidget(self.latest_text)
        self.progress_bar = QProgressBar()
        self.progress_bar.setValue(0)
        self.progress_bar.setTextVisible(False)
        latest_layout.addWidget(self.progress_bar)
        dictation_layout.addWidget(latest_card)
        dictation_layout.addStretch(1)

        history_tab = QWidget()
        history_layout = QVBoxLayout(history_tab)
        history_layout.setContentsMargins(0, 18, 0, 0)
        history_layout.setSpacing(14)
        history_header = QHBoxLayout()
        history_copy = QVBoxLayout()
        history_title = QLabel('Dictation history')
        history_title.setObjectName('statusTitle')
        history_caption = QLabel('Edit, search, copy, or export your locally stored transcripts.')
        history_caption.setObjectName('sectionCaption')
        history_copy.addWidget(history_title)
        history_copy.addWidget(history_caption)
        history_header.addLayout(history_copy)
        history_header.addStretch(1)
        history_layout.addLayout(history_header)

        toolbar_layout = QHBoxLayout()
        toolbar_layout.setSpacing(8)
        self.search_input = QLineEdit()
        self.search_input.setPlaceholderText('Search transcripts')
        self.search_input.setClearButtonEnabled(True)
        self.search_input.textChanged.connect(self._filter_history)
        toolbar_layout.addWidget(self.search_input, 1)
        self.copy_btn = QPushButton('Copy all')
        self.copy_btn.clicked.connect(self._copy_history_to_clipboard)
        toolbar_layout.addWidget(self.copy_btn)
        self.export_btn = QPushButton('Export text')
        self.export_btn.clicked.connect(self._export_history_to_file)
        toolbar_layout.addWidget(self.export_btn)
        self.clear_btn = QPushButton('Clear')
        self.clear_btn.setObjectName('dangerButton')
        self.clear_btn.clicked.connect(self._clear_history)
        toolbar_layout.addWidget(self.clear_btn)
        history_layout.addLayout(toolbar_layout)

        self.history_edit = QPlainTextEdit()
        self.history_edit.setPlaceholderText('No dictations yet. Start recording from the Dictation tab.')
        self.history_edit.setLineWrapMode(QPlainTextEdit.LineWrapMode.WidgetWidth)
        self.history_edit.textChanged.connect(self._on_history_text_changed)
        history_layout.addWidget(self.history_edit, 1)
        self.history_stats_label = QLabel('0 entries  ·  0 words  ·  0 characters')
        self.history_stats_label.setObjectName('historyStats')
        history_layout.addWidget(self.history_stats_label)

        self.tabs.addTab(dictation_tab, 'Dictation')
        self.tabs.addTab(history_tab, 'History')
        self.tabs.currentChanged.connect(self._animate_tab_change)
        main_layout.addWidget(self.tabs, 1)

        self.toast = QLabel('', central)
        self.toast.setObjectName('toast')
        self.toast.setAttribute(Qt.WidgetAttribute.WA_TransparentForMouseEvents)
        self.toast.hide()

        self._refresh_quick_settings()
        self._load_history_file()

    def _position_toast(self):
        if not hasattr(self, 'toast'):
            return
        self.toast.adjustSize()
        self.toast.move(
            self.centralWidget().width() - self.toast.width() - 22,
            self.centralWidget().height() - self.toast.height() - 20,
        )

    def _show_toast(self, message):
        """Show lightweight confirmation without interrupting the workflow."""
        self._toast_generation += 1
        generation = self._toast_generation
        self.toast.setText(message)
        self._position_toast()
        self.toast.show()
        self.toast.raise_()
        self._animate_opacity(self.toast, 0.15, 1.0, 150)
        QTimer.singleShot(1550, lambda: self._hide_toast(generation))

    def _hide_toast(self, generation):
        if generation != self._toast_generation or not self.toast.isVisible():
            return
        self._animate_opacity(self.toast, 1.0, 0.0, 180, self.toast.hide)

    def _animate_opacity(self, widget, start, end, duration, finished=None):
        effect = QGraphicsOpacityEffect(widget)
        widget.setGraphicsEffect(effect)
        animation = QPropertyAnimation(effect, b'opacity', self)
        animation.setDuration(duration)
        animation.setStartValue(start)
        animation.setEndValue(end)
        animation.setEasingCurve(QEasingCurve.Type.OutCubic)
        self._animations.append(animation)

        def cleanup():
            if finished:
                finished()
            widget.setGraphicsEffect(None)
            if animation in self._animations:
                self._animations.remove(animation)

        animation.finished.connect(cleanup)
        animation.start()

    def _set_progress(self, value, animated=True):
        """Ease meaningful progress changes without running a busy animation."""
        target = max(0, min(int(value), 100))
        if not animated or not self.isVisible():
            self.progress_bar.setValue(target)
            return
        if self._progress_animation is not None:
            self._progress_animation.stop()
        animation = QPropertyAnimation(self.progress_bar, b'value', self)
        animation.setDuration(220)
        animation.setStartValue(self.progress_bar.value())
        animation.setEndValue(target)
        animation.setEasingCurve(QEasingCurve.Type.OutCubic)
        self._progress_animation = animation
        animation.start()

    def _animate_tab_change(self, index):
        """Use one restrained fade when navigating between workspaces."""
        self._fade_widget(self.tabs.widget(index), duration=170)

    def _fade_widget(self, widget, duration=200):
        if widget is None or not widget.isVisible():
            return
        effect = QGraphicsOpacityEffect(widget)
        widget.setGraphicsEffect(effect)
        animation = QPropertyAnimation(effect, b'opacity', self)
        animation.setDuration(duration)
        animation.setStartValue(0.25)
        animation.setEndValue(1.0)
        animation.setEasingCurve(QEasingCurve.Type.OutCubic)
        self._animations.append(animation)

        def finish():
            widget.setGraphicsEffect(None)
            if animation in self._animations:
                self._animations.remove(animation)

        animation.finished.connect(finish)
        animation.start()

    def _add_metric(self, layout, label, value):
        card = QFrame()
        card.setObjectName('metricCard')
        card_layout = QVBoxLayout(card)
        card_layout.setContentsMargins(15, 12, 15, 12)
        card_layout.setSpacing(3)
        label_widget = QLabel(label)
        label_widget.setObjectName('metricLabel')
        value_widget = QLabel(value)
        value_widget.setObjectName('metricValue')
        card_layout.addWidget(label_widget)
        card_layout.addWidget(value_widget)
        layout.addWidget(card, 1)
        return value_widget

    def _refresh_quick_settings(self):
        model = self.settings.get('model', 'small')
        language = normalize_language(self.settings.get('language', 'auto'))
        trigger_key = self.settings.get('trigger_key', 'Mouse5')
        language_names = {'auto': 'Russian + English', 'ru': 'Russian', 'en': 'English'}
        self.model_value.setText(model.capitalize())
        self.language_value.setText(language_names.get(language, language))
        self.hotkey_value.setText(trigger_key)
        self.shortcut_label.setText(trigger_key)
        hold_to_talk = trigger_key.strip().lower().replace(' ', '') in {'mouse4', 'mouse5', 'x1', 'x2'}
        self.shortcut_hint.setText('hold to talk' if hold_to_talk else 'press to start or stop')

    def _set_ui_state(self, state, title, detail=None):
        labels = {
            'ready': ('MICROPHONE READY', 'STANDBY'),
            'recording': ('RECORDING', 'LIVE'),
            'processing': ('TRANSCRIBING', 'PROCESSING'),
            'error': ('ATTENTION NEEDED', 'ERROR'),
            'muted': ('NOT RECORDING', 'STANDBY'),
        }
        eyebrow, signal = labels.get(state, labels['ready'])
        self.state_eyebrow.setText(eyebrow)
        self.signal_state_label.setText(signal)
        self.status_label.setText(title)
        if detail is not None:
            self.detail_label.setText(detail)
        for widget in (
            self.indicator_frame,
            self.hero_card,
            self.signal_panel,
            self.signal_state_label,
        ):
            widget.setProperty('state', state)
            widget.style().unpolish(widget)
            widget.style().polish(widget)
        is_recording = state == 'recording'
        self.waveform.set_active(is_recording)
        self.start_btn.setProperty('recording', is_recording)
        self.start_btn.style().unpolish(self.start_btn)
        self.start_btn.style().polish(self.start_btn)
        self.start_btn.setText('Finish dictation' if is_recording else 'Start dictation')
        self.start_btn.setEnabled(state in {'ready', 'recording', 'muted'})
        self.stop_btn.setEnabled(is_recording)
    
    def _load_model(self):
        """Load Whisper model based on settings"""
        try:
            if self.model_worker and self.model_worker.isRunning():
                return

            model_size = self.settings.get('model', 'small')
            language = normalize_language(self.settings.get('language', 'auto'))

            self._set_ui_state(
                'processing',
                f'Loading the {model_size} model',
                'The first launch may download model files. You can keep this window open.',
            )
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
            self._set_ui_state(
                'ready', 'Ready when you are',
                'Use your shortcut or the button below to begin dictating.',
            )
        else:
            self._set_ui_state(
                'error', 'Model could not be loaded',
                'Check the error message, then try a smaller model in Settings.',
            )

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
        self.audio_handler.volume_changed.connect(self.recording_indicator.update_volume)
        self.audio_handler.volume_changed.connect(self.waveform.set_level)
    
    def _toggle_dictation(self):
        """Toggle dictation on/off"""
        if not self.is_listening:
            self._start_dictation()
        else:
            self._stop_dictation()

    def _start_hold_dictation(self):
        """Begin recording while Mouse 5 is held."""
        self._start_dictation(hold_to_talk=True)

    def _stop_hold_dictation(self):
        """Transcribe and insert when Mouse 5 is released."""
        if self.is_listening and self._hold_to_talk_active:
            self._stop_dictation()
    
    def _start_dictation(self, hold_to_talk=False):
        """Start real-time dictation mode"""
        try:
            if self.is_listening:
                return
            if self.worker and self.worker.isRunning():
                self.detail_label.setText('Finish the current transcription before recording again.')
                return

            # Start audio capture
            if not self.whisper_engine.is_loaded:
                if not self.model_worker or not self.model_worker.isRunning():
                    self._load_model()
                self.detail_label.setText('The speech model is still loading.')
                return

            if not self.audio_handler.start_recording():
                self._set_ui_state(
                    'error', 'Microphone unavailable',
                    'Check the input device and its permissions, then try again.',
                )
                return

            self.recording_indicator.start_recording(
                self.settings.get('trigger_key', 'Mouse5'),
                hold_to_talk=hold_to_talk,
            )
            
            # Update UI state
            self.is_listening = True
            self._hold_to_talk_active = hold_to_talk
            self._set_ui_state(
                'recording', 'Listening…',
                'Speak naturally. Release your mouse button or finish when you are done.',
            )
            self._set_progress(0)
        
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
            self._hold_to_talk_active = False
            self._set_ui_state(
                'processing', 'Turning speech into text',
                'Recognition runs locally. This usually takes only a moment.',
            )
        
        except Exception as e:
            QMessageBox.critical(self, "Error", f"Failed to stop dictation:\n{e}")

    def _cancel_dictation(self):
        """Discard the active recording without transcribing it."""
        if not self.is_listening:
            return
        self.audio_handler.stop_recording(emit_audio=False)
        self.is_listening = False
        self._hold_to_talk_active = False
        self._set_ui_state('muted', 'Recording cancelled', 'The audio was discarded.')
        self._set_progress(0)
        self.recording_indicator.show_cancelled()

    def _on_recording_finished(self, audio_data):
        """Process recorded audio array through Whisper model"""
        try:
            self.recording_indicator.show_processing()
            if len(audio_data) < 3200:  # less than 0.2 sec
                self._set_ui_state(
                    'muted', 'That was too short',
                    'Hold the shortcut a little longer while speaking.',
                )
                self.recording_indicator.show_cancelled('Recording too short')
                return

            self._set_ui_state(
                'processing', 'Turning speech into text',
                'Whisper is recognizing your recording locally.',
            )
            self._set_progress(40)

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
        self._set_progress(100)
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
            self._set_ui_state(
                'ready', 'Text ready',
                'The transcript was saved to History and is ready to use.',
            )
            
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
            self.recording_indicator.show_result(should_inject)
        else:
            self._set_ui_state(
                'muted', 'No speech detected',
                'Try again a little closer to the microphone.',
            )
            self.recording_indicator.show_cancelled('No speech detected')
    
    def _open_settings(self):
        """Open settings dialog"""
        try:
            dialog = SettingsDialog(self)
            if dialog.exec() == 1:  # QDialog.Accepted
                self.hotkey_listener.stop()
                trigger_key = self.settings.get('trigger_key', 'Mouse5')
                self.hotkey_listener = GlobalHotkeyListener(trigger_key)
                self.hotkey_listener.hotkey_triggered.connect(self._toggle_dictation)
                self.hotkey_listener.hold_started.connect(self._start_hold_dictation)
                self.hotkey_listener.hold_released.connect(self._stop_hold_dictation)
                self.hotkey_listener.cancel_triggered.connect(self._cancel_dictation)
                self.hotkey_listener.start()
                self._refresh_quick_settings()
                self._show_toast('Settings saved')
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

                self.latest_text.setText(cleaned)
                self.latest_text.setProperty('empty', False)
                self.latest_text.style().unpolish(self.latest_text)
                self.latest_text.style().polish(self.latest_text)
                self._fade_widget(self.latest_text, duration=220)
                
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
                    entries = [line.strip() for line in content.splitlines() if line.strip()]
                    if entries:
                        latest = entries[-1].split('] ', 1)[-1]
                        self.latest_text.setText(latest)
                        self.latest_text.setProperty('empty', False)
                        self.latest_text.style().unpolish(self.latest_text)
                        self.latest_text.style().polish(self.latest_text)
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
        self.history_stats_label.setText(
            f"{lines} entries  ·  {words} words  ·  {chars} characters"
        )

    def _copy_history_to_clipboard(self):
        """Copy all text in notepad to system clipboard"""
        text = self.history_edit.toPlainText()
        if text.strip():
            clipboard = QApplication.clipboard()
            clipboard.setText(text)
            self._show_toast('History copied to clipboard')
        else:
            self._show_toast('History is empty')

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
                self._show_toast('History exported')
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
        """Move to a match and give immediate, non-blocking search feedback."""
        if not search_term.strip():
            self.search_input.setProperty('noMatch', False)
            self.search_input.setToolTip('')
            self.search_input.style().unpolish(self.search_input)
            self.search_input.style().polish(self.search_input)
            return
        doc = self.history_edit.document()
        cursor = doc.find(search_term)
        no_match = cursor.isNull()
        self.search_input.setProperty('noMatch', no_match)
        self.search_input.setToolTip('No matching transcript' if no_match else '')
        self.search_input.style().unpolish(self.search_input)
        self.search_input.style().polish(self.search_input)
        if not cursor.isNull():
            self.history_edit.setTextCursor(cursor)
    
    def _on_progress(self, progress, message):
        """Handle progress updates"""
        try:
            self._set_progress(progress)
            self.detail_label.setText(message)
        
        except Exception as e:
            print(f"Error handling progress: {e}")
    
    def _on_status(self, status_message):
        """Handle status message changes"""
        try:
            if status_message:
                self.detail_label.setText(status_message)
        
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
            self.is_listening = False
            self._set_ui_state(
                'error', 'Something needs attention',
                'Review the message, check your audio setup, and try again.',
            )
            self.recording_indicator.show_error()
            QMessageBox.warning(self, "Dictation error", error_msg)
        
        except Exception as e:
            print(f"Error handling error: {e}")
    
    def _update_status(self):
        """Periodic status update (for VAD monitoring)"""
        try:
            if self.is_listening and self.audio_handler.is_recording:
                volume = self.audio_handler.get_volume_level()
                self.waveform.set_level(volume)
        
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
