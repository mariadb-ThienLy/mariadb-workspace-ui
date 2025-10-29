/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { supported } from 'browser-fs-access'
import localForage from 'localforage'
import { genSetMutations } from '@/store/utils'

const FILE_SYS_ACCESS_NAMESPACE = 'workspace-editor-file-sys-access'
const states = () => ({
  /**
   * Key: query_tab_id or editor id as they are the same
   * Value is defined as below
   * @property {FileSystemFileHandle} file_handle
   * @property {string} txt - file text
   */
  file_handle_data_map: {},
})

/*
 * vuex-orm and vuex-persist serialize data as a JSON string but FileSystemFileHandle
 * can't be serialized with JSON.stringify. So this module is created as a workaround
 * to manually persist file handle to IndexedDB via localForage. Currently only
 * IndexedDB can serialize file handle.
 * https://github.com/GoogleChromeLabs/browser-fs-access/issues/30
 */
export default {
  namespaced: true,
  state: states(),
  mutations: {
    UPDATE_FILE_HANDLE_DATA_MAP(state, payload) {
      state.file_handle_data_map[payload.id] = {
        ...(state.file_handle_data_map[payload.id] || {}),
        ...payload.data,
      }
    },
    DELETE_FILE_HANDLE_DATA(state, id) {
      delete state.file_handle_data_map[id]
    },
    ...genSetMutations(states()),
  },
  actions: {
    async initStorage({ commit, state }) {
      const storage = await localForage.getItem(FILE_SYS_ACCESS_NAMESPACE)
      commit('SET_FILE_HANDLE_DATA_MAP', storage || {})
      await localForage.setItem(FILE_SYS_ACCESS_NAMESPACE, toRaw(state.file_handle_data_map))
    },
    async updateFileHandleDataMap({ commit, state }, payload) {
      commit('UPDATE_FILE_HANDLE_DATA_MAP', payload)
      await localForage.setItem(FILE_SYS_ACCESS_NAMESPACE, toRaw(state.file_handle_data_map))
    },
    async deleteFileHandleData({ commit, state }, id) {
      commit('DELETE_FILE_HANDLE_DATA', id)
      await localForage.setItem(FILE_SYS_ACCESS_NAMESPACE, toRaw(state.file_handle_data_map))
    },
  },
  getters: {
    //browser fs getters
    hasFileSystemReadOnlyAccess: () => Boolean(supported),
    hasFileSystemRWAccess: (state, getters) =>
      getters.hasFileSystemReadOnlyAccess && window.location.protocol.includes('https'),
  },
}
