/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { TMP_ORM_ENTITY_MAP, ETL_CREATE_MODE_MAP } from '@/constants'

export default class EtlTaskTmp extends Extender {
  static entity = TMP_ORM_ENTITY_MAP.ETL_TASKS_TMP

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      etl_res: this.attr(null), // store /etl/prepare or etl/start results
      src_schema_tree: this.attr([]),
      create_mode: this.string(ETL_CREATE_MODE_MAP.NORMAL),
      migration_objs: this.attr([]), // store migration objects for /etl/prepare
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use ETL task Id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
