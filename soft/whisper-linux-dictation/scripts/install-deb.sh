#!/bin/bash
# Installation script for .deb package creation

set -e

echo "Installing Whisper Linux Dictation..."

# Install system dependencies if needed
sudo apt-get update
sudo apt-get install -y \
    libportaudio2 \
    libportaudiocpp0 \
    portaudio19-dev \
    libsndfile1 \
    libsndfile1-dev \
    pulseaudio-utils

# Create user config directory
mkdir -p ~/.whisper_linux_dictation

echo "✓ System dependencies installed"
echo "✓ Config directory created"
