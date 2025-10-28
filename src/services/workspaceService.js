/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { t as typy } from 'typy'
import ErdTaskTmp from '@/store/orm/models/ErdTaskTmp'
import EtlTaskTmp from '@/store/orm/models/EtlTaskTmp'
import QueryEditor from '@/store/orm/models/QueryEditor'
import QueryEditorTmp from '@/store/orm/models/QueryEditorTmp'
import QueryTabTmp, { QUERY_RESULT_FIELDS } from '@/store/orm/models/QueryTabTmp'
import Worksheet from '@/store/orm/models/Worksheet'
import WorksheetTmp from '@/store/orm/models/WorksheetTmp'
import worksheetService from '@/services/worksheetService'
/* import queryConnService from '@wsServices/queryConnService' */
import store from '@/store'
/* import queryHttp from '@lib/workspace/queryHttp'
import { exeSql } from '@wsServices/queryHelper' */
/* import { quotingIdentifier } from '@/utils'
import { QUERY_LOG_TYPE_MAP } from '@/constants' */

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
  /*  await queryConnService.validateConns() */
}

/**
 * @param {string} param.connId - connection id
 * @param {boolean} [param.isCreating] - is creating a new table
 * @param {string} [param.schema] - schema name
 * @param {string} [param.name] - table name
 * @param {string} [param.actionName] - action name
 * @param {function} param.successCb - success callback function
 */
/* async function exeDdlScript({
  connId,
  isCreating = false,
  schema,
  name,
  successCb,
  actionName = '',
}) {
  let action
  if (actionName) action = actionName
  else {
    const targetObj = `${quotingIdentifier(schema)}.${quotingIdentifier(name)}`
    action = `Apply changes to ${targetObj}`
    if (isCreating) action = `Create ${targetObj}`
  }
  const [error] = await exeSql({
    connId,
    sql: store.state.workspace.exec_sql_dlg.sql,
    action,
    queryType: QUERY_LOG_TYPE_MAP.USER_QUERY,
  })
  store.commit('workspace/SET_EXEC_SQL_DLG', { ...store.state.workspace.exec_sql_dlg, error })
  if (!error) await typy(successCb).safeFunction()
}
 */
/**
 * @param {object} data - queryTabTmp object
 * @returns {boolean}
 */
function getIsLoading(queryTabTmp) {
  return QUERY_RESULT_FIELDS.some((field) => typy(queryTabTmp, `${field}.is_loading`).safeBoolean)
}

export default { init, /*  exeDdlScript, */ getIsLoading }
