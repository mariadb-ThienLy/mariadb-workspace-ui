/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { Database } from '@vuex-orm/core'
import TblEditor from '@/store/orm/models/TblEditor'
import InsightViewer from '@/store/orm/models/InsightViewer'
import UserManagement from '@/store/orm/models/UserManagement'
import ErdTask from '@/store/orm/models/ErdTask'
import EtlTask from '@/store/orm/models/EtlTask'
import DdlEditor from '@/store/orm/models/DdlEditor'
import QueryConn from '@/store/orm/models/QueryConn'
import QueryEditor from '@/store/orm/models/QueryEditor'
import QueryResult from '@/store/orm/models/QueryResult'
import QueryTab from '@/store/orm/models/QueryTab'
import SchemaSidebar from '@/store/orm/models/SchemaSidebar'
import TxtEditor from '@/store/orm/models/TxtEditor'
import Worksheet from '@/store/orm/models/Worksheet'
// entities to be stored only in memory
import ErdTaskTmp from '@/store/orm/models/ErdTaskTmp'
import EtlTaskTmp from '@/store/orm/models/EtlTaskTmp'
import QueryTabTmp from '@/store/orm/models/QueryTabTmp'
import QueryEditorTmp from '@/store/orm/models/QueryEditorTmp'
import WorksheetTmp from '@/store/orm/models/WorksheetTmp'
// Store modules
import erdTasks from '@/store/orm/modules/erdTasks'
import etlTasks from '@/store/orm/modules/etlTasks'
import queryConns from '@/store/orm/modules/queryConns'
import queryEditors from '@/store/orm/modules/queryEditors'
import schemaSidebars from '@/store/orm/modules/schemaSidebars'
import worksheets from '@/store/orm/modules/worksheets'

const database = new Database()
database.register(TblEditor)
database.register(InsightViewer)
database.register(UserManagement)
database.register(ErdTask, erdTasks)
database.register(EtlTask, etlTasks)
database.register(DdlEditor)
database.register(QueryConn, queryConns)
database.register(QueryEditor, queryEditors)
database.register(QueryResult)
database.register(QueryTab)
database.register(SchemaSidebar, schemaSidebars)
database.register(Worksheet, worksheets)
database.register(TxtEditor)
database.register(ErdTaskTmp)
database.register(EtlTaskTmp)
database.register(QueryTabTmp)
database.register(QueryEditorTmp)
database.register(WorksheetTmp)

export default database
