import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from whisper_linux_dictation.config.settings import SettingsManager


class SettingsTests(unittest.TestCase):
    def test_new_install_uses_numpad_enter(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            with patch.object(Path, 'home', return_value=Path(temporary_directory)):
                settings = SettingsManager()

            self.assertEqual(settings.get('trigger_key'), 'NumpadEnter')

    def test_migrates_legacy_mouse5_default(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            config_dir = Path(temporary_directory) / '.whisper_linux_dictation'
            config_dir.mkdir()
            config_file = config_dir / 'settings.json'
            config_file.write_text(json.dumps({'trigger_key': 'Mouse5'}), encoding='utf-8')

            with patch.object(Path, 'home', return_value=Path(temporary_directory)):
                settings = SettingsManager()

            self.assertEqual(settings.get('trigger_key'), 'NumpadEnter')
            persisted = json.loads(config_file.read_text(encoding='utf-8'))
            self.assertEqual(persisted['settings_version'], 2)
            self.assertEqual(persisted['trigger_key'], 'NumpadEnter')

    def test_preserves_custom_shortcut_and_panel_position(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            config_dir = Path(temporary_directory) / '.whisper_linux_dictation'
            config_dir.mkdir()
            (config_dir / 'settings.json').write_text(
                json.dumps({'trigger_key': 'F12'}),
                encoding='utf-8',
            )

            with patch.object(Path, 'home', return_value=Path(temporary_directory)):
                settings = SettingsManager()
                settings.update({'floating_panel_x': 120, 'floating_panel_y': 80})
                reloaded = SettingsManager()

            self.assertEqual(reloaded.get('trigger_key'), 'F12')
            self.assertEqual(reloaded.get('floating_panel_x'), 120)
            self.assertEqual(reloaded.get('floating_panel_y'), 80)


if __name__ == '__main__':
    unittest.main()
