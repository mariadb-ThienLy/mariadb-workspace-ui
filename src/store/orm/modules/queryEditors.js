/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import QueryEditor from '@/store/orm/models/QueryEditor'
import QueryEditorTmp from '@/store/orm/models/QueryEditorTmp'
import Worksheet from '@/store/orm/models/Worksheet'

export default {
  namespaced: true,
  getters: {
    activeId: () => Worksheet.getters('activeId'),
    activeRecord: (state, getters) => QueryEditor.find(getters.activeId) || {},
    activeQueryTabId: (state, getters) => getters.activeRecord.active_query_tab_id,
    activeTmpRecord: (state, getters) => QueryEditorTmp.find(getters.activeId) || {},
  },
}
