/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import schemaInfo from '@/store/modules/schemaInfo'
import fileSysAccess from '@/store/modules/fileSysAccess'
import queryConnsMem from '@/store/modules/queryConnsMem'
import queryResultsMem from '@/store/modules/queryResultsMem'
import workspace from '@/store/modules/workspace'
import prefAndStorage from '@/store/modules/prefAndStorage'

export default {
  schemaInfo,
  fileSysAccess,
  queryConnsMem,
  queryResultsMem,
  workspace,
  prefAndStorage,
}
