"""Safe, local cleanup for speech-to-text output."""

import re

_WORD = r"[\w'-]+"
_REPEATED_WORD = re.compile(rf"\b({_WORD})(?:\s+\1\b)+", re.IGNORECASE)
_SENTENCE_START = re.compile(r"(^|[.!?…]\s+)([a-zа-яё])", re.IGNORECASE)

_FILLERS = {
    'ru': (
        'как бы',
        'это самое',
        'в общем',
        'так сказать',
        'короче',
        'типа',
        'ээ',
        'эм',
    ),
    'en': (
        'you know',
        'i mean',
        'kind of',
        'sort of',
        'um',
        'uh',
    ),
}


def _remove_fillers(text, language):
    fillers = _FILLERS.get(language, ())
    if not fillers:
        return text

    pattern = '|'.join(re.escape(item) for item in sorted(fillers, key=len, reverse=True))
    text = re.sub(rf"(?<!\w)(?:{pattern})(?!\w)[,;:]?", ' ', text, flags=re.IGNORECASE)
    return text


def _capitalize_sentences(text):
    def capitalize(match):
        return f"{match.group(1)}{match.group(2).upper()}"

    return _SENTENCE_START.sub(capitalize, text)


def improve_transcript(text, language='auto', remove_fillers=False):
    """Normalize a transcript without changing its meaning.

    The transformation is deterministic and runs entirely on the local machine.
    Filler removal is optional because those words can sometimes be intentional.
    """
    if not text:
        return ''

    improved = str(text).replace('\u00a0', ' ')
    improved = re.sub(r'\s+', ' ', improved).strip()

    if remove_fillers:
        improved = _remove_fillers(improved, language)

    # Remove accidental immediate word repetitions produced by recognition.
    improved = _REPEATED_WORD.sub(r'\1', improved)

    # Normalize spacing around punctuation while preserving decimals and URLs.
    improved = re.sub(r'\s+([,.;:!?…])', r'\1', improved)
    improved = re.sub(r'([,;:!?])(?=[^\s\d/])', r'\1 ', improved)
    improved = re.sub(r'\(\s+', '(', improved)
    improved = re.sub(r'\s+\)', ')', improved)
    improved = re.sub(r'\s+', ' ', improved).strip(' ,;:')

    return _capitalize_sentences(improved)
