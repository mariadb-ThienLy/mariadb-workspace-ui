/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { genSetMutations } from '@/store/utils'
import {
  PRIVILEGE_LEVEL_MAP,
  PRIVILEGE_LEVELS,
  COL_PRIVILEGES,
  PROXY_PRIVILEGES,
} from '@/constants'

const { GLOBAL, DB, TBL, ROUTINE, COL, PROXY } = PRIVILEGE_LEVEL_MAP

const states = () => ({
  charset_collation_map: {},
  def_db_charset_map: {},
  engines: [],
  auth_plugins: [],
  sys_privileges: [],
  identifier_map: {},
})

export default {
  namespaced: true,
  state: states(),
  mutations: genSetMutations(states()),
  getters: {
    privilegesByLevel: (state) => {
      const allPrivileges = state.sys_privileges
      const res = Object.fromEntries(PRIVILEGE_LEVELS.map((level) => [level, []]))

      allPrivileges.forEach(({ context, privilege }) => {
        const ctx = context.toLowerCase()

        if (!ctx.includes('server') || privilege === 'EVENT') res[DB].push(privilege)
        if (ctx.includes('tables')) res[TBL].push(privilege)
        /**
         * SHOW CREATE ROUTINE is ignored as this is implicitly granted as part of other
         * privileges, granting only that makes no sense.
         */
        if (ctx.includes('procedures') && privilege !== 'SHOW CREATE ROUTINE')
          res[ROUTINE].push(privilege)

        res[GLOBAL].push(privilege)
      })

      res[COL] = COL_PRIVILEGES
      res[PROXY] = PROXY_PRIVILEGES
      return res
    },
  },
}
