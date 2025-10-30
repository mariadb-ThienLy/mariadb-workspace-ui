#!/bin/bash

# Run the CDN demo
# This script downloads the latest release and starts a local server

set -e

echo "🚀 Setting up CDN demo..."
echo ""

# Download dist files
node download-dist.js

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
