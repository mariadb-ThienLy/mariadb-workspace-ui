/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP, TABLE_STRUCTURE_SPEC_MAP } from '@/constants'

export default class TblEditor extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.TBL_EDITORS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      active_spec: this.string(TABLE_STRUCTURE_SPEC_MAP.COLUMNS),
      data: this.attr({}),
      active_node: this.attr(null),
      is_fetching: this.boolean(true),
    }
  }

  static fields() {
    return {
      id: this.attr(null),
      ...this.getNonKeyFields(),
    }
  }
}
