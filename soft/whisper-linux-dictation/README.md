# Whisper Linux Dictation - Speech-to-Text Application for Ubuntu/Linux

A lightweight, privacy-focused speech-to-text application for Linux Ubuntu, similar to SuperWhisper and Whisper Desktop. Uses OpenAI's Whisper model running entirely locally on your machine.

## Features

- **Always-on-top controls**: Start or stop dictation and copy the latest polished transcript from a compact floating panel
- **Numpad Enter shortcut**: Press `Numpad Enter` once to start and again to transcribe and paste into the focused field
- **Works in the Background**: Starts with your desktop session and keeps listening while the window is hidden in the tray
- **Multiple Model Sizes**: Choose from tiny, small, base, or large models based on your needs
- **Automatic Russian/English Recognition**: Switch between Russian and English without changing settings
- **100% Local Processing**: Your audio never leaves your computer (except when using cloud API)
- **Automatic Text Improvement**: Locally cleans spacing, punctuation, capitalization, and accidental repetitions
- **Cross-Distribution**: Works on Ubuntu, Fedora, Arch Linux, Debian, and other distributions
- **Linux Desktop Support**: Works on X11; Wayland compositors may restrict global hotkeys or simulated paste

## Installation

### Method 1: Using pip (Recommended for Development)

```bash
cd /home/akira/Рабочий стол/soft/whisper-linux-dictation
pip install -e .
```

### Method 2: Run Directly with Python

```bash
python3 -m whisper_linux_dictation
```

### Method 3: Install Dependencies Manually

```bash
# Core dependencies
pip install faster-whisper sounddevice numpy PyQt6 silero-vad pyautogui

# System audio (Ubuntu/Debian)
sudo apt-get install -y libportaudio2 libportaudiocpp0 portaudio19-dev libsndfile1 libsndfile1-dev pulseaudio-utils

# For better performance with GPU support
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

## Quick Start

1. **Launch the application**:
   ```bash
   whisper-linux-dictation
   # or
   python3 -m whisper_linux_dictation
   ```

2. **Configure your settings** (optional, defaults work for most users):
   - Click "Settings" in the top menu
   - Choose your preferred model size and language
   - Keep `NumpadEnter` as the toggle shortcut, or choose another keyboard or mouse key

3. **Start dictating**:
   - Press `Numpad Enter` or click `Start` on the floating panel
   - Speak clearly into your microphone
   - Press `Numpad Enter` again or click `Stop` to recognize, improve, and paste the text
   - Use `Copy` on the floating panel to copy the complete latest transcript
   - If automatic paste is blocked by the desktop, the result remains in the clipboard for `Ctrl+V`
   - Your speech will be typed into the currently focused text field!

## Model Sizes & Performance

| Model | Speed | Accuracy | RAM Usage | Best For |
|-------|-------|----------|-----------|----------|
| **tiny** | ~50 wpm | Good | ~120 MB | Quick notes, testing |
| **small** | ~30 wpm | Very Good | ~240 MB | General use (recommended) |
| **base** | ~20 wpm | Excellent | ~360 MB | High accuracy needs |
| **large** | ~10 wpm | Best | ~750 MB | Professional transcription |

## Keyboard Shortcuts

- `Numpad Enter` - Press once to record; press again to recognize and paste (default)
- `Mouse 5` - Optional hold-to-talk shortcut when configured
- Keyboard keys such as `F12` use toggle mode when configured
- `Esc` - Cancel current recording

## Configuration Options

### In-App Settings:
- **Model Selection**: Choose between tiny, small, base, or large models
- **Language**: Automatic Russian/English recognition, with optional fixed Russian or English mode
- **Automatic Paste**: Paste the improved text into the focused application after recording
- **Trigger Key**: Customize the key that activates dictation
- **Clipboard Copy**: Automatically copy to clipboard after typing
- **Text Improvement**: Normalize recognized text and optionally remove filler words
- **Floating panel**: Keep the draggable controller above other windows and remember its screen position
- **Start on Login**: Keep dictation and its floating controller available after signing in
- **Volume Control**: Adjust microphone input volume

## System Requirements

- **OS**: Ubuntu 18.04+, Fedora, Arch Linux, Debian, or compatible distributions
- **Python**: 3.9+
- **RAM**: 
  - tiny: ~256 MB minimum
  - small: ~512 MB recommended
  - base: ~1 GB recommended
  - large: ~2 GB recommended
- **Microphone**: Any USB or built-in microphone
- **GPU (Optional)**: NVIDIA GPU with CUDA support for faster processing

## Audio Backend Support

The application automatically detects and uses the best available audio backend:

- **PulseAudio** (default on Ubuntu/Debian)
- **PipeWire** (modern Linux distributions)
- **ALSA** (fallback option)

## Privacy & Security

- All transcription happens locally on your machine
- Optional cloud API support for faster processing (configurable)
- No telemetry or analytics by default
- Your audio data is processed in memory and discarded after use

## Troubleshooting

### Microphone not detected?
```bash
# Check if PulseAudio/PipeWire is running
pactl list short sinks

# Restart audio server
systemctl --user restart pipewire-pulse
```

### Slow performance?
- Try a smaller model (tiny or small)
- Enable GPU acceleration: `pip install torch torchvision torchaudio`
- Close other CPU-intensive applications

### Text not appearing in application?
- Ensure the text field has focus before releasing the trigger key
- Check if "Inject into focused window" is enabled in settings
- Try using a simple text editor like `gedit` or `nano` for testing

## Building a .deb Package

```bash
# Install build dependencies
sudo apt-get install python3-setuptools python3-wheel python3-tornado

# Build the package
python3 setup.py sdist bdist_wheel

# Create .deb from source distribution
cd dist
tar -xzf *.tar.gz
cd ..
python3 setup.py bdist_deb
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [OpenAI Whisper](https://github.com/openai/whisper) - The underlying speech recognition model
- [faster-whisper](https://github.com/guillaumekln/faster-whisper) - Optimized implementation with 2x speedup
- [Silero VAD](https://github.com/snakers4/silero-vad) - Voice activity detection
- [SuperWhisper](https://github.com/ksred/SuperWhisper) - Inspiration for the dictation workflow

## Support & Community

- **GitHub Issues**: [Report bugs and request features](https://github.com/your-repo/issues)
- **Discussions**: Join the community discussion on GitHub Discussions
- **Documentation**: See README.md in the repository

---

**Made with ❤️ for the Linux community**
