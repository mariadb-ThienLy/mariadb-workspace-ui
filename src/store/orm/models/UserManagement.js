/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP, PRIVILEGE_LEVEL_MAP } from '@/constants'

export default class UserManagement extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.USER_MANAGEMENTS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      active_tab: this.string(''),
      active_priv_level: this.string(PRIVILEGE_LEVEL_MAP.GLOBAL),
      active_selected_entry_priv_key: this.string(''),
    }
  }

  static fields() {
    return {
      id: this.attr(null),
      ...this.getNonKeyFields(),
    }
  }
}
