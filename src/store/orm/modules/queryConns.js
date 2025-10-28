/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import ErdTask from '@/store/orm/models/ErdTask'
import QueryConn from '@/store/orm/models/QueryConn'
import QueryEditor from '@/store/orm/models/QueryEditor'
import Worksheet from '@/store/orm/models/Worksheet'
import { CONN_TYPE_MAP } from '@/constants'

export default {
  namespaced: true,
  getters: {
    activeQueryEditorConn: () =>
      QueryConn.query().where('query_editor_id', QueryEditor.getters('activeId')).first() || {},
    activeQueryTabConn: () => {
      const activeQueryTabId = QueryEditor.getters('activeQueryTabId')
      if (!activeQueryTabId) return {}
      return QueryConn.query().where('query_tab_id', activeQueryTabId).first() || {}
    },
    activeSchema: (state, getters) => getters.activeQueryTabConn.active_db || '',
    activeEtlConns: () =>
      QueryConn.query().where('etl_task_id', Worksheet.getters('activeRecord').etl_task_id).get(),
    activeEtlSrcConn: (state, getters) =>
      getters.activeEtlConns.find((c) => c.binding_type === CONN_TYPE_MAP.ETL_SRC) || {},
    activeErdConn: () =>
      QueryConn.query().where('erd_task_id', ErdTask.getters('activeRecordId')).first() || {},
  },
}
