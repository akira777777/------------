#!/usr/bin/env python3
"""
Settings Manager for Whisper Linux Dictation
Handles user preferences and configuration
"""

import json
import logging
from pathlib import Path


logger = logging.getLogger(__name__)


class SettingsManager:
    """Manages application settings and user preferences"""
    
    def __init__(self):
        self.config_dir = Path.home() / ".whisper_linux_dictation"
        self.config_file = self.config_dir / "settings.json"
        
        # Ensure config directory exists
        self.config_dir.mkdir(parents=True, exist_ok=True)
        
        # Default settings
        self._defaults = {
            'model': 'small',  # tiny, small, base, large
            'language': 'auto',  # Automatic Russian/English recognition
            'trigger_key': 'Mouse5',  # Hold the side mouse button to dictate
            'auto_copy_to_clipboard': True,
            'inject_into_focused_window': True,
            'auto_improve_text': True,
            'remove_filler_words': False,
            'use_cloud_api': False,
            'cloud_api_url': 'https://api.whisper-cloud.com/v1/transcribe',
            'volume_threshold': 0.5,  # Microphone volume threshold (0-1)
            'min_silence_duration': 0.3,  # Minimum silence before stopping (seconds)
            'show_status_bar': True,
            'theme': 'light',  # light, dark, system
        }
        
        self._settings = self._load_settings()
    
    def _load_settings(self):
        """Load settings from file or return defaults"""
        if self.config_file.exists():
            try:
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    loaded = json.load(f)
                    # Merge with defaults to ensure all keys exist
                    merged = {**self._defaults, **loaded}
                    return merged
            except Exception as e:
                print(f"Warning: Could not load settings file: {e}")
        
        return self._defaults.copy()
    
    def save(self):
        """Atomically save current settings to avoid partial JSON files."""
        temp_file = self.config_file.with_suffix('.json.tmp')
        try:
            with open(temp_file, 'w', encoding='utf-8') as f:
                json.dump(self._settings, f, indent=2)
                f.flush()
            temp_file.replace(self.config_file)
            logger.info("Settings saved to %s", self.config_file)
        except Exception:
            temp_file.unlink(missing_ok=True)
            logger.exception("Could not save settings to %s", self.config_file)
            raise
    
    def load(self):
        """Load and return current settings"""
        self._settings = self._load_settings()
        return self._settings
    
    def get(self, key, default=None):
        """Get a specific setting value"""
        return self._settings.get(key, default)
    
    def set(self, key, value):
        """Set a specific setting value"""
        self.update({key: value})

    def update(self, values):
        """Validate and persist several settings with a single disk write."""
        unknown = set(values) - set(self._defaults)
        if unknown:
            names = ', '.join(sorted(unknown))
            raise ValueError(f"Unknown setting(s): {names}")

        previous = self._settings.copy()
        self._settings.update(values)
        try:
            self.save()
        except Exception:
            self._settings = previous
            raise
    
    def reset_to_defaults(self):
        """Reset all settings to defaults"""
        self._settings = self._defaults.copy()
        self.save()


# Singleton instance for easy access
_settings_manager = None

def get_settings():
    """Get the singleton SettingsManager instance"""
    global _settings_manager
    if _settings_manager is None:
        _settings_manager = SettingsManager()
    return _settings_manager
