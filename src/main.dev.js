/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
// Development entry point - includes Monaco Editor setup for development purpose
import monacoEditorSetup from '@mariadb/workspace-ui/monacoEditorSetup'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import './main'

monacoEditorSetup(editorWorker)
