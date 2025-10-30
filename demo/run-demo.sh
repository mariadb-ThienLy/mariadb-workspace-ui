#!/bin/bash

# Run the CDN demo
# This script downloads the latest release and starts a local server
# Usage: ./run-demo.sh [--force]

set -e

echo "🚀 Setting up CDN demo..."
echo ""

# Check for --force flag
FORCE_DOWNLOAD=false
if [ "$1" = "--force" ]; then
  FORCE_DOWNLOAD=true
fi

# Download dist files
if [ ! -d "dist" ] || [ "$FORCE_DOWNLOAD" = true ]; then
  if [ "$FORCE_DOWNLOAD" = true ]; then
    echo "🔄 Force re-downloading dist files..."
    rm -rf dist
  else
    echo "📥 Downloading dist files..."
  fi
  node download-dist.js
else
  echo "✅ dist folder already exists, skipping download"
  echo "   (Run './run-demo.sh --force' to force re-download)"
fi

echo ""
echo "✅ Setup complete! Starting server..."
echo ""
echo "📝 Open in browser: http://localhost:8080/demo/"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start server from project root so /demo/ path works
cd ..
python3 -m http.server 8080
