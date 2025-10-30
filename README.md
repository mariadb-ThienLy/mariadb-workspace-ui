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

The web component exposes certain internal methods to the host application for programmatic control. Currently, the `worksheetService` and `workspaceService` modules are exposed as a proof of concept.

### Available Methods

- **`worksheetService.deleteAll()`** - Delete all worksheets
- **`workspaceService.init({ userPermission = {} } = {})`** - Initializes the workspace

### Usage Example

```js
// Wait for the custom element to be defined
await customElements.whenDefined('mariadb-workspace')

// Get reference to the web component element
const workspaceElement = document.querySelector('mariadb-workspace')

// Call exposed methods
await workspaceElement.worksheetService.deleteAll()
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
  await workspaceRef.value.worksheetService.deleteAll()
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
      workspaceRef.current.worksheetService.deleteAll()
    })
  }, [])

  return <mariadb-workspace ref={workspaceRef} />
}
```

---

## CDN Usage (No Bundler)

For quick demos and testing without npm or a bundler, you can download the dist files from the latest GitHub release:

### Quick Start

```bash
# Using the run script
cd demo && ./run-demo.sh
```

Then open: http://localhost:8080/demo/

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

**Creating a New Release (Fully Automated):**

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
5. ✅ Pushes commits and tags to GitHub
6. ✅ Creates GitHub Release with tarball attached

**That's it!** The entire release is automated in one command.

**Force Release (Development/Testing Only):**

```bash
# Re-release the current version (e.g., v1.0.0)
npm run release:force
```

⚠️ **Warning:** This will delete and recreate the current version's release. Useful for:

- Testing the release process
- Fixing mistakes before users install
- **Never use on production releases that users depend on**

**Manual Release (if needed):**

```bash
# 1. Version bump
npm version patch  # or minor/major

# 2. Build and create tarball
npm run pack:release

# 3. Push
git push && git push --tags

# 4. Create GitHub Release
gh release create v1.0.1 mariadb-workspace-ui-1.0.1.tgz \
  --title "v1.0.1" \
  --notes "Release notes here"
```

---

## License

Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
