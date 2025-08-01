#!/usr/bin/env bash
# Setup script for Quartz
# Installs dependencies and runs the initial create command.
set -euo pipefail

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Please install Node 22+ and rerun." >&2
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is not installed. Please install npm 10.9.2+ and rerun." >&2
  exit 1
fi

REQUIRED_NODE_MAJOR=22
NODE_MAJOR=$(node -v | sed -E 's/v([0-9]+).*/\1/')
if [ "$NODE_MAJOR" -lt "$REQUIRED_NODE_MAJOR" ]; then
  echo "Node.js 22+ required. Found $(node -v)." >&2
  exit 1
fi

npm install
npx quartz create
