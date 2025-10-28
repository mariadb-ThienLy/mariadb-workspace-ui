/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP } from '@/constants'

export default class SchemaSidebar extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.SCHEMA_SIDEBARS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      filter_txt: this.string(''),
      expanded_node_ids: this.attr([]),
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use Worksheet Id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
