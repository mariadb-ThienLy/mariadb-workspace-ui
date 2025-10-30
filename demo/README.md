# CDN Demo

This directory contains a demo of using the MariaDB Workspace UI web component without npm or a bundler.

## Quick Start (One Command)

```bash
# Using the run script
cd demo && ./run-demo.sh

# Or manually
node download-dist.js && python3 -m http.server 8080
```

Then open: http://localhost:8080/test/

## Setup

1. **Download the dist files from the latest GitHub release:**

```bash
node download-dist.js
```

This script will:

- Fetch the latest release from GitHub
- Download the tarball
- Extract the `dist` folder to `test/dist/`

2. **Start a local HTTP server:**

```bash
# From the project root
python3 -m http.server 8080

# Or using Node
npx serve . -l 8080
```

3. **Open in browser:**

```
http://localhost:8080/test/
```

## Requirements

- Node.js (to run the download script)
- GitHub CLI (`gh`) - Install with: `sudo apt install gh` or `brew install gh`
- Authenticated with GitHub: `gh auth login`

## Files

- `index.html` - Demo HTML file that loads the web component
- `download-dist.js` - Script to download and extract dist files from GitHub release
- `dist/` - Downloaded dist folder (gitignored, created by download-dist.js)
