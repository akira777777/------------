#!/usr/bin/env python3
"""
Settings Manager for Whisper Linux Dictation
Handles user preferences and configuration
"""

import json
from pathlib import Path


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
            'trigger_key': 'F12',  # Key to activate dictation
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
        """Save current settings to file"""
        try:
            with open(self.config_file, 'w', encoding='utf-8') as f:
                json.dump(self._settings, f, indent=2)
            print(f"Settings saved to {self.config_file}")
        except Exception as e:
            print(f"Error saving settings: {e}")
    
    def load(self):
        """Load and return current settings"""
        self._settings = self._load_settings()
        return self._settings
    
    def get(self, key, default=None):
        """Get a specific setting value"""
        return self._settings.get(key, default)
    
    def set(self, key, value):
        """Set a specific setting value"""
        if key in self._defaults:
            self._settings[key] = value
            self.save()
            print(f"Setting '{key}' updated to {value}")
        else:
            raise ValueError(f"Unknown setting: {key}")
    
    def reset_to_defaults(self):
        """Reset all settings to defaults"""
        self._settings = self._defaults.copy()
        self.save()
        print("Settings reset to defaults")


# Singleton instance for easy access
_settings_manager = None

def get_settings():
    """Get the singleton SettingsManager instance"""
    global _settings_manager
    if _settings_manager is None:
        _settings_manager = SettingsManager()
    return _settings_manager
