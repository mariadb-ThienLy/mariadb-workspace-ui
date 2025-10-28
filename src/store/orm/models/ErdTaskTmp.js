/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { TMP_ORM_ENTITY_MAP, TABLE_STRUCTURE_SPEC_MAP } from '@/constants'
import { uuidv1 } from '@/utils/helpers'

export default class ErdTaskTmp extends Extender {
  static entity = TMP_ORM_ENTITY_MAP.ERD_TASKS_TMP

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      graph_height_pct: this.number(100),
      active_entity_id: this.string(''),
      active_spec: this.string(TABLE_STRUCTURE_SPEC_MAP.COLUMNS),
      key: this.string(uuidv1()), // key for rerender purpose
      nodes_history: this.attr([]),
      active_history_idx: this.number(0),
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use Erd task Id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
