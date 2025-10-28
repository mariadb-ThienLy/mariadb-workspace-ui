/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { genSetMutations } from '@/store/utils'
import { CONN_TYPE_MAP, ETL_DEF_POLLING_INTERVAL } from '@/constants'

const states = () => ({
  migr_dlg: { is_opened: false, etl_task_id: '', type: '' },
  gen_erd_dlg: {
    is_opened: false,
    preselected_schemas: [],
    connection: null,
    gen_in_new_ws: false, // generate erd in a new worksheet
  },
  exec_sql_dlg: {
    is_opened: false,
    editor_height: 250,
    sql: '',
    extra_info: '',
    error: null,
    auto_mask_toggle: false, // Automatically mask the password with a toggle to show or hide it
    on_exec: () => null,
    after_cancel: () => null,
  },
  confirm_dlg: {
    is_opened: false,
    title: '',
    msg: '',
    save_text: '$lib.save',
    cancel_text: '$lib.workspaceView.dontSave',
    on_save: () => null,
    after_cancel: () => null,
  },
  etl_polling_interval: ETL_DEF_POLLING_INTERVAL,
  conn_dlg: { is_opened: false, type: CONN_TYPE_MAP.QUERY_EDITOR },
  user_permission: { row_limit: undefined },
})

export default {
  namespaced: true,
  state: states(),
  mutations: {
    ...genSetMutations(states()),
    UPDATE_USER_PERMISSION(state, { key, value }) {
      state.user_permission[key] = value
    },
  },
  getters: { userRowLimit: (state) => state.user_permission.row_limit },
}
