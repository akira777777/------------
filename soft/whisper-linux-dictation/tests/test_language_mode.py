import unittest

from whisper_linux_dictation.engine.whisper_engine import (
    choose_supported_language,
    normalize_language,
)


class LanguageModeTests(unittest.TestCase):
    def test_keeps_supported_modes(self):
        for language in ('auto', 'ru', 'en'):
            self.assertEqual(normalize_language(language), language)

    def test_replaces_unneeded_language_with_auto(self):
        self.assertEqual(normalize_language('de'), 'auto')
        self.assertEqual(normalize_language(None), 'auto')

    def test_constrains_detection_to_russian_and_english(self):
        probabilities = [('sv', 0.52), ('ru', 0.18), ('en', 0.10)]
        language, confidence = choose_supported_language(probabilities)
        self.assertEqual(language, 'ru')
        self.assertAlmostEqual(confidence, 0.18 / 0.28)

    def test_selects_english(self):
        language, confidence = choose_supported_language([('en', 0.4), ('ru', 0.1)])
        self.assertEqual(language, 'en')
        self.assertAlmostEqual(confidence, 0.8)


if __name__ == '__main__':
    unittest.main()
