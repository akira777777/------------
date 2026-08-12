#!/usr/bin/env python3
"""
Whisper Linux Dictation - Main Entry Point
A lightweight speech-to-text application for Ubuntu/Linux
Similar to SuperWhisper and Whisper Desktop
"""

import logging
import os
import signal
import sys
from pathlib import Path

from PyQt6.QtCore import QTimer
from PyQt6.QtGui import QIcon
from PyQt6.QtNetwork import QLocalServer, QLocalSocket
from PyQt6.QtWidgets import QApplication, QMenu, QSystemTrayIcon

from .config.autostart import sync_autostart
from .gui.main_window import MainWindow

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('main')

class WhisperDictationApp:
    """Main application class that manages the dictation workflow"""
    
    def __init__(self, start_hidden=False):
        self.app = QApplication(sys.argv)
        self.app.setQuitOnLastWindowClosed(False)
        
        # Set application info
        self.app.setApplicationName("Whisper Linux Dictation")
        self.app.setApplicationVersion("1.0.0")
        self.app.setOrganizationName("whisper-linux-dictation")

        self.instance_server = None
        self.is_primary_instance = self._claim_single_instance()
        if not self.is_primary_instance:
            logger.info("Another instance is already running; asked it to show its window")
            return
        
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
        tray_available = self._setup_tray_icon()
        self.main_window.minimize_to_tray = tray_available
        self.app.setQuitOnLastWindowClosed(not tray_available)
        self.app.aboutToQuit.connect(self.main_window.shutdown)

        try:
            sync_autostart(self.main_window.settings.get('start_on_login', True))
        except OSError as error:
            logger.warning("Could not configure autostart: %s", error)
        
        # Autostart keeps the service in the tray without stealing focus.
        if not start_hidden or not tray_available:
            self._show_main_window()
        
        logger.info(f"Whisper Linux Dictation v{self.app.applicationVersion()} initialized with GUI")

    def _claim_single_instance(self):
        """Claim a per-user local socket, or focus the already running app."""
        server_name = f"whisper-linux-dictation-{os.getuid()}"
        probe = QLocalSocket()
        probe.connectToServer(server_name)
        if probe.waitForConnected(200):
            probe.write(b"show")
            probe.waitForBytesWritten(200)
            probe.disconnectFromServer()
            return False

        # Remove only a stale socket left after an unclean shutdown.
        QLocalServer.removeServer(server_name)
        self.instance_server = QLocalServer(self.app)
        if not self.instance_server.listen(server_name):
            logger.error("Could not create single-instance socket: %s", self.instance_server.errorString())
            return False
        self.instance_server.newConnection.connect(self._on_instance_connection)
        return True

    def _on_instance_connection(self):
        """Bring the window forward when the launcher is run again."""
        while self.instance_server and self.instance_server.hasPendingConnections():
            client = self.instance_server.nextPendingConnection()
            client.disconnectFromServer()
            client.deleteLater()
        self._show_main_window()
    
    def _setup_tray_icon(self):
        """Setup system tray icon for background mode"""
        try:
            if not QSystemTrayIcon.isSystemTrayAvailable():
                logger.warning("No system tray is available")
                return False

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
            return True
        except Exception as e:
            logger.warning(f"Could not setup tray icon: {e}")
            return False
    
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
        start_hidden = '--background' in sys.argv
        if start_hidden:
            sys.argv.remove('--background')

        # Create and run the application
        app = WhisperDictationApp(start_hidden=start_hidden)
        if not app.is_primary_instance:
            return 0
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
