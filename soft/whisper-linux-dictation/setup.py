#!/usr/bin/env python3
"""
Setup script for Whisper Linux Dictation Application
Creates a distributable package with .deb support
"""

from setuptools import setup, find_packages
import os

# Get the absolute path to this directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE_DIR, 'README.md'), 'r', encoding='utf-8') as f:
    long_description = f.read()

setup(
    name="whisper-linux-dictation",
    version="1.0.0",
    author="Whisper Linux Team",
    description="A lightweight speech-to-text application for Linux Ubuntu, similar to SuperWhisper and Whisper Desktop",
    long_description=long_description,
    long_description_content_type="text/markdown",
    
    # Package metadata
    url="https://github.com/your-repo/whisper-linux-dictation",
    project_urls={
        'Bug Reports': 'https://github.com/your-repo/whisper-linux-dictation/issues',
        'Source': 'https://github.com/your-repo/whisper-linux-dictation',
        'Documentation': 'https://github.com/your-repo/whisper-linux-dictation#readme',
    },
    
    # Python requirements
    python_requires='>=3.9',
    
    # Classifiers
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: End Users/Desktop',
        'Topic :: Multimedia :: Sound/Audio',
        'Topic :: Multimedia :: Video :: Capture',
        'License :: OSI Approved :: MIT License',
        'Operating System :: POSIX :: Linux',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
        'Programming Language :: Python :: 3.11',
        'Programming Language :: Python :: 3.12',
    ],
    
    # Package configuration
    packages=[
        'whisper_linux_dictation',
        *[
            f'whisper_linux_dictation.{package}'
            for package in find_packages(where='src')
        ],
    ],
    package_dir={'whisper_linux_dictation': 'src'},
    
    # Entry points for console scripts
    entry_points={
        'console_scripts': [
            'whisper-linux-dictation=whisper_linux_dictation.main:main',
            'wld=whisper_linux_dictation.main:main',  # Short alias
        ],
    },
    
    # Dependencies (pip install)
    install_requires=[
        'faster-whisper>=1.0.0',
        'sounddevice>=0.4.6',
        'numpy>=1.24.0',
        'PyQt6>=6.5.0',
        'silero-vad>=5.0.0',
        'pyautogui>=0.9.54',
        'pynput>=1.7.7',
        'python-dotenv>=1.0.0',
    ],
    
    # Optional dependencies (pip install --extra)
    extras_require={
        'gpu': [
            'torch>=2.1.0',
            'torchvision>=0.16.0',
            'torchaudio>=2.1.0',
            'onnxruntime-gpu>=1.16.0',
        ],
        'wayland': [
            'pywayland>=0.4.0',
        ],
    },
    
    # Data files (models, configs)
    data_files=[
        ('share/applications', ['src/main.desktop']),  # Desktop entry
        ('share/icons/hicolor/256x256/apps', ['src/icon.png']),  # App icon
    ],
    
    # Scripts to install
    scripts=['scripts/install-deb.sh'],
)
