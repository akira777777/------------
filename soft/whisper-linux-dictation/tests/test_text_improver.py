import unittest

from whisper_linux_dictation.postprocessing import improve_transcript


class TextImproverTests(unittest.TestCase):
    def test_normalizes_russian_transcript(self):
        source = '  привет   привет ,  мир!  как дела? '
        self.assertEqual(improve_transcript(source, 'ru'), 'Привет, мир! Как дела?')

    def test_optionally_removes_fillers(self):
        source = 'эм, как бы нужно написать отчёт.'
        self.assertEqual(
            improve_transcript(source, 'ru', remove_fillers=True),
            'Нужно написать отчёт.',
        )

    def test_preserves_decimal_and_url(self):
        source = 'version 1.5 https://example.com'
        self.assertEqual(improve_transcript(source, 'en'), 'Version 1.5 https://example.com')


if __name__ == '__main__':
    unittest.main()
