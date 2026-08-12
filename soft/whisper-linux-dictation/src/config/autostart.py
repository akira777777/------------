"""Desktop-session autostart support for the dictation service."""

import sys
from pathlib import Path


AUTOSTART_FILENAME = "whisper-linux-dictation.desktop"


def _desktop_exec_arg(value):
    """Quote one argument according to the Desktop Entry Exec syntax."""
    return '"' + str(value).replace('\\', '\\\\').replace('"', '\\"') + '"'


def autostart_path(config_home=None):
    """Return the per-user desktop autostart file path."""
    base = Path(config_home) if config_home is not None else Path.home() / ".config"
    return base / "autostart" / AUTOSTART_FILENAME


def build_desktop_entry(python_executable=None):
    """Build an autostart entry that launches the installed package hidden."""
    executable = python_executable or sys.executable
    command = f"{_desktop_exec_arg(executable)} -m whisper_linux_dictation --background"
    return (
        "[Desktop Entry]\n"
        "Type=Application\n"
        "Name=Whisper Linux Dictation\n"
        "Comment=Global Mouse 5 push-to-talk dictation\n"
        f"Exec={command}\n"
        "Terminal=false\n"
        "X-GNOME-Autostart-enabled=true\n"
        "NoDisplay=true\n"
    )


def sync_autostart(enabled, config_home=None, python_executable=None):
    """Create or remove the current user's desktop-session autostart entry."""
    path = autostart_path(config_home)
    if enabled:
        path.parent.mkdir(parents=True, exist_ok=True)
        content = build_desktop_entry(python_executable)
        if not path.exists() or path.read_text(encoding="utf-8") != content:
            path.write_text(content, encoding="utf-8")
            path.chmod(0o644)
    else:
        path.unlink(missing_ok=True)
    return path
