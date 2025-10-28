/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP, QUERY_MODE_MAP } from '@/constants'

export default class QueryResult extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.QUERY_RESULTS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      query_mode: this.string(QUERY_MODE_MAP.QUERY_VIEW),
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use QueryTab Id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
