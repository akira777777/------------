import unittest

from pynput import keyboard, mouse
from whisper_linux_dictation.gui.main_window import (
    NUMPAD_ENTER_X11_KEYSYM,
    GlobalHotkeyListener,
)


class HotkeyTests(unittest.TestCase):
    def test_mouse5_uses_hold_to_talk(self):
        listener = GlobalHotkeyListener('Mouse5')
        self.assertTrue(listener.is_hold_to_talk)
        self.assertEqual(listener._configured_mouse_button(), mouse.Button.button9)

    def test_keyboard_key_uses_toggle_mode(self):
        listener = GlobalHotkeyListener('F12')
        self.assertFalse(listener.is_hold_to_talk)

    def test_numpad_enter_is_distinct_from_main_enter(self):
        listener = GlobalHotkeyListener('NumpadEnter')
        keypad_enter = keyboard.KeyCode.from_vk(NUMPAD_ENTER_X11_KEYSYM)

        self.assertTrue(listener.is_numpad_enter)
        self.assertTrue(listener._matches(keypad_enter))
        self.assertFalse(listener._matches(keyboard.Key.enter))

    def test_numpad_enter_alias_uses_toggle_mode(self):
        listener = GlobalHotkeyListener('KP_Enter')

        self.assertTrue(listener.is_numpad_enter)
        self.assertFalse(listener.is_hold_to_talk)


if __name__ == '__main__':
    unittest.main()
