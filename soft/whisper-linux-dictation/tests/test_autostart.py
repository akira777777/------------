import tempfile
import unittest

from whisper_linux_dictation.config.autostart import sync_autostart


class AutostartTests(unittest.TestCase):
    def test_enable_writes_background_desktop_entry(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            path = sync_autostart(
                True,
                config_home=temporary_directory,
                python_executable="/opt/Whisper Dictation/bin/python",
            )

            self.assertTrue(path.exists())
            content = path.read_text(encoding="utf-8")
            self.assertIn('Exec="/opt/Whisper Dictation/bin/python"', content)
            self.assertIn("-m whisper_linux_dictation --background", content)
            self.assertIn("X-GNOME-Autostart-enabled=true", content)

    def test_disable_removes_desktop_entry(self):
        with tempfile.TemporaryDirectory() as temporary_directory:
            path = sync_autostart(True, config_home=temporary_directory)
            sync_autostart(False, config_home=temporary_directory)

            self.assertFalse(path.exists())


if __name__ == "__main__":
    unittest.main()
