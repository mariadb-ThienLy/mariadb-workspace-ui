/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import ErdTaskTmp from '@/store/orm/models/ErdTaskTmp'
import Worksheet from '@/store/orm/models/Worksheet'
import { t as typy } from 'typy'

export default {
  namespaced: true,
  getters: {
    activeRecordId: () => Worksheet.getters('activeId'),
    activeTmpRecord: (_, getters) => ErdTaskTmp.find(getters.activeRecordId) || {},
    nodesHistory: (_, getters) => typy(getters.activeTmpRecord, 'nodes_history').safeArray,
    activeHistoryIdx: (_, getters) =>
      typy(getters.activeTmpRecord, 'active_history_idx').safeNumber,
  },
}
