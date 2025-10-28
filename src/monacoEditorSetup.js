import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

// Import Monaco CSS for tooltips/overlays (rendered outside shadow DOM)
import 'monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.css'

// Import additional Monaco features
import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js'
import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js'
import 'monaco-editor/esm/vs/editor/editor.all.js'

window.monaco = monaco

export default (editorWorker) => {
  // Configure Monaco web worker
  self.MonacoEnvironment = {
    getWorker: () => new editorWorker(),
  }
}
