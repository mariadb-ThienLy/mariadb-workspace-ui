/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { createStore } from 'vuex'
import { genSetMutations } from '@/store/utils'
import plugins from '@/store/plugins'
import modules from '@/store/modules'

const states = () => ({
  overlay_type: '',
  gbl_tooltip_data: null,
})

const store = createStore({
  plugins,
  modules,
  state: { ...states(), snackbar_message: { status: false, text: [], type: 'info' } },
  mutations: {
    ...genSetMutations(states()),
    /**
     * @param {Object} obj Object snackbar_message
     * @param {Array} obj.text An array of string
     * @param {String} obj.type Type of response
     */
    SET_SNACK_BAR_MESSAGE(state, obj) {
      const { text, type, status = true } = obj
      state.snackbar_message.status = status
      state.snackbar_message.text = text
      state.snackbar_message.type = type
    },
  },
})

export default store
