import unittest

from pynput import mouse
from whisper_linux_dictation.gui.main_window import GlobalHotkeyListener


class HotkeyTests(unittest.TestCase):
    def test_mouse5_uses_hold_to_talk(self):
        listener = GlobalHotkeyListener('Mouse5')
        self.assertTrue(listener.is_hold_to_talk)
        self.assertEqual(listener._configured_mouse_button(), mouse.Button.button9)

    def test_keyboard_key_uses_toggle_mode(self):
        listener = GlobalHotkeyListener('F12')
        self.assertFalse(listener.is_hold_to_talk)


if __name__ == '__main__':
    unittest.main()
