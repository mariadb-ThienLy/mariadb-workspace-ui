/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { genSetMutations } from '@/store/utils'

const states = () => ({
  conn_err_state: false,
  pre_select_conn_item: null,
})

export default {
  namespaced: true,
  state: states(),
  mutations: genSetMutations(states()),
}
