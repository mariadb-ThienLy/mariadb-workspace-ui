/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import mdiIcons from '@/assets/mdiIcons'
import icons from '@/assets/icons'
import { TOOLTIP_DEBOUNCE } from '@/constants'

export const colors = {
  background: '#ffffff',
  surface: '#ffffff',
  'surface-bright': '#ffffff',
  'surface-light': '#eeeeee',
  'surface-variant': '#424242',
  'on-surface-variant': '#eeeeee',
  primary: '#0e9bc0',
  'primary-darken-1': '#0a6b82',
  secondary: '#0e6488',
  'secondary-lighten-1': '#2f99a3',
  'secondary-darken-1': '#0c4e6d',
  tertiary: '#003545',
  foreground: '#424f62',
  anchor: '#2d9cdb',
  'grayed-out': '#a6a4a6',
  'code-color': '#525a65',
  instruction: '#6c7c7b',
  'input-border': '#a3bac0',
  label: '#6c7c7b',
  error: '#eb5757',
  info: '#2d9cdb',
  success: '#7dd012',
  warning: '#f59d34',
  alert: '#eb5757',
  notice: '#525a65',
  debug: '#2f99a3',
  'tbl-header': '#6c7c7b',
  'table-border': '#e7eef1',
  'table-border-strong': '#bed1da',
  'tr-hovered-color': '#f2fcff',
  'selected-tr-color': '#e3f5fb',
  separator: '#e8eef1',
  'card-border-color': '#e3e6ea',
  'light-gray-box': '#fbfbfb',
  'highlight-green': '#abc74a',
  white: '#ffffff',
  black: '#000000',
}

const vuetifyMxsTheme = {
  dark: false,
  colors,
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.6,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#ffffff',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  },
}

const commonProps = {
  density: 'comfortable',
  color: colors.primary,
  baseColor: colors['input-border'],
}

const vDataTableCommonProps = {
  density: commonProps.density,
  sortAscIcon: 'mxs:arrowDown',
  sortDescIcon: 'mxs:arrowUp',
}

export default createVuetify({
  icons: {
    aliases: { ...aliases, ...mdiIcons },
    sets: { mdi, mxs: icons },
  },
  theme: {
    defaultTheme: 'vuetifyMxsTheme',
    themes: { vuetifyMxsTheme },
    scope: '#mariadb-workspace',
    stylesheetId: 'mariadb-workspace',
  },
  defaults: {
    VTextField: { variant: 'outlined', ...commonProps },
    VSelect: {
      variant: 'outlined',
      ...commonProps,
      clearIcon: '$close',
      menuProps: { contentClass: 'select-menu--custom border--input-border' },
    },
    VCombobox: {
      variant: 'outlined',
      ...commonProps,
      clearIcon: '$close',
      menuProps: { contentClass: 'select-menu--custom border--input-border' },
    },
    VTooltip: {
      eager: false,
      openDelay: TOOLTIP_DEBOUNCE,
      transition: 'fade-transition',
      contentClass: 'shadow-drop',
    },
    VCheckboxBtn: commonProps,
    VCheckbox: commonProps,
    VSwitch: { ...commonProps, density: 'compact', inset: true },
    VRadio: { ...commonProps, density: 'compact' },
    VRadioGroup: { ...commonProps, density: 'compact' },
    VTextarea: { variant: 'outlined', bgColor: colors.background, ...commonProps },
    VDataTable: vDataTableCommonProps,
    VDataTableServer: vDataTableCommonProps,
    VTab: {
      selectedClass: 'v-tab--selected font-weight-bold text-foreground',
    },
  },
})
