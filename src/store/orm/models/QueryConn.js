/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP } from '@/constants'
import { uuidv1 } from '@/utils/helpers'

export default class QueryConn extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.QUERY_CONNS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      active_db: this.string(''),
      attributes: this.attr({}),
      binding_type: this.string(''),
      /**
       * @property {string} name - connection name
       */
      meta: this.attr({}),
      clone_of_conn_id: this.attr(null).nullable(),
      is_busy: this.boolean(false),
      lost_cnn_err: this.attr({}),
    }
  }

  static fields() {
    return {
      id: this.uid(() => uuidv1()),
      ...this.getNonKeyFields(),
      //FK
      erd_task_id: this.attr(null).nullable(),
      etl_task_id: this.attr(null).nullable(),
      query_tab_id: this.attr(null).nullable(),
      query_editor_id: this.attr(null).nullable(),
    }
  }
}
