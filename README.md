# MariaDB Workspace UI Web Component

A POC of turning MaxGUI workspace UI into a web component.
This sets up monaco-editor and all related dependencies used by
the workspace UI.

## Installation

Install from GitHub Release:

```bash
npm install https://github.com/mariadb-ThienLy/mariadb-workspace-ui/releases/download/v1.0.0/mariadb-workspace-ui-1.0.0.tgz monaco-editor@0.33.0
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@mariadb/workspace-ui": "https://github.com/mariadb-ThienLy/mariadb-workspace-ui/releases/download/v1.0.0/mariadb-workspace-ui-1.0.0.tgz",
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

## Accessing Exposed Internal Methods

The web component exposes certain internal methods to the host application for programmatic control. Currently, the `queryConnService` module is exposed as a proof of concept.

### Available Methods

- **`queryConnService.disconnectAll()`** - Disconnects all query connections

### Usage Example

```js
// Wait for the custom element to be defined
await customElements.whenDefined('mariadb-workspace')

// Get reference to the web component element
const workspaceElement = document.querySelector('mariadb-workspace')

// Call exposed methods
await workspaceElement.queryConnService.disconnectAll()
```

### In Vue/React Applications

**Vue 3:**
```vue
<script setup>
import { ref, onMounted } from 'vue'

const workspaceRef = ref(null)

onMounted(async () => {
  await customElements.whenDefined('mariadb-workspace')
  // Access via template ref
  await workspaceRef.value.queryConnService.disconnectAll()
})
</script>

<template>
  <mariadb-workspace ref="workspaceRef" />
</template>
```

**React:**
```jsx
import { useRef, useEffect } from 'react'

function App() {
  const workspaceRef = useRef(null)

  useEffect(() => {
    customElements.whenDefined('mariadb-workspace').then(() => {
      // Access via ref
      workspaceRef.current.queryConnService.disconnectAll()
    })
  }, [])

  return <mariadb-workspace ref={workspaceRef} />
}
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
        'https://cdn.jsdelivr.net/gh/mariadb-ThienLy/mariadb-workspace-ui@v1.0.0/dist/index.js'
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

1. ✅ Updates version in `package.json`
2. ✅ Creates a Git tag
3. ✅ Builds the web component
4. ✅ Creates a tarball (`.tgz` file)
5. ✅ Pushes tag to GitHub

**After running the release script:**

1. Go to GitHub Releases: `https://github.com/mariadb-ThienLy/mariadb-workspace-ui/releases`
2. Click "Draft a new release"
3. Select the tag that was just created (e.g., `v1.0.1`)
4. Upload the generated `.tgz` file (e.g., `mariadb-workspace-ui-1.0.1.tgz`)
5. Add release notes
6. Click "Publish release"

**Manual Release (if needed):**

```bash
# 1. Version bump
npm version patch  # or minor/major

# 2. Build and create tarball
npm run pack:release

# 3. Push
git push && git push --tags

# 4. Upload the .tgz file to GitHub Releases
```

---

## License

Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
