/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import {
  PERSISTENT_ORM_ENTITY_MAP,
  TMP_ORM_ENTITY_MAP,
  ETL_STATUS_MAP,
  ETL_STAGE_INDEX_MAP,
} from '@/constants'
import { uuidv1 } from '@/utils/helpers'

export default class EtlTask extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.ETL_TASKS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      name: this.string(''),
      status: this.string(ETL_STATUS_MAP.INITIALIZING),
      active_stage_index: this.number(ETL_STAGE_INDEX_MAP.OVERVIEW),
      // help to differentiate stage of migration in etl-migration-stage
      is_prepare_etl: this.boolean(false),
      /**
       * @property {string} src_type  - mariadb||postgresql||generic
       * @property {string} dest_name - server name in MaxScale
       * @property {string} async_query_id - query_id of async query
       */
      meta: this.attr({}),
      res: this.attr({}), // only store migration results; scripts are not stored
      /**
       * @property {number} timestamp
       * @property {string} name
       */
      logs: this.attr({
        [ETL_STAGE_INDEX_MAP.CONN]: [],
        [ETL_STAGE_INDEX_MAP.SRC_OBJ]: [],
        [ETL_STAGE_INDEX_MAP.DATA_MIGR]: [],
      }),
      created: this.number(Date.now()),
    }
  }

  static fields() {
    return {
      id: this.uid(() => uuidv1()),
      ...this.getNonKeyFields(),
      connections: this.hasMany(PERSISTENT_ORM_ENTITY_MAP.QUERY_CONNS, 'etl_task_id'),
      etlTaskTmp: this.hasOne(TMP_ORM_ENTITY_MAP.ETL_TASKS_TMP, 'id'),
    }
  }
}
