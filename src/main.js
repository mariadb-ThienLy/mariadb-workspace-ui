/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import App from '@/App.vue'
import '@/components/Charts/globalCnf'
import { pluginsWrapper } from '@/plugins'
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import vuetify from '@/plugins/vuetify'
import store from '@/store'
import librariesStyles from '@/styles/libraries.css?inline'
import appStyles from '@/styles/index.scss?inline'
import vuetifyEntryStyles from '@/styles/vuetify-entry.scss?inline'
import worksheetService from '@/services/worksheetService'
import workspaceService from '@/services/workspaceService'

const vuetifyThemeStyles = vuetify.theme.styles.value

createWebComponent({
  rootComponent: App,
  elementName: 'mariadb-workspace',
  plugins: pluginsWrapper,
  cssFrameworkStyles: [librariesStyles, vuetifyThemeStyles, vuetifyEntryStyles, appStyles],
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  replaceRootWithHostInCssFramework: true,
  asyncInitialization: async () => {
    /* Make vuex-persist work with localForage indexedDB by await store.restored
     *  https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
     */
    await store.restored
  },
})

// Expose worksheetService, workspaceService methods to the custom element
// Wait for the custom element to be defined before attaching to prototype
customElements.whenDefined('mariadb-workspace').then(() => {
  const MariadbWorkspaceElement = customElements.get('mariadb-workspace')
  if (MariadbWorkspaceElement) {
    MariadbWorkspaceElement.prototype.worksheetService = worksheetService
    MariadbWorkspaceElement.prototype.workspaceService = workspaceService
  }
})
