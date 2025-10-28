/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import ErdTask from '@/store/orm/models/ErdTask'
import ErdTaskTmp from '@/store/orm/models/ErdTaskTmp'
import EtlTask from '@/store/orm/models/EtlTask'
import EtlTaskTmp from '@/store/orm/models/EtlTaskTmp'
import DdlEditor from '@/store/orm/models/DdlEditor'
import InsightViewer from '@/store/orm/models/InsightViewer'
import UserManagement from '@/store/orm/models/UserManagement'
import QueryConn from '@/store/orm/models/QueryConn'
import QueryEditor from '@/store/orm/models/QueryEditor'
import QueryEditorTmp from '@/store/orm/models/QueryEditorTmp'
import QueryResult from '@/store/orm/models/QueryResult'
import QueryTab from '@/store/orm/models/QueryTab'
import QueryTabTmp from '@/store/orm/models/QueryTabTmp'
import SchemaSidebar from '@/store/orm/models/SchemaSidebar'
import TblEditor from '@/store/orm/models/TblEditor'
import TxtEditor from '@/store/orm/models/TxtEditor'
import Worksheet from '@/store/orm/models/Worksheet'
import WorksheetTmp from '@/store/orm/models/WorksheetTmp'

export default {
  ErdTask,
  ErdTaskTmp,
  EtlTask,
  EtlTaskTmp,
  DdlEditor,
  InsightViewer,
  UserManagement,
  QueryConn,
  QueryEditor,
  QueryEditorTmp,
  QueryResult,
  QueryTab,
  QueryTabTmp,
  SchemaSidebar,
  TxtEditor,
  TblEditor,
  Worksheet,
  WorksheetTmp,
}
