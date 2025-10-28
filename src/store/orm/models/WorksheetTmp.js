/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { TMP_ORM_ENTITY_MAP } from '@/constants'

export default class WorksheetTmp extends Extender {
  static entity = TMP_ORM_ENTITY_MAP.WORKSHEETS_TMP

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      request_config: this.attr(null).nullable(), // axios request config
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use Worksheet id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
