/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { readFileSync } from 'fs'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import vueI18n from '@intlify/eslint-plugin-vue-i18n'

const autoImport = JSON.parse(readFileSync('./.eslintrc-auto-import.local.json'))

export default [
  js.configs.recommended,
  skipFormatting,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: { globals: autoImport.globals, ecmaVersion: 'latest', sourceType: 'module' },
  },
  {
    name: 'files-to-lint',
    files: ['**/*.{js,vue}'],
    rules: {
      'no-console': 'warn',
    },
  },
  { name: 'files-to-ignore', ignores: ['**/coverage/**'] },
  {
    files: ['assets/icons/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },
  ...vueI18n.configs['flat/base'],
  {
    name: 'vue-i18n-recommended-rules',
    files: ['**/*.{js,vue}'],
    rules: {
      '@intlify/vue-i18n/no-deprecated-i18n-component': 'warn',
      '@intlify/vue-i18n/no-deprecated-i18n-place-attr': 'warn',
      '@intlify/vue-i18n/no-deprecated-i18n-places-prop': 'warn',
      '@intlify/vue-i18n/no-deprecated-modulo-syntax': 'warn',
      '@intlify/vue-i18n/no-deprecated-tc': 'warn',
      '@intlify/vue-i18n/no-deprecated-v-t': 'warn',
      '@intlify/vue-i18n/no-html-messages': 'off',
      '@intlify/vue-i18n/no-i18n-t-path-prop': 'warn',
      '@intlify/vue-i18n/no-missing-keys': 'warn',
      '@intlify/vue-i18n/no-raw-text': 'off',
      '@intlify/vue-i18n/no-v-html': 'off',
      '@intlify/vue-i18n/valid-message-syntax': 'warn',
      '@intlify/vue-i18n/no-dynamic-keys': 'warn',
    },
  },
]
