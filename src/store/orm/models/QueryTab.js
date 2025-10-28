/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP, TMP_ORM_ENTITY_MAP, QUERY_TAB_TYPE_MAP } from '@/constants'
import { uuidv1 } from '@/utils/helpers'

export default class QueryTab extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.QUERY_TABS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      name: this.string('Query Tab 1'),
      count: this.number(1),
      type: this.string(QUERY_TAB_TYPE_MAP.SQL_EDITOR),
    }
  }

  /**
   * This function refreshes the name field to its default name
   * @param {String|Function} payload - either an id or a callback function that return Boolean (filter)
   */
  static refreshName(payload) {
    const models = this.filterEntity(this, payload)
    models.forEach((model) => {
      const target = this.query().withAll().whereId(model.id).first()
      if (target) this.update({ where: model.id, data: { name: `Query Tab ${target.count}` } })
    })
  }

  static fields() {
    return {
      id: this.uid(() => uuidv1()),
      ...this.getNonKeyFields(),
      //FK
      query_editor_id: this.attr(null),
      // relationship fields
      tblEditor: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.TBL_EDITORS, 'id'),
      ddlEditor: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.DDL_EDITORS, 'id'),
      insightViewer: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.INSIGHT_VIEWERS, 'id'),
      txtEditor: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.TXT_EDITORS, 'id'),
      userManagement: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.USER_MANAGEMENTS, 'id'),
      queryResult: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.QUERY_RESULTS, 'id'),
      queryTabTmp: this.hasOne(TMP_ORM_ENTITY_MAP.QUERY_TABS_TMP, 'id'),
    }
  }
}
