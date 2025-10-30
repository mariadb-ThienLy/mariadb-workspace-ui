/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import ErdTaskTmp from '@/store/orm/models/ErdTaskTmp'
import EtlTaskTmp from '@/store/orm/models/EtlTaskTmp'
import QueryEditor from '@/store/orm/models/QueryEditor'
import QueryEditorTmp from '@/store/orm/models/QueryEditorTmp'
import QueryTabTmp from '@/store/orm/models/QueryTabTmp'
import Worksheet from '@/store/orm/models/Worksheet'
import WorksheetTmp from '@/store/orm/models/WorksheetTmp'
import worksheetService from '@/services/worksheetService'
import store from '@/store'

/**
 * Initialize entities that will be kept only in memory for all worksheets and queryTabs
 */
function initMemEntities() {
  const worksheets = Worksheet.all()
  worksheets.forEach((w) => {
    if (!WorksheetTmp.find(w.id)) WorksheetTmp.insert({ data: { id: w.id } })
    if (w.query_editor_id) {
      const queryEditor = QueryEditor.query()
        .where('id', w.query_editor_id)
        .with('queryTabs')
        .first()
      if (!QueryEditorTmp.find(w.query_editor_id))
        QueryEditorTmp.insert({ data: { id: queryEditor.id } })
      queryEditor.queryTabs.forEach((t) => {
        if (!QueryTabTmp.find(t.id)) QueryTabTmp.insert({ data: { id: t.id } })
      })
    } else if (w.etl_task_id && !EtlTaskTmp.find(w.etl_task_id))
      EtlTaskTmp.insert({ data: { id: w.etl_task_id } })
    else if (w.erd_task_id && !ErdTaskTmp.find(w.erd_task_id))
      ErdTaskTmp.insert({ data: { id: w.erd_task_id } })
  })
}

function initEntities() {
  if (Worksheet.all().length === 0) worksheetService.insertBlank()
  else initMemEntities()
}

async function init({ userPermission = {} } = {}) {
  initEntities()
  await store.dispatch('fileSysAccess/initStorage')
  Object.entries(userPermission).forEach(([key, value]) => {
    store.commit('workspace/UPDATE_USER_PERMISSION', { key, value })
  })
  /**
   * TODO: Remove request_config from worksheetTmp.
   * This is legacy code used to support the Query Editor in SkySQL.
   */
  Worksheet.all().forEach((wke) => {
    WorksheetTmp.update({
      where: wke.id,
      data: { request_config: { baseURL: '/' } },
    })
  })
}

export default { init }
