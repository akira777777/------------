import unittest

from whisper_linux_dictation.engine.whisper_engine import normalize_language


class LanguageModeTests(unittest.TestCase):
    def test_keeps_supported_modes(self):
        for language in ('auto', 'ru', 'en'):
            self.assertEqual(normalize_language(language), language)

    def test_replaces_unneeded_language_with_auto(self):
        self.assertEqual(normalize_language('de'), 'auto')
        self.assertEqual(normalize_language(None), 'auto')


if __name__ == '__main__':
    unittest.main()
