# MariaDB Workspace UI Web Component

A POC of turning MaxGUI workspace UI into a web component.
This sets up monaco-editor and all related dependencies used by
the workspace UI.

## Installation

Install from GitHub:

```bash
npm install github:mariadb-ThienLy/mariadb-workspace-ui#v1.0.0 monaco-editor@0.33.0
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@mariadb/workspace-ui": "github:mariadb-ThienLy/mariadb-workspace-ui#v1.0.0",
    "monaco-editor": "^0.33.0"
  }
}
```

Then run:

```bash
npm install
```

---

## Integration Guide

### Step 1: Create a registration module (e.g. `src/regMariaDBWorkspace.js`)

```js
// src/regMariaDBWorkspace.js
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import monacoEditorSetup from '@mariadb/workspace-ui/monacoEditorSetup'
import '@mariadb/workspace-ui'

// Wire Monaco worker for the component
monacoEditorSetup(editorWorker)
```

### Step 2: Import that module in `main.js`

```js
// main.js
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import App from './App.vue'

// Register Monaco + component once
import './regMariaDBWorkspace'

const app = createApp(App)
registerPlugins(app)
app.mount('#app')
```

### Step 3: Use in Your Vue Component

```vue
<script setup>
// Nothing to import here; the element is registered in regMariaDBWorkspace.js
</script>

<template>
  <mariadb-workspace />
</template>
```

---

## CDN Usage (No Bundler)

If you want to use the web component directly from a CDN without npm or a bundler:

### Single HTML File Example

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>MariaDB Workspace UI - CDN Demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="https://use.typekit.net/vme5kwy.css" />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs/editor/editor.main.css"
    />

    <style>
      html,
      body {
        margin: 0;
        height: 100%;
      }
      mariadb-workspace {
        display: block;
        height: 100%;
        padding: 24px;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <!-- Polyfill Node-ish globals that some ESM bundles read -->
    <script>
      window.process ||= { env: { NODE_ENV: 'production' } }
      window.global ||= window
    </script>

    <!-- Load monaco-editor web-worker -->
    <script>
      window.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
          const base = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs'
          const workerPath = `${base}/base/worker/workerMain.js`
          // Use a blob to bypass cross-origin restrictions
          return URL.createObjectURL(
            new Blob([`importScripts("${workerPath}");`], { type: 'text/javascript' })
          )
        },
      }
    </script>

    <!-- Load Monaco Editor -->
    <script type="module">
      import * as monaco from 'https://esm.sh/monaco-editor@0.33.0'
      window.monaco = monaco
    </script>

    <!-- Load web component -->
    <script type="module">
      await import(
        'https://cdn.jsdelivr.net/gh/mariadb-ThienLy/mariadb-workspace-ui@v1.0.0/mariadb-workspace/index.js'
      )
      console.log('Web component loaded')
    </script>

    <!-- The Web Component -->
    <mariadb-workspace></mariadb-workspace>
  </body>
</html>
```

### Serving the HTML File

Since the example uses ES modules, you must serve it over HTTP (not `file://`):

```bash
# Option 1: Python (built-in)
python3 -m http.server 8080

# Option 2: Node serve
npx serve . -l 8080

# Then open http://localhost:8080
```

---

## Features

- 🎨 Built with Vue 3 + Vuetify
- 📝 Monaco Editor integration with SQL syntax highlighting
- 🔌 Web Component architecture with Shadow DOM
- 📦 Externalized Monaco Editor for optimal bundle size
- 🎯 Custom MariaDB SQL language support

## Architecture Notes

### Why Monaco Editor is Externalized

Monaco Editor is **not bundled** with this web component. Instead, it's a peer dependency that the host application must provide. This approach:

- ✅ Reduces web component bundle size (~3.6MB saved)
- ✅ Avoids shadow DOM font issues (Monaco tooltips render outside shadow DOM)
- ✅ Allows host app to control Monaco Editor version
- ✅ Prevents duplicate Monaco instances if host app already uses it

### How It Works

1. Host app installs Monaco Editor as a peer dependency
2. Host app imports the worker with `?worker` so Vite can transform it
3. Host app calls `setupMonaco(editorWorker)` from `@mariadb/workspace-ui/monacoEditorSetup`
4. Web component accesses Monaco via `window.monaco`
5. Monaco CSS loaded globally for proper tooltip styling

## Requirements

- Node.js >= 20
- Monaco Editor ^0.33.0
- Vue 3 (host application)
- Vite (recommended)

---

## Development & Release

### For Maintainers

**Creating a New Release:**

```bash
# Patch release (1.0.0 -> 1.0.1)
npm run release:patch

# Minor release (1.0.0 -> 1.1.0)
npm run release:minor

# Major release (1.0.0 -> 2.0.0)
npm run release:major
```

The release script automatically:

1. ✅ Builds the web component
2. ✅ Commits built files to Git
3. ✅ Updates version in `package.json`
4. ✅ Creates a Git tag
5. ✅ Pushes to GitHub

**Development Force Push (for testing):**

```bash
npm run release:dev
```

This will:

- Build the web component
- Amend the last commit with built files
- Force push to GitHub
- Force update the current version tag

⚠️ **Warning:** This rewrites Git history. Only use during development/testing!

**Manual Release (if needed):**

```bash
# 1. Build
npm run build

# 2. Commit built files
git add mariadb-workspace
git commit -m "chore: update build files"

# 3. Version bump
npm version patch  # or minor/major

# 4. Push
git push && git push --tags
```

---

## License

Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
