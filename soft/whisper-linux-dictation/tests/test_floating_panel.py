import unittest

from PyQt6.QtWidgets import QApplication

from whisper_linux_dictation.gui.main_window import RecordingIndicator


class FloatingPanelTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.app = QApplication.instance() or QApplication([])

    def setUp(self):
        self.panel = RecordingIndicator()

    def tearDown(self):
        self.panel.close()

    def test_start_stop_control_emits_request_and_tracks_state(self):
        requests = []
        self.panel.start_stop_requested.connect(lambda: requests.append(True))

        self.panel.start_stop_button.click()
        self.panel.start_recording('NumpadEnter')

        self.assertEqual(requests, [True])
        self.assertEqual(self.panel.start_stop_button.text(), 'Stop')
        self.assertEqual(self.panel.state_label.text(), 'Listening')

    def test_latest_text_enables_copy_and_keeps_full_tooltip(self):
        text = 'A complete transcript that remains available for copying.'
        self.panel.set_latest_text(text)

        self.assertTrue(self.panel.copy_button.isEnabled())
        self.assertEqual(self.panel.transcript_label.toolTip(), text)

    def test_processing_disables_start_stop(self):
        self.panel.show_processing()

        self.assertFalse(self.panel.start_stop_button.isEnabled())
        self.assertEqual(self.panel.start_stop_button.text(), 'Processing…')


if __name__ == '__main__':
    unittest.main()
