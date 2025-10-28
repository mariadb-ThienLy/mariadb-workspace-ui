/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { TMP_ORM_ENTITY_MAP } from '@/constants'

export default class QueryEditorTmp extends Extender {
  static entity = TMP_ORM_ENTITY_MAP.QUERY_EDITORS_TMP

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      // fields for SchemaSidebar
      loading_db_tree: this.boolean(false),
      db_tree_of_conn: this.string(''), // Name of the connection using to fetch data
      db_tree: this.attr([]), // Contains schemas array
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use QueryEditor id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
