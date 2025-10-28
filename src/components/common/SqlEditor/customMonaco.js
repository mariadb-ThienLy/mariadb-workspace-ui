/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
// Monaco Editor is provided by the host app via window.monaco
// The host app must install and configure Monaco Editor before loading this web component
const monaco = window.monaco

if (!monaco) {
  throw new Error(
    'Monaco Editor not found. Please ensure monaco-editor is installed and configured by the host app. See INTEGRATION.md for details.'
  )
}

import { languageConfiguration, languageTokens } from '@/components/common/SqlEditor/mariadbLang'

export const LANGUAGE = 'mariadb'
// Register a new language
monaco.languages.register({ id: LANGUAGE })
monaco.languages.setLanguageConfiguration(LANGUAGE, languageConfiguration)

// Register a tokens provider for the language
monaco.languages.setMonarchTokensProvider(LANGUAGE, languageTokens)

monaco.editor.defineTheme('mariadb-theme', {
  base: 'vs',
  inherit: true, // false to completely replace the builtin rules
  rules: [
    { token: '', foreground: '#424f62', background: '#ffffff' },

    { token: 'comment.mariadb', foreground: '#60a0b0' },
    { token: 'comment.quote.mariadb', foreground: '#60a0b0' },

    { token: 'number.mariadb', foreground: '#40a070' },
    { token: 'delimiter.mariadb', foreground: '#000000' },

    { token: 'string.mariadb', foreground: '#4070a0' },
    { token: 'string.double.mariadb', foreground: '#4070a0' },

    { token: 'keyword.mariadb', foreground: '#007020', fontStyle: 'bold' },
    { token: 'operator.mariadb', foreground: '#666666' },
    { token: 'predefined.mariadb', foreground: '#FF00FF' },
  ],
  //https://code.visualstudio.com/api/references/theme-color
  colors: {
    foreground: '#525a65',
    errorForeground: '#eb5757',
    'editor.foreground': '#525a65', // code color
    'editor.background': '#ffffff', // editor background color
    'editorCursor.foreground': '#424f62', // cursor color
    'editorLineNumber.foreground': '#a3bac0', // line number color:
    'editorRuler.foreground': '#e7eef1', // Color of the editor rulers.
    'editorError.foreground': '#eb5757',
    'editorError.border': '#eb5757',
    'editorWarning.foreground': '#f59d34',
    'editorWarning.border': '#f59d34',
    'editorSuggestWidget.background': '#ffffff',
    'editorSuggestWidget.border': '#e7eef1',
    'editorSuggestWidget.foreground': '#525a65',
    'editorSuggestWidget.selectedBackground': '#0e9bc0',
    'editorSuggestWidget.highlightForeground': '#0e9bc0',
    'editor.lineHighlightBackground': '#ffffff',
    'quickInput.background': '#ffffff',
    'quickInputList.focusBackground': '#0e9bc0',
  },
})

const keywordCmplItems = languageTokens.keywords.map((s) => ({
  label: s,
  detail: 'KEYWORD',
  kind: monaco.languages.CompletionItemKind.Keyword,
  insertText: s,
}))
const builtinFunctionCmplItems = languageTokens.builtinFunctions.map((s) => ({
  label: s,
  detail: 'FUNCTION',
  kind: monaco.languages.CompletionItemKind.Function,
  insertText: s,
}))

export const builtInCmplItems = [...keywordCmplItems, ...builtinFunctionCmplItems]

export const tabFocusModeKey = monaco.editor.EditorOption.tabFocusMode

export default monaco
