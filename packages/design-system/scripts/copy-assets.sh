#!/bin/bash
cd "$(dirname "$0")/.."
find src -name "*.module.css" -exec bash -c 'mkdir -p "dist/$(dirname "$1" | sed "s|src/||")" && cp "$1" "dist/$(echo "$1" | sed "s|src/||")"' _ {} \;