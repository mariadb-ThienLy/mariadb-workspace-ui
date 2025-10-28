/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Worksheet from '@/store/orm/models/Worksheet'
import WorksheetTmp from '@/store/orm/models/WorksheetTmp'
import { t as typy } from 'typy'

export default {
  namespaced: true,
  state: { active_wke_id: null }, // Persistence state
  getters: {
    activeId: (state) => state.active_wke_id,
    activeRecord: (state) => Worksheet.find(state.active_wke_id) || {},
    activeRequestConfig: (state) =>
      typy(WorksheetTmp.find(state.active_wke_id), 'request_config').safeObjectOrEmpty,
  },
}
