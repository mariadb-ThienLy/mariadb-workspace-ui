/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP, TMP_ORM_ENTITY_MAP } from '@/constants'

export default class QueryEditor extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.QUERY_EDITORS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return { active_query_tab_id: this.attr(null) }
  }

  static fields() {
    return {
      id: this.attr(null), // use Worksheet id as PK for this table
      ...this.getNonKeyFields(),
      queryTabs: this.hasMany(PERSISTENT_ORM_ENTITY_MAP.QUERY_TABS, 'query_editor_id'),
      schemaSidebar: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.SCHEMA_SIDEBARS, 'id'),
      queryEditorTmp: this.hasOne(TMP_ORM_ENTITY_MAP.QUERY_EDITORS_TMP, 'id'),
    }
  }
}
