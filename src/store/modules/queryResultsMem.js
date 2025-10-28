/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { immutableUpdate } from '@/utils/helpers'

export default {
  namespaced: true,
  state: {
    abort_controller_map: {},
  },
  mutations: {
    UPDATE_ABORT_CONTROLLER_MAP(state, { id, value }) {
      state.abort_controller_map = immutableUpdate(state.abort_controller_map, {
        [id]: { $set: value },
      })
    },
    DELETE_ABORT_CONTROLLER(state, id) {
      delete state.abort_controller_map[id]
    },
  },
  getters: {
    getAbortController: (state) => (id) => state.abort_controller_map[id],
  },
}
