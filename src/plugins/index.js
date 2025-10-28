/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import highlightTxt from '@/plugins/highlightTxt'
import resizeObserver from '@/plugins/resizeObserver'
import shortkey from '@/plugins/shortkey'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import store from '@/store'

export const pluginsWrapper = {
  install(GivenVue) {
    const Vue = GivenVue
    Vue.use(shortkey).use(vuetify).use(highlightTxt).use(resizeObserver).use(i18n).use(store)
  },
}
