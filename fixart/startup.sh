#!/bin/sh
set -eu
cd /workspace
if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi
if [ -f /tmp/app-startup.pid ] && kill -0 "$(cat /tmp/app-startup.pid)" 2>/dev/null; then
  exit 0
fi
npm run dev >>/tmp/app-startup.log 2>&1 &
echo $! >/tmp/app-startup.pid
