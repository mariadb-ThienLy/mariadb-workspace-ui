/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { TMP_ORM_ENTITY_MAP } from '@/constants'

export const QUERY_RESULT_FIELDS = [
  'prvw_data',
  'prvw_data_details',
  'query_results',
  'process_list',
  'insight_data',
  'ddl_result',
  'user_mgmt_data',
]

export default class QueryTabTmp extends Extender {
  static entity = TMP_ORM_ENTITY_MAP.QUERY_TABS_TMP

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      // fields for QueryResult
      has_kill_flag: this.boolean(false),
      active_node: this.attr({}),
      // fields for TblEditor
      alter_editor_staging_data: this.attr({}),
      // fields for auto completion feature
      schema_identifier_names_completion_items: this.attr([]),
      /**
       * Below object fields have these properties
       * @property {number} start_time (ms)
       * @property {number} end_time (ms)
       * @property {boolean} is_loading
       * @property {object} data
       */
      ...QUERY_RESULT_FIELDS.reduce((obj, field) => ({ ...obj, [field]: this.attr({}) }), {}),
    }
  }

  static fields() {
    return {
      id: this.attr(null), // use QueryTab Id as PK for this table
      ...this.getNonKeyFields(),
    }
  }
}
