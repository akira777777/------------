#!/usr/bin/env python3
"""
Whisper Linux Dictation - Main Entry Point
A lightweight speech-to-text application for Ubuntu/Linux
Similar to SuperWhisper and Whisper Desktop
"""

import sys
import signal
from PyQt6.QtWidgets import QApplication, QSystemTrayIcon, QMenu
from PyQt6.QtGui import QIcon
from PyQt6.QtCore import QTimer
from pathlib import Path

from .gui.main_window import MainWindow
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('main')

class WhisperDictationApp:
    """Main application class that manages the dictation workflow"""
    
    def __init__(self):
        self.app = QApplication(sys.argv)
        self.app.setQuitOnLastWindowClosed(False)
        
        # Set application info
        self.app.setApplicationName("Whisper Linux Dictation")
        self.app.setApplicationVersion("1.0.0")
        self.app.setOrganizationName("whisper-linux-dictation")
        
        # Load icon if available
        self.icon_path = Path(__file__).with_name('icon.png')
        if self.icon_path.exists():
            self.app.setWindowIcon(QIcon(str(self.icon_path)))
        
        # Create main window
        self.main_window = MainWindow()
        if self.icon_path.exists():
            self.main_window.setWindowIcon(QIcon(str(self.icon_path)))
        
        # Application state
        self.is_running = False
        self.tray_icon = QSystemTrayIcon(self.app)
        
        # Setup tray icon and context menu
        self._setup_tray_icon()
        self.app.aboutToQuit.connect(self.main_window.shutdown)
        
        # Show main GUI window on start
        self.main_window.show()
        self.main_window.raise_()
        self.main_window.activateWindow()
        
        logger.info(f"Whisper Linux Dictation v{self.app.applicationVersion()} initialized with GUI")
    
    def _setup_tray_icon(self):
        """Setup system tray icon for background mode"""
        try:
            if self.icon_path.exists():
                self.tray_icon.setIcon(QIcon(str(self.icon_path)))
            else:
                self.tray_icon.setIcon(QIcon())
            
            self.tray_icon.setToolTip("Whisper Linux Dictation")
            
            # Context menu for tray icon
            tray_menu = QMenu()
            show_action = tray_menu.addAction("Show Interface")
            show_action.triggered.connect(self._show_main_window)
            
            tray_menu.addSeparator()
            quit_action = tray_menu.addAction("Quit")
            quit_action.triggered.connect(self.app.quit)
            
            self.tray_icon.setContextMenu(tray_menu)
            self.tray_icon.activated.connect(self._on_tray_activated)
            self.tray_icon.show()
            
            logger.info("System tray icon created")
        except Exception as e:
            logger.warning(f"Could not setup tray icon: {e}")
    
    def _show_main_window(self):
        """Show and bring main window to front"""
        if self.main_window:
            self.main_window.show()
            self.main_window.raise_()
            self.main_window.activateWindow()
    
    def _on_tray_activated(self, reason):
        """Handle system tray icon clicks"""
        if reason in (QSystemTrayIcon.ActivationReason.Trigger, QSystemTrayIcon.ActivationReason.DoubleClick):
            self._show_main_window()
    
    def run(self):
        """Start the application event loop"""
        try:
            logger.info("Starting main event loop")
            return self.app.exec()
        except Exception as e:
            logger.error(f"Error in main loop: {e}")
            return 1


def main():
    """Main entry point for the application"""
    app = None

    # Handle graceful shutdown
    def signal_handler(signum, frame):
        logger.info("Received shutdown signal")
        if app is not None:
            app.app.quit()
    
    # Register signal handlers
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)
    
    try:
        # Create and run the application
        app = WhisperDictationApp()
        # Let Python process SIGINT while the Qt event loop is running.
        signal_timer = QTimer()
        signal_timer.timeout.connect(lambda: None)
        signal_timer.start(250)
        return app.run()
    except KeyboardInterrupt:
        logger.info("Application interrupted by user")
        return 0
    except Exception as e:
        logger.error(f"Fatal error: {e}")
        raise


if __name__ == '__main__':
    main()
