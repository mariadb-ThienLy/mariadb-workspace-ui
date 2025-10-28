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
