/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { uuidv1 } from '@/utils/helpers'
import { PERSISTENT_ORM_ENTITY_MAP } from '@/constants'

export default class Worksheet extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.WORKSHEETS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return { name: this.string('WORKSHEET') }
  }

  static fields() {
    return {
      id: this.uid(() => uuidv1()),
      ...this.getNonKeyFields(),
      /**
       * id field value is used as value for either erd_task_id or query_editor_id
       * as there is no need to keep ErdTask or QueryEditor worksheet after deleting it
       */
      erd_task_id: this.attr(null).nullable(),
      etl_task_id: this.attr(null).nullable(),
      query_editor_id: this.attr(null).nullable(),
    }
  }
}
