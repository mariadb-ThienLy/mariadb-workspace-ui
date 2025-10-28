/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Worksheet from '@/store/orm/models/Worksheet'
import WorksheetTmp from '@/store/orm/models/WorksheetTmp'
import { uuidv1 } from '@/utils/helpers'

/**
 * Initialize a blank worksheet
 * @param {Object} [fields = { worksheet_id: uuidv1(), name: 'WORKSHEET'}] - fields
 */
function insertBlank(fields = { worksheet_id: uuidv1(), name: 'WORKSHEET' }) {
  Worksheet.insert({ data: { id: fields.worksheet_id, name: fields.name } })
  WorksheetTmp.insert({ data: { id: fields.worksheet_id } })
  Worksheet.commit((state) => (state.active_wke_id = fields.worksheet_id))
}

export default { insertBlank }
