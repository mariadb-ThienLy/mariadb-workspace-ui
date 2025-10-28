/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Extender from '@/store/orm/Extender'
import { PERSISTENT_ORM_ENTITY_MAP, TMP_ORM_ENTITY_MAP } from '@/constants'
import { LINK_SHAPES } from '@/components/svgGraph/shapeConfig'
import { uuidv1 } from '@/utils/helpers'

export default class ErdTask extends Extender {
  static entity = PERSISTENT_ORM_ENTITY_MAP.ERD_TASKS

  /**
   * @returns {Object} - return fields that are not key, relational fields
   */
  static getNonKeyFields() {
    return {
      /**
       * Storing nodeMap using by entity-diagram.
       * The key is the id of the node and the value has the below properties
       * @property {object} data - store the staging data of parsed table
       * @property {string} id - table id is used as node id
       * @property {object} size - table dimension size. i.e. width, height
       * @property {object} styles - css styles
       * @property {number} vx -  the node’s current x-velocity
       * @property {number} vy -  the node’s current y-velocity
       * @property {number} x -  the node’s current x-position
       * @property {number} y -  the node’s current y-position
       */
      nodeMap: this.attr({}),
      count: this.number(1),
      graph_config: this.attr({
        link: { isAttrToAttr: false, isHighlightAll: false },
        linkShape: { type: LINK_SHAPES.ORTHO },
      }),
      is_laid_out: this.boolean(false), //conditionally skip the simulation
    }
  }

  static fields() {
    return {
      id: this.uid(() => uuidv1()),
      ...this.getNonKeyFields(),
      connection: this.hasOne(PERSISTENT_ORM_ENTITY_MAP.QUERY_CONNS, 'erd_task_id'),
      erdTaskTmp: this.hasOne(TMP_ORM_ENTITY_MAP.ERD_TASKS_TMP, 'id'),
    }
  }
}
