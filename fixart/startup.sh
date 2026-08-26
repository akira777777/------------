#!/bin/sh
set -eu
SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$SCRIPT_DIR"
if curl -sf --max-time 2 http://127.0.0.1:8080/ | grep -qi '<title>FixArt'; then
  exit 0
fi
PID_FILE="${TMPDIR:-/tmp}/fixart-startup.pid"
LOG_FILE="${TMPDIR:-/tmp}/fixart-startup.log"
if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  exit 0
fi
nohup npm run dev </dev/null >>"$LOG_FILE" 2>&1 &
echo $! >"$PID_FILE"
