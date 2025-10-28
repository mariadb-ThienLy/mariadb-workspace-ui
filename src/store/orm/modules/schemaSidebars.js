/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import QueryConn from '@/store/orm/models/QueryConn'
import QueryEditor from '@/store/orm/models/QueryEditor'
import SchemaSidebar from '@/store/orm/models/SchemaSidebar'
import { NODE_TYPE_MAP, NODE_NAME_KEY_MAP, SYS_SCHEMAS } from '@/constants'

export default {
  namespaced: true,
  getters: {
    schemaSql: (state, getters, rootState) => {
      const schema = NODE_NAME_KEY_MAP[NODE_TYPE_MAP.SCHEMA]
      let sql = 'SELECT * FROM information_schema.SCHEMATA'
      if (!rootState.prefAndStorage.query_show_sys_schemas_flag)
        sql += ` WHERE ${schema} NOT IN(${SYS_SCHEMAS.map((db) => `'${db}'`).join(',')})`
      sql += ` ORDER BY ${schema};`
      return sql
    },
    activeRecord: () => SchemaSidebar.find(QueryEditor.getters('activeId')) || {},
    expandedNodeIds: (state, getters) => getters.activeRecord.expanded_node_ids || [],
    dbTreeOfConn: () => QueryEditor.getters('activeTmpRecord').db_tree_of_conn || '',
    dbTreeData: () => QueryEditor.getters('activeTmpRecord').db_tree || [],
    schemaTree: (state, getters, rootState) => {
      const tree = getters.dbTreeData
      const activeSchema = QueryConn.getters('activeSchema')
      if (rootState.prefAndStorage.identifier_auto_completion && activeSchema)
        return tree.filter((n) => n.qualifiedName !== activeSchema)
      return tree
    },
  },
}
