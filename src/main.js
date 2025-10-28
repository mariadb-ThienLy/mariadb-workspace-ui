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
