/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { genSetMutations } from '@/store/utils'
import { MXS_OBJ_TYPE_MAP, CMPL_SNIPPET_KIND } from '@/constants'

/**
 * This adds number of days to current date
 * @param {Number} days - Number of days
 * @returns {String} - returns date
 */
export function addDaysToNow(days) {
  const curr = new Date()
  return curr.setDate(curr.getDate() + days)
}

const states = () => ({
  sidebar_pct_width: 0,
  is_sidebar_collapsed: false,
  query_pane_pct_height: 60,
  is_fullscreen: false,
  query_row_limit: 10000,
  query_confirm_flag: true,
  query_history_expired_time: addDaysToNow(30), // Unix time
  query_show_sys_schemas_flag: true,
  tab_moves_focus: false,
  max_statements: 1000,
  identifier_auto_completion: true,
  def_conn_obj_type: MXS_OBJ_TYPE_MAP.LISTENERS,
  interactive_timeout: 28800,
  wait_timeout: 28800,
  query_history: [],
  query_snippets: [],
  del_all_conns_before_leave: true,
  show_confirm_dlg_before_leave: true,
  log_auto_gen_sql: false,
  log_user_sql: true,
})

// Place here any workspace states need to be persisted without being cleared when logging out
export default {
  namespaced: true,
  state: states(),
  mutations: {
    UPDATE_QUERY_HISTORY(state, { idx, payload }) {
      if (idx) state.query_history.splice(idx, 1)
      else state.query_history.unshift(payload)
    },
    UPDATE_QUERY_SNIPPETS(state, { idx, payload }) {
      if (idx) state.query_snippets.splice(idx, 1)
      else state.query_snippets.unshift(payload)
    },
    ...genSetMutations(states()),
  },
  getters: {
    snippetCompletionItems: (state) =>
      state.query_snippets.map((q) => ({
        label: q.name,
        detail: `SNIPPET - ${q.sql}`,
        insertText: q.sql,
        type: CMPL_SNIPPET_KIND,
      })),
  },
}
