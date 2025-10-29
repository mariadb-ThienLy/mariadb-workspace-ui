/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */

export const APP_NAME = 'Workspace'

export const MXS_OBJ_TYPE_MAP = Object.freeze({
  SERVERS: 'servers',
  MONITORS: 'monitors',
  FILTERS: 'filters',
  SERVICES: 'services',
  LISTENERS: 'listeners',
})

export const MONITOR_TYPE_MAP = Object.freeze({
  MRDB_MON: 'mariadbmon',
  GALERA_MON: 'galeramon',
  //Supermax monitors
  MXS_MON: 'mxsmon',
  SERVER_MON: 'servermon',
})

export const PERSIST_TOKEN_OPT = 'persist=yes&max-age=604800'

export const TOOLTIP_DEBOUNCE = 300
export const LOADING_TIME = 400 // loading time animation for table

export const DIAGRAM_CTX_TYPE_MAP = Object.freeze({
  NODE: 'node',
  LINK: 'link',
  BOARD: 'board',
})

export const SNACKBAR_TYPE_MAP = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
}

export const LOG_PRIORITY_MAP = Object.freeze({
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  NOTICE: 'notice',
  INFO: 'info',
  DEBUG: 'debug',
})

export const CMD_STATUS_MAP = Object.freeze({
  CANCELLED: 'cancelled',
  ERROR: 'error',
  DONE: 'done',
  RUNNING: 'running',
  SCHEDULED: 'scheduled',
})

export const SERVER_STATUS_TYPE = Object.freeze({
  UP: 'Up',
  DOWN: 'Down',
  MAINTENANCE: 'Maintenance',
  UNKNOWN: 'Unknown',
})

/**
 * All external links must include these attributes
 * for security and privacy when opened in a new tab:
 */
export const EXTERNAL_ANCHOR_ATTRS = Object.freeze({
  target: '_blank',
  rel: 'noopener noreferrer',
})

export const CMPL_SNIPPET_KIND = 'CMPL_SNIPPET_KIND'

/**
 * @param {object} attrs
 * @returns {object}
 */
const genIdxMap = (attrs) =>
  Object.freeze(Object.values(attrs).reduce((map, attr, i) => ((map[attr] = i), map), {}))

export const ORM_NAMESPACE = 'ORM'

export const PERSISTENT_ORM_ENTITY_MAP = Object.freeze({
  TBL_EDITORS: 'tblEditors',
  DDL_EDITORS: 'ddlEditors',
  USER_MANAGEMENTS: 'userManagements',
  ERD_TASKS: 'erdTasks',
  ETL_TASKS: 'etlTasks',
  INSIGHT_VIEWERS: 'insightViewers',
  QUERY_CONNS: 'queryConns',
  QUERY_EDITORS: 'queryEditors',
  QUERY_RESULTS: 'queryResults',
  QUERY_TABS: 'queryTabs',
  SCHEMA_SIDEBARS: 'schemaSidebars',
  TXT_EDITORS: 'txtEditors',
  WORKSHEETS: 'worksheets',
})

export const TMP_ORM_ENTITY_MAP = Object.freeze({
  ERD_TASKS_TMP: 'erdTasksTmp',
  ETL_TASKS_TMP: 'etlTasksTmp',
  QUERY_EDITORS_TMP: 'queryEditorsTmp',
  QUERY_TABS_TMP: 'queryTabsTmp',
  WORKSHEETS_TMP: 'worksheetsTmp',
})

export const FILE_SYS_ACCESS_NAMESPACE = 'workspace-editor-file-sys-access'

export const IS_MAC_OS = Boolean(window.navigator.userAgent.indexOf('Mac') !== -1)

export const OS_CMD = IS_MAC_OS ? 'META' : 'CTRL'

export const CONN_TYPE_MAP = Object.freeze({
  ERD: 'ERD',
  ETL_SRC: 'ETL_SOURCE',
  ETL_DEST: 'ETL_DESTINATION',
  QUERY_TAB: 'QUERY_TAB',
  // QueryEditor connection using for cloning query tabs and stopping query tab query
  QUERY_EDITOR: 'QUERY_EDITOR',
})

export const KEYBOARD_SHORTCUT_MAP = Object.freeze({
  CTRL_D: 'CTRL_D',
  META_D: 'META_D',
  CTRL_ENTER: 'CTRL_ENTER',
  META_ENTER: 'META_ENTER',
  CTRL_SHIFT_ENTER: 'CTRL_SHIFT_ENTER',
  META_SHIFT_ENTER: 'META_SHIFT_ENTER',
  CTRL_SHIFT_C: 'CTRL_SHIFT_C',
  META_SHIFT_C: 'META_SHIFT_C',
  CTRL_O: 'CTRL_O',
  META_O: 'META_O',
  CTRL_S: 'CTRL_S',
  META_S: 'META_S',
  CTRL_SHIFT_S: 'CTRL_SHIFT_S',
  META_SHIFT_S: 'META_SHIFT_S',
  CTRL_Z: 'CTRL_Z',
  META_Z: 'META_Z',
  CTRL_SHIFT_Z: 'CTRL_SHIFT_Z',
  META_SHIFT_Z: 'META_SHIFT_Z',
  CTRL_M: 'CTRL_M',
  META_M: 'META_M',
})

export const LINE_BREAK_BY_OS = Object.freeze({
  Windows: '\\r\\n',
  Mac: '\\n',
  Linux: '\\n',
})

// node types from database
export const NODE_TYPE_MAP = Object.freeze({
  SCHEMA: 'SCHEMA',
  TBL: 'TABLE',
  COL: 'COLUMN',
  IDX: 'INDEX',
  TRIGGER: 'TRIGGER',
  SP: 'PROCEDURE',
  VIEW: 'VIEW',
  FN: 'FUNCTION',
})

export const NODE_TYPES = Object.values(NODE_TYPE_MAP)

export const NODE_NAME_KEY_MAP = Object.freeze({
  [NODE_TYPE_MAP.SCHEMA]: 'SCHEMA_NAME',
  [NODE_TYPE_MAP.TBL]: 'TABLE_NAME',
  [NODE_TYPE_MAP.COL]: 'COLUMN_NAME',
  [NODE_TYPE_MAP.IDX]: 'INDEX_NAME',
  [NODE_TYPE_MAP.TRIGGER]: 'TRIGGER_NAME',
  [NODE_TYPE_MAP.SP]: 'ROUTINE_NAME',
  [NODE_TYPE_MAP.VIEW]: 'TABLE_NAME',
  [NODE_TYPE_MAP.FN]: 'ROUTINE_NAME',
})

// UI node group types
export const NODE_GROUP_TYPE_MAP = Object.freeze({
  TBL_G: 'Tables',
  COL_G: 'Columns',
  IDX_G: 'Indexes',
  TRIGGER_G: 'Triggers',
  SP_G: 'Stored Procedures',
  VIEW_G: 'Views',
  FN_G: 'Functions',
})

export const NODE_GROUP_TYPES = Object.values(NODE_GROUP_TYPE_MAP)

export const NODE_GROUP_CHILD_TYPE_MAP = Object.freeze({
  [NODE_GROUP_TYPE_MAP.TBL_G]: NODE_TYPE_MAP.TBL,
  [NODE_GROUP_TYPE_MAP.VIEW_G]: NODE_TYPE_MAP.VIEW,
  [NODE_GROUP_TYPE_MAP.COL_G]: NODE_TYPE_MAP.COL,
  [NODE_GROUP_TYPE_MAP.IDX_G]: NODE_TYPE_MAP.IDX,
  [NODE_GROUP_TYPE_MAP.TRIGGER_G]: NODE_TYPE_MAP.TRIGGER,
  [NODE_GROUP_TYPE_MAP.SP_G]: NODE_TYPE_MAP.SP,
  [NODE_GROUP_TYPE_MAP.FN_G]: NODE_TYPE_MAP.FN,
})

export const ALL_NODE_TYPES = [...NODE_TYPES, ...NODE_GROUP_TYPES]

export const SYS_SCHEMAS = Object.freeze([
  'information_schema',
  'performance_schema',
  'mysql',
  'sys',
])

export const QUERY_MODE_MAP = Object.freeze({
  PRVW_DATA: 'PRVW_DATA',
  PRVW_DATA_DETAILS: 'PRVW_DATA_DETAILS',
  QUERY_VIEW: 'QUERY_VIEW',
  HISTORY: 'HISTORY',
  SNIPPETS: 'SNIPPETS',
  PROCESSLIST: 'PROCESSLIST',
})

// schema tree node context option types
export const NODE_CTX_TYPE_MAP = Object.freeze({
  DROP: 'Drop',
  ALTER: 'Alter',
  CREATE: 'Create',
  ADD: 'Add', // e.g. add new columns to a table. Basically an ALTER action
  TRUNCATE: 'Truncate',
  USE: 'Use',
  INSERT: 'Insert',
  CLIPBOARD: 'Clipboard',
  PRVW_DATA: QUERY_MODE_MAP.PRVW_DATA,
  PRVW_DATA_DETAILS: QUERY_MODE_MAP.PRVW_DATA_DETAILS,
  GEN_ERD: 'Generate ERD',
  VIEW_INSIGHTS: 'View Insights',
})

export const TABLE_STRUCTURE_SPEC_MAP = Object.freeze({
  COLUMNS: 'columns',
  FK: 'foreignKeys',
  INDEXES: 'indexes',
})

export const UNSUPPORTED_TBL_CREATION_ENGINES = Object.freeze(['SEQUENCE', 'PERFORMANCE_SCHEMA'])

export const CREATE_TBL_TOKEN_MAP = Object.freeze({
  un: 'UNSIGNED',
  zf: 'ZEROFILL',
  null: 'NULL',
  nn: 'NOT NULL',
  ai: 'AUTO_INCREMENT',
  charset: 'CHARACTER SET',
  collate: 'COLLATE',
  generated: 'GENERATED ALWAYS AS',
  virtual: 'VIRTUAL',
  persistent: 'PERSISTENT',
  stored: 'STORED',
  default: 'DEFAULT',
  comment: 'COMMENT',
  createTable: 'CREATE TABLE',
  alterTable: 'ALTER TABLE',
  constraint: 'CONSTRAINT',
  primaryKey: 'PRIMARY KEY',
  uniqueKey: 'UNIQUE KEY',
  foreignKey: 'FOREIGN KEY',
  fullTextKey: 'FULLTEXT KEY',
  spatialKey: 'SPATIAL KEY',
  key: 'KEY', // plain key
  references: 'REFERENCES',
  match: 'MATCH',
  full: 'FULL',
  partial: 'PARTIAL',
  simple: 'SIMPLE',
  on: 'ON',
  delete: 'DELETE',
  update: 'UPDATE',
  restrict: 'RESTRICT',
  cascade: 'CASCADE',
  setNull: 'SET NULL',
  noAction: 'NO ACTION',
  add: 'ADD',
  change: 'CHANGE',
  drop: 'DROP',
  column: 'COLUMN',
})

// Column attribute names for altering/creating table editor
export const COL_ATTR_MAP = Object.freeze({
  ID: 'id',
  NAME: 'name',
  TYPE: 'type',
  PK: 'pk',
  NN: 'nn',
  UN: 'un',
  UQ: 'uq',
  ZF: 'zf',
  AI: 'ai',
  GENERATED: 'generated',
  DEF_EXP: 'default_exp',
  CHARSET: 'charset',
  COLLATE: 'collate',
  COMMENT: 'comment',
})

export const COL_ATTR_IDX_MAP = genIdxMap(COL_ATTR_MAP)

export const GENERATED_TYPE_MAP = Object.freeze({
  NONE: '(none)',
  VIRTUAL: CREATE_TBL_TOKEN_MAP.virtual,
  STORED: CREATE_TBL_TOKEN_MAP.stored,
})

const { primaryKey, uniqueKey, key, fullTextKey, spatialKey, foreignKey } = CREATE_TBL_TOKEN_MAP
export const ALL_TABLE_KEY_CATEGORIES = Object.freeze([
  primaryKey,
  uniqueKey,
  key,
  fullTextKey,
  spatialKey,
  foreignKey,
])

export const NON_FK_CATEGORIES = ALL_TABLE_KEY_CATEGORIES.filter((t) => t !== foreignKey)

export const LINK_OPT_TYPE_MAP = Object.freeze({
  EDIT: '$lib.workspaceView.editFk',
  REMOVE: '$lib.workspaceView.removeFk',
  SET_ONE_TO_ONE: '$lib.workspaceView.changeToOneToOne',
  SET_ONE_TO_MANY: '$lib.workspaceView.changeToOneToMany',
  SET_MANDATORY: '$lib.workspaceView.setFkColMandatory',
  SET_FK_COL_OPTIONAL: '$lib.workspaceView.setFkColOptional',
  SET_REF_COL_MANDATORY: '$lib.workspaceView.setRefColMandatory',
  SET_REF_COL_OPTIONAL: '$lib.workspaceView.setRefColOptional',
})

export const QUERY_TAB_TYPE_MAP = Object.freeze({
  TBL_EDITOR: 'TBL_EDITOR',
  INSIGHT_VIEWER: 'INSIGHT_VIEWER',
  SQL_EDITOR: 'SQL_EDITOR',
  DDL_EDITOR: 'DDL_EDITOR',
  USER_MANAGEMENT: 'USER_MANAGEMENT',
})

export const DEF_ROW_LIMIT_OPTS = [10, 50, 100, 200, 300, 400, 500, 1000, 2000, 5000, 10000, 50000]

export const NO_LIMIT = 'No Limit'

export const CHART_TYPE_MAP = Object.freeze({
  LINE: 'Line',
  SCATTER: 'Scatter',
  BAR_VERT: 'Bar - Vertical',
  BAR_HORIZ: 'Bar - Horizontal',
})

export const CHART_AXIS_TYPE_MAP = Object.freeze({
  CATEGORY: 'category', // string data type
  LINEAR: 'linear', // numerical data type
  TIME: 'time',
})

export const QUERY_LOG_TYPE_MAP = Object.freeze({
  USER_QUERY: 'User query logs',
  AUTO_GEN: 'Auto-generated query logs',
})

export const MARIADB_NET_ERRNO = [2001, 2002, 2003, 2004, 2006, 2011, 2013, 1927]
// 57P01 is for postgresql odbc
export const ODBC_NET_ERR_SQLSTATE = ['08S01', '57P01']

export const QUERY_CANCELED = 'Query execution was interrupted'

export const ETL_ACTION_MAP = Object.freeze({
  CANCEL: 'cancel',
  CREATE: 'create',
  DELETE: 'delete',
  DISCONNECT: 'disconnect',
  MIGR_OTHER_OBJS: 'migrateOtherObjs',
  RESTART: 'restart',
  VIEW: 'view',
})

export const ETL_STATUS_MAP = Object.freeze({
  INITIALIZING: 'Initializing', // when etl/start or etl/prepare hasn't been called
  RUNNING: 'Running', // when calling etl/start and waiting for res
  CANCELED: 'Canceled', // etl/start is cancelled
  ERROR: 'Error', // e.g. etl/start stops at `create` stage
  COMPLETE: 'Complete',
})

export const ETL_STAGE_INDEX_MAP = Object.freeze({
  OVERVIEW: 0,
  CONN: 1,
  SRC_OBJ: 2,
  DATA_MIGR: 3,
})

export const ODBC_DB_TYPES = [
  { text: 'MariaDB', id: 'mariadb' },
  { text: 'PostgreSQL', id: 'postgresql' },
  { text: 'Generic', id: 'generic' },
]

export const ETL_API_STAGE_MAP = Object.freeze({
  PREPARE: 'prepare',
  CREATE: 'create',
  LOAD: 'load',
})

export const ETL_CREATE_MODE_MAP = Object.freeze({
  NORMAL: 'normal',
  IGNORE: 'ignore',
  REPLACE: 'replace',
})

export const MIGR_DLG_TYPE_MAP = Object.freeze({
  CREATE: 'create',
  DELETE: 'delete',
})

export const ETL_DEF_POLLING_INTERVAL = 250

export const FK_EDITOR_ATTR_MAP = Object.freeze({
  ID: 'id',
  NAME: 'name',
  COLS: 'columns',
  REF_TARGET: 'referenced target',
  REF_COLS: 'referenced columns',
  ON_UPDATE: 'on update',
  ON_DELETE: 'on delete',
})

export const REF_OPT_MAP = Object.freeze({
  RESTRICT: CREATE_TBL_TOKEN_MAP.restrict,
  CASCADE: CREATE_TBL_TOKEN_MAP.cascade,
  SET_NULL: CREATE_TBL_TOKEN_MAP.setNull,
  NO_ACTION: CREATE_TBL_TOKEN_MAP.noAction,
})

export const FK_SUPPORTED_ENGINE = 'InnoDB'

export const KEY_EDITOR_ATTR_MAP = Object.freeze({
  ID: 'id',
  NAME: 'name',
  CATEGORY: 'category',
  COMMENT: 'comment',
})

export const KEY_EDITOR_ATTR_IDX_MAP = genIdxMap(KEY_EDITOR_ATTR_MAP)

export const KEY_COL_EDITOR_ATTR_MAP = Object.freeze({
  ID: 'id',
  COL_ORDER: '#',
  NAME: 'name',
  TYPE: 'type',
  ORDER_BY: 'order',
  LENGTH: 'length',
})

export const KEY_COL_EDITOR_ATTR_IDX_MAP = genIdxMap(KEY_COL_EDITOR_ATTR_MAP)

export const COL_ORDER_BY_MAP = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC',
})

/**
 * When using the `alter-table-editor` to alter or add foreign keys,
 * the "REFERENCED TARGET" dropdown is populated with known targets in
 * the same schema. To alter table, the users must have expanded the
 * schema node in the sidebar, so we get a list of tables in that schema.
 * Known targets can be then populated in the "REFERENCED TARGET" dropdown
 * as a quick suggestion. However, those tables are not parsed, so the
 * items for the "REFERENCED COLUMNS" dropdown can't be populated until
 * those tables are parsed. To recognize unparsed tables, the id for
 * the table in the "REFERENCED TARGET" dropdown will have a placeholder
 * prefix name, so when the users select the table, its DDL will be queried
 * and parsed. It's basically "lazy-loading".
 */
export const UNPARSED_TBL_PLACEHOLDER = 'UNPARSED_TBL__'

export const INSIGHT_SPEC_MAP = Object.freeze({
  CREATION_INFO: 'CREATION INFO',
  TABLES: NODE_GROUP_TYPE_MAP.TBL_G,
  VIEWS: NODE_GROUP_TYPE_MAP.VIEW_G,
  COLUMNS: NODE_GROUP_TYPE_MAP.COL_G,
  INDEXES: NODE_GROUP_TYPE_MAP.IDX_G,
  TRIGGERS: NODE_GROUP_TYPE_MAP.TRIGGER_G,
  SP: NODE_GROUP_TYPE_MAP.SP_G,
  FN: NODE_GROUP_TYPE_MAP.FN_G,
  DDL: 'DDL',
})

export const PREF_TYPE_MAP = Object.freeze({
  QUERY_EDITOR: 'Query editor',
  CONN: 'Connection',
  GENERAL: 'General',
})

export const PROCESS_TYPE_MAP = Object.freeze({ WORKSPACE: 'WORKSPACE', OTHERS: 'OTHERS' })

export const MAX_RENDERED_COLUMNS = 50

export const COMPACT_TOOLBAR_HEIGHT = 28

/**
 * Compound statements type. Where a query request can have
 * multiple query results.
 */
export const COMPOUND_STMT_TYPE = 'COMPOUND_STMT_TYPE'

export const PWD_TYPE_MAP = Object.freeze({
  PLAIN: 'Plain text',
  HASHED: 'Hashed',
})

export const PWD_EXPIRY_TYPE_MAP = Object.freeze({
  DEFAULT: 'DEFAULT',
  NEVER: 'NEVER',
  INTERVAL: 'INTERVAL N DAY',
})

export const MULTIPLE_PLUGIN_OPT = 'Multiple plugins'

export const PRIVILEGE_LEVEL_MAP = Object.freeze({
  GLOBAL: 'GLOBAL',
  DB: 'DATABASE',
  TBL: 'TABLE',
  COL: 'COLUMN',
  ROUTINE: 'ROUTINE',
  PROXY: 'PROXY',
})

export const PRIVILEGE_LEVELS = Object.values(PRIVILEGE_LEVEL_MAP)

//https://mariadb.com/kb/en/grant/#column-privileges
export const COL_PRIVILEGES = Object.freeze(['INSERT', 'REFERENCES', 'SELECT', 'UPDATE'])
export const PROXY_PRIVILEGES = Object.freeze(['PROXY'])
