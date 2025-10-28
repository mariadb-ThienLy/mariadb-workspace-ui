/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import EtlTask from '@/store/orm/models/EtlTask'
import Worksheet from '@/store/orm/models/Worksheet'

export default {
  namespaced: true,
  getters: {
    activeRecord: () => EtlTask.find(Worksheet.getters('activeRecord').etl_task_id) || {},
  },
}
