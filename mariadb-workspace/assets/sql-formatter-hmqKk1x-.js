import { n as le } from "./nearley-BmIkdpZd.js";
const u = (s) => s.flatMap(Re), Re = (s) => f(ce(s)).map(Ae), Ae = (s) => s.replace(/ +/g, " ").trim(), ce = (s) => ({
  type: "mandatory_block",
  items: H(s, 0)[0]
}), H = (s, e, t) => {
  const r = [];
  for (; s[e]; ) {
    const [n, l] = Se(s, e);
    if (r.push(n), e = l, s[e] === "|")
      e++;
    else if (s[e] === "}" || s[e] === "]") {
      if (t !== s[e])
        throw new Error(`Unbalanced parenthesis in: ${s}`);
      return e++, [r, e];
    } else if (e === s.length) {
      if (t)
        throw new Error(`Unbalanced parenthesis in: ${s}`);
      return [r, e];
    } else
      throw new Error(`Unexpected "${s[e]}"`);
  }
  return [r, e];
}, Se = (s, e) => {
  const t = [];
  for (; ; ) {
    const [r, n] = _e(s, e);
    if (r)
      t.push(r), e = n;
    else
      break;
  }
  return t.length === 1 ? [t[0], e] : [{ type: "concatenation", items: t }, e];
}, _e = (s, e) => {
  if (s[e] === "{")
    return Te(s, e + 1);
  if (s[e] === "[")
    return pe(s, e + 1);
  {
    let t = "";
    for (; s[e] && /[A-Za-z0-9_ ]/.test(s[e]); )
      t += s[e], e++;
    return [t, e];
  }
}, Te = (s, e) => {
  const [t, r] = H(s, e, "}");
  return [{ type: "mandatory_block", items: t }, r];
}, pe = (s, e) => {
  const [t, r] = H(s, e, "]");
  return [{ type: "optional_block", items: t }, r];
}, f = (s) => {
  if (typeof s == "string")
    return [s];
  if (s.type === "concatenation")
    return s.items.map(f).reduce(Ne, [""]);
  if (s.type === "mandatory_block")
    return s.items.flatMap(f);
  if (s.type === "optional_block")
    return ["", ...s.items.flatMap(f)];
  throw new Error(`Unknown node type: ${s}`);
}, Ne = (s, e) => {
  const t = [];
  for (const r of s)
    for (const n of e)
      t.push(r + n);
  return t;
};
var a;
(function(s) {
  s.QUOTED_IDENTIFIER = "QUOTED_IDENTIFIER", s.IDENTIFIER = "IDENTIFIER", s.STRING = "STRING", s.VARIABLE = "VARIABLE", s.RESERVED_DATA_TYPE = "RESERVED_DATA_TYPE", s.RESERVED_PARAMETERIZED_DATA_TYPE = "RESERVED_PARAMETERIZED_DATA_TYPE", s.RESERVED_KEYWORD = "RESERVED_KEYWORD", s.RESERVED_FUNCTION_NAME = "RESERVED_FUNCTION_NAME", s.RESERVED_KEYWORD_PHRASE = "RESERVED_KEYWORD_PHRASE", s.RESERVED_DATA_TYPE_PHRASE = "RESERVED_DATA_TYPE_PHRASE", s.RESERVED_SET_OPERATION = "RESERVED_SET_OPERATION", s.RESERVED_CLAUSE = "RESERVED_CLAUSE", s.RESERVED_SELECT = "RESERVED_SELECT", s.RESERVED_JOIN = "RESERVED_JOIN", s.ARRAY_IDENTIFIER = "ARRAY_IDENTIFIER", s.ARRAY_KEYWORD = "ARRAY_KEYWORD", s.CASE = "CASE", s.END = "END", s.WHEN = "WHEN", s.ELSE = "ELSE", s.THEN = "THEN", s.LIMIT = "LIMIT", s.BETWEEN = "BETWEEN", s.AND = "AND", s.OR = "OR", s.XOR = "XOR", s.OPERATOR = "OPERATOR", s.COMMA = "COMMA", s.ASTERISK = "ASTERISK", s.PROPERTY_ACCESS_OPERATOR = "PROPERTY_ACCESS_OPERATOR", s.OPEN_PAREN = "OPEN_PAREN", s.CLOSE_PAREN = "CLOSE_PAREN", s.LINE_COMMENT = "LINE_COMMENT", s.BLOCK_COMMENT = "BLOCK_COMMENT", s.DISABLE_COMMENT = "DISABLE_COMMENT", s.NUMBER = "NUMBER", s.NAMED_PARAMETER = "NAMED_PARAMETER", s.QUOTED_PARAMETER = "QUOTED_PARAMETER", s.NUMBERED_PARAMETER = "NUMBERED_PARAMETER", s.POSITIONAL_PARAMETER = "POSITIONAL_PARAMETER", s.CUSTOM_PARAMETER = "CUSTOM_PARAMETER", s.DELIMITER = "DELIMITER", s.EOF = "EOF";
})(a = a || (a = {}));
const z = (s) => ({
  type: a.EOF,
  raw: "«EOF»",
  text: "«EOF»",
  start: s
}), V = z(1 / 0), h = (s) => (e) => e.type === s.type && e.text === s.text, B = {
  ARRAY: h({ text: "ARRAY", type: a.RESERVED_DATA_TYPE }),
  BY: h({ text: "BY", type: a.RESERVED_KEYWORD }),
  SET: h({ text: "SET", type: a.RESERVED_CLAUSE }),
  STRUCT: h({ text: "STRUCT", type: a.RESERVED_DATA_TYPE }),
  WINDOW: h({ text: "WINDOW", type: a.RESERVED_CLAUSE }),
  VALUES: h({ text: "VALUES", type: a.RESERVED_CLAUSE })
}, me = (s) => s === a.RESERVED_DATA_TYPE || s === a.RESERVED_KEYWORD || s === a.RESERVED_FUNCTION_NAME || s === a.RESERVED_KEYWORD_PHRASE || s === a.RESERVED_DATA_TYPE_PHRASE || s === a.RESERVED_CLAUSE || s === a.RESERVED_SELECT || s === a.RESERVED_SET_OPERATION || s === a.RESERVED_JOIN || s === a.ARRAY_KEYWORD || s === a.CASE || s === a.END || s === a.WHEN || s === a.ELSE || s === a.THEN || s === a.LIMIT || s === a.BETWEEN || s === a.AND || s === a.OR || s === a.XOR, ue = (s) => s === a.AND || s === a.OR || s === a.XOR;
function Ie(s) {
  return s.map((e, t) => {
    const r = s[t + 1] || V;
    if (B.SET(e) && r.text === "(")
      return Object.assign(Object.assign({}, e), { type: a.RESERVED_FUNCTION_NAME });
    const n = s[t - 1] || V;
    return B.VALUES(e) && n.text === "=" ? Object.assign(Object.assign({}, e), { type: a.RESERVED_FUNCTION_NAME }) : e;
  });
}
const Oe = [
  // https://mariadb.com/kb/en/reserved-words/
  "ACCESSIBLE",
  "ADD",
  "ALL",
  "ALTER",
  "ANALYZE",
  "AND",
  "AS",
  "ASC",
  "ASENSITIVE",
  "BEFORE",
  "BETWEEN",
  "BOTH",
  "BY",
  "CALL",
  "CASCADE",
  "CASE",
  "CHANGE",
  "CHECK",
  "COLLATE",
  "COLUMN",
  "CONDITION",
  "CONSTRAINT",
  "CONTINUE",
  "CONVERT",
  "CREATE",
  "CROSS",
  "CURRENT_DATE",
  "CURRENT_ROLE",
  "CURRENT_TIME",
  "CURRENT_TIMESTAMP",
  "CURRENT_USER",
  "CURSOR",
  "DATABASE",
  "DATABASES",
  "DAY_HOUR",
  "DAY_MICROSECOND",
  "DAY_MINUTE",
  "DAY_SECOND",
  "DECLARE",
  "DEFAULT",
  "DELAYED",
  "DELETE",
  "DELETE_DOMAIN_ID",
  "DESC",
  "DESCRIBE",
  "DETERMINISTIC",
  "DISTINCT",
  "DISTINCTROW",
  "DIV",
  "DO_DOMAIN_IDS",
  "DROP",
  "DUAL",
  "EACH",
  "ELSE",
  "ELSEIF",
  "ENCLOSED",
  "ESCAPED",
  "EXCEPT",
  "EXISTS",
  "EXIT",
  "EXPLAIN",
  "FALSE",
  "FETCH",
  "FOR",
  "FORCE",
  "FOREIGN",
  "FROM",
  "FULLTEXT",
  "GENERAL",
  "GRANT",
  "GROUP",
  "HAVING",
  "HIGH_PRIORITY",
  "HOUR_MICROSECOND",
  "HOUR_MINUTE",
  "HOUR_SECOND",
  "IF",
  "IGNORE",
  "IGNORE_DOMAIN_IDS",
  "IGNORE_SERVER_IDS",
  "IN",
  "INDEX",
  "INFILE",
  "INNER",
  "INOUT",
  "INSENSITIVE",
  "INSERT",
  "INTERSECT",
  "INTERVAL",
  "INTO",
  "IS",
  "ITERATE",
  "JOIN",
  "KEY",
  "KEYS",
  "KILL",
  "LEADING",
  "LEAVE",
  "LEFT",
  "LIKE",
  "LIMIT",
  "LINEAR",
  "LINES",
  "LOAD",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "LOCK",
  "LOOP",
  "LOW_PRIORITY",
  "MASTER_HEARTBEAT_PERIOD",
  "MASTER_SSL_VERIFY_SERVER_CERT",
  "MATCH",
  "MAXVALUE",
  "MINUTE_MICROSECOND",
  "MINUTE_SECOND",
  "MOD",
  "MODIFIES",
  "NATURAL",
  "NOT",
  "NO_WRITE_TO_BINLOG",
  "NULL",
  "OFFSET",
  "ON",
  "OPTIMIZE",
  "OPTION",
  "OPTIONALLY",
  "OR",
  "ORDER",
  "OUT",
  "OUTER",
  "OUTFILE",
  "OVER",
  "PAGE_CHECKSUM",
  "PARSE_VCOL_EXPR",
  "PARTITION",
  "POSITION",
  "PRIMARY",
  "PROCEDURE",
  "PURGE",
  "RANGE",
  "READ",
  "READS",
  "READ_WRITE",
  "RECURSIVE",
  "REF_SYSTEM_ID",
  "REFERENCES",
  "REGEXP",
  "RELEASE",
  "RENAME",
  "REPEAT",
  "REPLACE",
  "REQUIRE",
  "RESIGNAL",
  "RESTRICT",
  "RETURN",
  "RETURNING",
  "REVOKE",
  "RIGHT",
  "RLIKE",
  "ROW_NUMBER",
  "ROWS",
  "SCHEMA",
  "SCHEMAS",
  "SECOND_MICROSECOND",
  "SELECT",
  "SENSITIVE",
  "SEPARATOR",
  "SET",
  "SHOW",
  "SIGNAL",
  "SLOW",
  "SPATIAL",
  "SPECIFIC",
  "SQL",
  "SQLEXCEPTION",
  "SQLSTATE",
  "SQLWARNING",
  "SQL_BIG_RESULT",
  "SQL_CALC_FOUND_ROWS",
  "SQL_SMALL_RESULT",
  "SSL",
  "STARTING",
  "STATS_AUTO_RECALC",
  "STATS_PERSISTENT",
  "STATS_SAMPLE_PAGES",
  "STRAIGHT_JOIN",
  "TABLE",
  "TERMINATED",
  "THEN",
  "TO",
  "TRAILING",
  "TRIGGER",
  "TRUE",
  "UNDO",
  "UNION",
  "UNIQUE",
  "UNLOCK",
  "UNSIGNED",
  "UPDATE",
  "USAGE",
  "USE",
  "USING",
  "UTC_DATE",
  "UTC_TIME",
  "UTC_TIMESTAMP",
  "VALUES",
  "WHEN",
  "WHERE",
  "WHILE",
  "WINDOW",
  "WITH",
  "WRITE",
  "XOR",
  "YEAR_MONTH",
  "ZEROFILL"
], he = [
  // https://mariadb.com/kb/en/data-types/
  "BIGINT",
  "BINARY",
  "BIT",
  "BLOB",
  "CHAR BYTE",
  "CHAR",
  "CHARACTER",
  "DATETIME",
  "DEC",
  "DECIMAL",
  "DOUBLE PRECISION",
  "DOUBLE",
  "ENUM",
  "FIXED",
  "FLOAT",
  "FLOAT4",
  "FLOAT8",
  "INT",
  "INT1",
  "INT2",
  "INT3",
  "INT4",
  "INT8",
  "INTEGER",
  "LONG",
  "LONGBLOB",
  "LONGTEXT",
  "MEDIUMBLOB",
  "MEDIUMINT",
  "MEDIUMTEXT",
  "MIDDLEINT",
  "NATIONAL CHAR",
  "NATIONAL VARCHAR",
  "NUMERIC",
  "PRECISION",
  "REAL",
  "SMALLINT",
  "TEXT",
  "TIMESTAMP",
  "TINYBLOB",
  "TINYINT",
  "TINYTEXT",
  "VARBINARY",
  "VARCHAR",
  "VARCHARACTER",
  "VARYING",
  "YEAR"
  // 'NUMBER', // ?? In oracle mode only
  // 'SET' // handled as special-case in postProcess
], Ce = [
  // https://mariadb.com/kb/en/information-schema-sql_functions-table/
  "ADDDATE",
  "ADD_MONTHS",
  "BIT_AND",
  "BIT_OR",
  "BIT_XOR",
  "CAST",
  "COUNT",
  "CUME_DIST",
  "CURDATE",
  "CURTIME",
  "DATE_ADD",
  "DATE_SUB",
  "DATE_FORMAT",
  "DECODE",
  "DENSE_RANK",
  "EXTRACT",
  "FIRST_VALUE",
  "GROUP_CONCAT",
  "JSON_ARRAYAGG",
  "JSON_OBJECTAGG",
  "LAG",
  "LEAD",
  "MAX",
  "MEDIAN",
  "MID",
  "MIN",
  "NOW",
  "NTH_VALUE",
  "NTILE",
  "POSITION",
  "PERCENT_RANK",
  "PERCENTILE_CONT",
  "PERCENTILE_DISC",
  "RANK",
  "ROW_NUMBER",
  "SESSION_USER",
  "STD",
  "STDDEV",
  "STDDEV_POP",
  "STDDEV_SAMP",
  "SUBDATE",
  "SUBSTR",
  "SUBSTRING",
  "SUM",
  "SYSTEM_USER",
  "TRIM",
  "TRIM_ORACLE",
  "VARIANCE",
  "VAR_POP",
  "VAR_SAMP",
  "ABS",
  "ACOS",
  "ADDTIME",
  "AES_DECRYPT",
  "AES_ENCRYPT",
  "ASIN",
  "ATAN",
  "ATAN2",
  "BENCHMARK",
  "BIN",
  "BINLOG_GTID_POS",
  "BIT_COUNT",
  "BIT_LENGTH",
  "CEIL",
  "CEILING",
  "CHARACTER_LENGTH",
  "CHAR_LENGTH",
  "CHR",
  "COERCIBILITY",
  "COLUMN_CHECK",
  "COLUMN_EXISTS",
  "COLUMN_LIST",
  "COLUMN_JSON",
  "COMPRESS",
  "CONCAT",
  "CONCAT_OPERATOR_ORACLE",
  "CONCAT_WS",
  "CONNECTION_ID",
  "CONV",
  "CONVERT_TZ",
  "COS",
  "COT",
  "CRC32",
  "DATEDIFF",
  "DAYNAME",
  "DAYOFMONTH",
  "DAYOFWEEK",
  "DAYOFYEAR",
  "DEGREES",
  "DECODE_HISTOGRAM",
  "DECODE_ORACLE",
  "DES_DECRYPT",
  "DES_ENCRYPT",
  "ELT",
  "ENCODE",
  "ENCRYPT",
  "EXP",
  "EXPORT_SET",
  "EXTRACTVALUE",
  "FIELD",
  "FIND_IN_SET",
  "FLOOR",
  "FORMAT",
  "FOUND_ROWS",
  "FROM_BASE64",
  "FROM_DAYS",
  "FROM_UNIXTIME",
  "GET_LOCK",
  "GREATEST",
  "HEX",
  "IFNULL",
  "INSTR",
  "ISNULL",
  "IS_FREE_LOCK",
  "IS_USED_LOCK",
  "JSON_ARRAY",
  "JSON_ARRAY_APPEND",
  "JSON_ARRAY_INSERT",
  "JSON_COMPACT",
  "JSON_CONTAINS",
  "JSON_CONTAINS_PATH",
  "JSON_DEPTH",
  "JSON_DETAILED",
  "JSON_EXISTS",
  "JSON_EXTRACT",
  "JSON_INSERT",
  "JSON_KEYS",
  "JSON_LENGTH",
  "JSON_LOOSE",
  "JSON_MERGE",
  "JSON_MERGE_PATCH",
  "JSON_MERGE_PRESERVE",
  "JSON_QUERY",
  "JSON_QUOTE",
  "JSON_OBJECT",
  "JSON_REMOVE",
  "JSON_REPLACE",
  "JSON_SET",
  "JSON_SEARCH",
  "JSON_TYPE",
  "JSON_UNQUOTE",
  "JSON_VALID",
  "JSON_VALUE",
  "LAST_DAY",
  "LAST_INSERT_ID",
  "LCASE",
  "LEAST",
  "LENGTH",
  "LENGTHB",
  "LN",
  "LOAD_FILE",
  "LOCATE",
  "LOG",
  "LOG10",
  "LOG2",
  "LOWER",
  "LPAD",
  "LPAD_ORACLE",
  "LTRIM",
  "LTRIM_ORACLE",
  "MAKEDATE",
  "MAKETIME",
  "MAKE_SET",
  "MASTER_GTID_WAIT",
  "MASTER_POS_WAIT",
  "MD5",
  "MONTHNAME",
  "NAME_CONST",
  "NVL",
  "NVL2",
  "OCT",
  "OCTET_LENGTH",
  "ORD",
  "PERIOD_ADD",
  "PERIOD_DIFF",
  "PI",
  "POW",
  "POWER",
  "QUOTE",
  "REGEXP_INSTR",
  "REGEXP_REPLACE",
  "REGEXP_SUBSTR",
  "RADIANS",
  "RAND",
  "RELEASE_ALL_LOCKS",
  "RELEASE_LOCK",
  "REPLACE_ORACLE",
  "REVERSE",
  "ROUND",
  "RPAD",
  "RPAD_ORACLE",
  "RTRIM",
  "RTRIM_ORACLE",
  "SEC_TO_TIME",
  "SHA",
  "SHA1",
  "SHA2",
  "SIGN",
  "SIN",
  "SLEEP",
  "SOUNDEX",
  "SPACE",
  "SQRT",
  "STRCMP",
  "STR_TO_DATE",
  "SUBSTR_ORACLE",
  "SUBSTRING_INDEX",
  "SUBTIME",
  "SYS_GUID",
  "TAN",
  "TIMEDIFF",
  "TIME_FORMAT",
  "TIME_TO_SEC",
  "TO_BASE64",
  "TO_CHAR",
  "TO_DAYS",
  "TO_SECONDS",
  "UCASE",
  "UNCOMPRESS",
  "UNCOMPRESSED_LENGTH",
  "UNHEX",
  "UNIX_TIMESTAMP",
  "UPDATEXML",
  "UPPER",
  "UUID",
  "UUID_SHORT",
  "VERSION",
  "WEEKDAY",
  "WEEKOFYEAR",
  "WSREP_LAST_WRITTEN_GTID",
  "WSREP_LAST_SEEN_GTID",
  "WSREP_SYNC_WAIT_UPTO_GTID",
  "YEARWEEK",
  // CASE expression shorthands
  "COALESCE",
  "NULLIF"
], Le = u(["SELECT [ALL | DISTINCT | DISTINCTROW]"]), De = u([
  // queries
  "WITH [RECURSIVE]",
  "FROM",
  "WHERE",
  "GROUP BY",
  "HAVING",
  "PARTITION BY",
  "ORDER BY",
  "LIMIT",
  "OFFSET",
  "FETCH {FIRST | NEXT}",
  // Data manipulation
  // - insert:
  "INSERT [LOW_PRIORITY | DELAYED | HIGH_PRIORITY] [IGNORE] [INTO]",
  "REPLACE [LOW_PRIORITY | DELAYED] [INTO]",
  "VALUES",
  "ON DUPLICATE KEY UPDATE",
  // - update:
  "SET",
  // other
  "RETURNING"
]), Y = u([
  "CREATE [OR REPLACE] [TEMPORARY] TABLE [IF NOT EXISTS]"
]), $ = u([
  // - create:
  "CREATE [OR REPLACE] [SQL SECURITY DEFINER | SQL SECURITY INVOKER] VIEW [IF NOT EXISTS]",
  // - update:
  "UPDATE [LOW_PRIORITY] [IGNORE]",
  // - delete:
  "DELETE [LOW_PRIORITY] [QUICK] [IGNORE] FROM",
  // - drop table:
  "DROP [TEMPORARY] TABLE [IF EXISTS]",
  // - alter table:
  "ALTER [ONLINE] [IGNORE] TABLE [IF EXISTS]",
  "ADD [COLUMN] [IF NOT EXISTS]",
  "{CHANGE | MODIFY} [COLUMN] [IF EXISTS]",
  "DROP [COLUMN] [IF EXISTS]",
  "RENAME [TO]",
  "RENAME COLUMN",
  "ALTER [COLUMN]",
  "{SET | DROP} DEFAULT",
  "SET {VISIBLE | INVISIBLE}",
  // - truncate:
  "TRUNCATE [TABLE]",
  // https://mariadb.com/docs/reference/mdb/sql-statements/
  "ALTER DATABASE",
  "ALTER DATABASE COMMENT",
  "ALTER EVENT",
  "ALTER FUNCTION",
  "ALTER PROCEDURE",
  "ALTER SCHEMA",
  "ALTER SCHEMA COMMENT",
  "ALTER SEQUENCE",
  "ALTER SERVER",
  "ALTER USER",
  "ALTER VIEW",
  "ANALYZE",
  "ANALYZE TABLE",
  "BACKUP LOCK",
  "BACKUP STAGE",
  "BACKUP UNLOCK",
  "BEGIN",
  "BINLOG",
  "CACHE INDEX",
  "CALL",
  "CHANGE MASTER TO",
  "CHECK TABLE",
  "CHECK VIEW",
  "CHECKSUM TABLE",
  "COMMIT",
  "CREATE AGGREGATE FUNCTION",
  "CREATE DATABASE",
  "CREATE EVENT",
  "CREATE FUNCTION",
  "CREATE INDEX",
  "CREATE PROCEDURE",
  "CREATE ROLE",
  "CREATE SEQUENCE",
  "CREATE SERVER",
  "CREATE SPATIAL INDEX",
  "CREATE TRIGGER",
  "CREATE UNIQUE INDEX",
  "CREATE USER",
  "DEALLOCATE PREPARE",
  "DESCRIBE",
  "DROP DATABASE",
  "DROP EVENT",
  "DROP FUNCTION",
  "DROP INDEX",
  "DROP PREPARE",
  "DROP PROCEDURE",
  "DROP ROLE",
  "DROP SEQUENCE",
  "DROP SERVER",
  "DROP TRIGGER",
  "DROP USER",
  "DROP VIEW",
  "EXECUTE",
  "EXPLAIN",
  "FLUSH",
  "GET DIAGNOSTICS",
  "GET DIAGNOSTICS CONDITION",
  "GRANT",
  "HANDLER",
  "HELP",
  "INSTALL PLUGIN",
  "INSTALL SONAME",
  "KILL",
  "LOAD DATA INFILE",
  "LOAD INDEX INTO CACHE",
  "LOAD XML INFILE",
  "LOCK TABLE",
  "OPTIMIZE TABLE",
  "PREPARE",
  "PURGE BINARY LOGS",
  "PURGE MASTER LOGS",
  "RELEASE SAVEPOINT",
  "RENAME TABLE",
  "RENAME USER",
  "REPAIR TABLE",
  "REPAIR VIEW",
  "RESET MASTER",
  "RESET QUERY CACHE",
  "RESET REPLICA",
  "RESET SLAVE",
  "RESIGNAL",
  "REVOKE",
  "ROLLBACK",
  "SAVEPOINT",
  "SET CHARACTER SET",
  "SET DEFAULT ROLE",
  "SET GLOBAL TRANSACTION",
  "SET NAMES",
  "SET PASSWORD",
  "SET ROLE",
  "SET STATEMENT",
  "SET TRANSACTION",
  "SHOW",
  "SHOW ALL REPLICAS STATUS",
  "SHOW ALL SLAVES STATUS",
  "SHOW AUTHORS",
  "SHOW BINARY LOGS",
  "SHOW BINLOG EVENTS",
  "SHOW BINLOG STATUS",
  "SHOW CHARACTER SET",
  "SHOW CLIENT_STATISTICS",
  "SHOW COLLATION",
  "SHOW COLUMNS",
  "SHOW CONTRIBUTORS",
  "SHOW CREATE DATABASE",
  "SHOW CREATE EVENT",
  "SHOW CREATE FUNCTION",
  "SHOW CREATE PACKAGE",
  "SHOW CREATE PACKAGE BODY",
  "SHOW CREATE PROCEDURE",
  "SHOW CREATE SEQUENCE",
  "SHOW CREATE TABLE",
  "SHOW CREATE TRIGGER",
  "SHOW CREATE USER",
  "SHOW CREATE VIEW",
  "SHOW DATABASES",
  "SHOW ENGINE",
  "SHOW ENGINE INNODB STATUS",
  "SHOW ENGINES",
  "SHOW ERRORS",
  "SHOW EVENTS",
  "SHOW EXPLAIN",
  "SHOW FUNCTION CODE",
  "SHOW FUNCTION STATUS",
  "SHOW GRANTS",
  "SHOW INDEX",
  "SHOW INDEXES",
  "SHOW INDEX_STATISTICS",
  "SHOW KEYS",
  "SHOW LOCALES",
  "SHOW MASTER LOGS",
  "SHOW MASTER STATUS",
  "SHOW OPEN TABLES",
  "SHOW PACKAGE BODY CODE",
  "SHOW PACKAGE BODY STATUS",
  "SHOW PACKAGE STATUS",
  "SHOW PLUGINS",
  "SHOW PLUGINS SONAME",
  "SHOW PRIVILEGES",
  "SHOW PROCEDURE CODE",
  "SHOW PROCEDURE STATUS",
  "SHOW PROCESSLIST",
  "SHOW PROFILE",
  "SHOW PROFILES",
  "SHOW QUERY_RESPONSE_TIME",
  "SHOW RELAYLOG EVENTS",
  "SHOW REPLICA",
  "SHOW REPLICA HOSTS",
  "SHOW REPLICA STATUS",
  "SHOW SCHEMAS",
  "SHOW SLAVE",
  "SHOW SLAVE HOSTS",
  "SHOW SLAVE STATUS",
  "SHOW STATUS",
  "SHOW STORAGE ENGINES",
  "SHOW TABLE STATUS",
  "SHOW TABLES",
  "SHOW TRIGGERS",
  "SHOW USER_STATISTICS",
  "SHOW VARIABLES",
  "SHOW WARNINGS",
  "SHOW WSREP_MEMBERSHIP",
  "SHOW WSREP_STATUS",
  "SHUTDOWN",
  "SIGNAL",
  "START ALL REPLICAS",
  "START ALL SLAVES",
  "START REPLICA",
  "START SLAVE",
  "START TRANSACTION",
  "STOP ALL REPLICAS",
  "STOP ALL SLAVES",
  "STOP REPLICA",
  "STOP SLAVE",
  "UNINSTALL PLUGIN",
  "UNINSTALL SONAME",
  "UNLOCK TABLE",
  "USE",
  "XA BEGIN",
  "XA COMMIT",
  "XA END",
  "XA PREPARE",
  "XA RECOVER",
  "XA ROLLBACK",
  "XA START"
]), ye = u([
  "UNION [ALL | DISTINCT]",
  "EXCEPT [ALL | DISTINCT]",
  "INTERSECT [ALL | DISTINCT]",
  "MINUS [ALL | DISTINCT]"
]), be = u([
  "JOIN",
  "{LEFT | RIGHT} [OUTER] JOIN",
  "{INNER | CROSS} JOIN",
  "NATURAL JOIN",
  "NATURAL {LEFT | RIGHT} [OUTER] JOIN",
  // non-standard joins
  "STRAIGHT_JOIN"
]), fe = u([
  "ON {UPDATE | DELETE} [SET NULL | SET DEFAULT]",
  "CHARACTER SET",
  "{ROWS | RANGE} BETWEEN",
  "IDENTIFIED BY"
]), Pe = u([]), ms = {
  name: "mariadb",
  tokenizerOptions: {
    reservedSelect: Le,
    reservedClauses: [...De, ...Y, ...$],
    reservedSetOperations: ye,
    reservedJoins: be,
    reservedKeywordPhrases: fe,
    reservedDataTypePhrases: Pe,
    supportsXor: !0,
    reservedKeywords: Oe,
    reservedDataTypes: he,
    reservedFunctionNames: Ce,
    // TODO: support _ char set prefixes such as _utf8, _latin1, _binary, _utf8mb4, etc.
    stringTypes: [
      '""-qq-bs',
      "''-qq-bs",
      { quote: "''-raw", prefixes: ["B", "X"], requirePrefix: !0 }
    ],
    identTypes: ["``"],
    identChars: { first: "$", rest: "$", allowFirstCharNumber: !0 },
    variableTypes: [
      { regex: "@@?[A-Za-z0-9_.$]+" },
      { quote: '""-qq-bs', prefixes: ["@"], requirePrefix: !0 },
      { quote: "''-qq-bs", prefixes: ["@"], requirePrefix: !0 },
      { quote: "``", prefixes: ["@"], requirePrefix: !0 }
    ],
    paramTypes: { positional: !0 },
    lineCommentTypes: ["--", "#"],
    operators: [
      "%",
      ":=",
      "&",
      "|",
      "^",
      "~",
      "<<",
      ">>",
      "<=>",
      "&&",
      "||",
      "!",
      "*.*"
      // Not actually an operator
    ],
    postProcess: Ie
  },
  formatOptions: {
    onelineClauses: [...Y, ...$],
    tabularOnelineClauses: $
  }
}, y = (s) => s[s.length - 1], Z = (s) => s.sort((e, t) => t.length - e.length || e.localeCompare(t)), P = (s) => s.replace(/\s+/gu, " "), x = (s) => /\n/.test(s), _ = (s) => s.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&"), K = /\s+/uy, O = (s) => new RegExp(`(?:${s})`, "uy"), de = (s) => s.split("").map((e) => / /gu.test(e) ? "\\s+" : `[${e.toUpperCase()}${e.toLowerCase()}]`).join(""), $e = (s) => s + "(?:-" + s + ")*", xe = ({ prefixes: s, requirePrefix: e }) => `(?:${s.map(de).join("|")}${e ? "" : "|"})`, Me = (s) => new RegExp(`(?:${s.map(_).join("|")}).*?(?=\r
|\r|
|$)`, "uy"), G = (s, e = []) => {
  const t = s === "open" ? 0 : 1, r = ["()", ...e].map((n) => n[t]);
  return O(r.map(_).join("|"));
}, F = (s) => O(`${Z(s).map(_).join("|")}`), we = ({ rest: s, dashes: e }) => s || e ? `(?![${s || ""}${e ? "-" : ""}])` : "", p = (s, e = {}) => {
  if (s.length === 0)
    return /^\b$/u;
  const t = we(e), r = Z(s).map(_).join("|").replace(/ /gu, "\\s+");
  return new RegExp(`(?:${r})${t}\\b`, "iuy");
}, M = (s, e) => {
  if (!s.length)
    return;
  const t = s.map(_).join("|");
  return O(`(?:${t})(?:${e})`);
}, Ue = () => {
  const s = {
    "<": ">",
    "[": "]",
    "(": ")",
    "{": "}"
  }, e = "{left}(?:(?!{right}').)*?{right}", t = Object.entries(s).map(([S, N]) => e.replace(/{left}/g, _(S)).replace(/{right}/g, _(N))), r = _(Object.keys(s).join(""));
  return `[Qq]'(?:${String.raw`(?<tag>[^\s${r}])(?:(?!\k<tag>').)*?\k<tag>`}|${t.join("|")})'`;
}, v = {
  // - backtick quoted (using `` to escape)
  "``": "(?:`[^`]*`)+",
  // - Transact-SQL square bracket quoted (using ]] to escape)
  "[]": String.raw`(?:\[[^\]]*\])(?:\][^\]]*\])*`,
  // double-quoted
  '""-qq': String.raw`(?:"[^"]*")+`,
  '""-bs': String.raw`(?:"[^"\\]*(?:\\.[^"\\]*)*")`,
  '""-qq-bs': String.raw`(?:"[^"\\]*(?:\\.[^"\\]*)*")+`,
  '""-raw': String.raw`(?:"[^"]*")`,
  // single-quoted
  "''-qq": String.raw`(?:'[^']*')+`,
  "''-bs": String.raw`(?:'[^'\\]*(?:\\.[^'\\]*)*')`,
  "''-qq-bs": String.raw`(?:'[^'\\]*(?:\\.[^'\\]*)*')+`,
  "''-raw": String.raw`(?:'[^']*')`,
  // PostgreSQL dollar-quoted
  $$: String.raw`(?<tag>\$\w*\$)[\s\S]*?\k<tag>`,
  // BigQuery '''triple-quoted''' (using \' to escape)
  "'''..'''": String.raw`'''[^\\]*?(?:\\.[^\\]*?)*?'''`,
  // BigQuery """triple-quoted""" (using \" to escape)
  '""".."""': String.raw`"""[^\\]*?(?:\\.[^\\]*?)*?"""`,
  // Hive and Spark variables: ${name}
  "{}": String.raw`(?:\{[^\}]*\})`,
  // Oracle q'' strings: q'<text>' q'|text|' ...
  "q''": Ue()
}, ee = (s) => typeof s == "string" ? v[s] : "regex" in s ? s.regex : xe(s) + v[s.quote], ge = (s) => O(s.map((e) => "regex" in e ? e.regex : ee(e)).join("|")), se = (s) => s.map(ee).join("|"), k = (s) => O(se(s)), We = (s = {}) => O(te(s)), te = ({ first: s, rest: e, dashes: t, allowFirstCharNumber: r } = {}) => {
  const n = "\\p{Alphabetic}\\p{Mark}_", l = "\\p{Decimal_Number}", S = _(s ?? ""), N = _(e ?? ""), m = r ? `[${n}${l}${S}][${n}${l}${N}]*` : `[${n}${S}][${n}${l}${N}]*`;
  return t ? $e(m) : m;
};
function re(s, e) {
  const t = s.slice(0, e).split(/\n/);
  return { line: t.length, col: t[t.length - 1].length + 1 };
}
class He {
  constructor(e, t) {
    this.rules = e, this.dialectName = t, this.input = "", this.index = 0;
  }
  /**
   * Takes a SQL string and breaks it into tokens.
   * Each token is an object with type and value.
   *
   * @param {string} input - The SQL string
   * @returns {Token[]} output token stream
   */
  tokenize(e) {
    this.input = e, this.index = 0;
    const t = [];
    let r;
    for (; this.index < this.input.length; ) {
      const n = this.getWhitespace();
      if (this.index < this.input.length) {
        if (r = this.getNextToken(), !r)
          throw this.createParseError();
        t.push(Object.assign(Object.assign({}, r), { precedingWhitespace: n }));
      }
    }
    return t;
  }
  createParseError() {
    const e = this.input.slice(this.index, this.index + 10), { line: t, col: r } = re(this.input, this.index);
    return new Error(`Parse error: Unexpected "${e}" at line ${t} column ${r}.
${this.dialectInfo()}`);
  }
  dialectInfo() {
    return this.dialectName === "sql" ? `This likely happens because you're using the default "sql" dialect.
If possible, please select a more specific dialect (like sqlite, postgresql, etc).` : `SQL dialect used: "${this.dialectName}".`;
  }
  getWhitespace() {
    K.lastIndex = this.index;
    const e = K.exec(this.input);
    if (e)
      return this.index += e[0].length, e[0];
  }
  getNextToken() {
    for (const e of this.rules) {
      const t = this.match(e);
      if (t)
        return t;
    }
  }
  // Attempts to match token rule regex at current position in input
  match(e) {
    e.regex.lastIndex = this.index;
    const t = e.regex.exec(this.input);
    if (t) {
      const r = t[0], n = {
        type: e.type,
        raw: r,
        text: e.text ? e.text(r) : r,
        start: this.index
      };
      return e.key && (n.key = e.key(r)), this.index += r.length, n;
    }
  }
}
const X = /\/\*/uy, Ve = /[\s\S]/uy, Be = /\*\//uy;
class Ye {
  constructor() {
    this.lastIndex = 0;
  }
  exec(e) {
    let t = "", r, n = 0;
    if (r = this.matchSection(X, e))
      t += r, n++;
    else
      return null;
    for (; n > 0; )
      if (r = this.matchSection(X, e))
        t += r, n++;
      else if (r = this.matchSection(Be, e))
        t += r, n--;
      else if (r = this.matchSection(Ve, e))
        t += r;
      else
        return null;
    return [t];
  }
  matchSection(e, t) {
    e.lastIndex = this.lastIndex;
    const r = e.exec(t);
    return r && (this.lastIndex += r[0].length), r ? r[0] : null;
  }
}
class Ke {
  constructor(e, t) {
    this.cfg = e, this.dialectName = t, this.rulesBeforeParams = this.buildRulesBeforeParams(e), this.rulesAfterParams = this.buildRulesAfterParams(e);
  }
  tokenize(e, t) {
    const r = [
      ...this.rulesBeforeParams,
      ...this.buildParamRules(this.cfg, t),
      ...this.rulesAfterParams
    ], n = new He(r, this.dialectName).tokenize(e);
    return this.cfg.postProcess ? this.cfg.postProcess(n) : n;
  }
  // These rules can be cached as they only depend on
  // the Tokenizer config options specified for each SQL dialect
  buildRulesBeforeParams(e) {
    var t, r, n;
    return this.validRules([
      {
        type: a.DISABLE_COMMENT,
        regex: /(\/\* *sql-formatter-disable *\*\/[\s\S]*?(?:\/\* *sql-formatter-enable *\*\/|$))/uy
      },
      {
        type: a.BLOCK_COMMENT,
        regex: e.nestedBlockComments ? new Ye() : /(\/\*[^]*?\*\/)/uy
      },
      {
        type: a.LINE_COMMENT,
        regex: Me((t = e.lineCommentTypes) !== null && t !== void 0 ? t : ["--"])
      },
      {
        type: a.QUOTED_IDENTIFIER,
        regex: k(e.identTypes)
      },
      {
        type: a.NUMBER,
        regex: e.underscoresInNumbers ? /(?:0x[0-9a-fA-F_]+|0b[01_]+|(?:-\s*)?(?:[0-9_]*\.[0-9_]+|[0-9_]+(?:\.[0-9_]*)?)(?:[eE][-+]?[0-9_]+(?:\.[0-9_]+)?)?)(?![\w\p{Alphabetic}])/uy : /(?:0x[0-9a-fA-F]+|0b[01]+|(?:-\s*)?(?:[0-9]*\.[0-9]+|[0-9]+(?:\.[0-9]*)?)(?:[eE][-+]?[0-9]+(?:\.[0-9]+)?)?)(?![\w\p{Alphabetic}])/uy
      },
      // RESERVED_KEYWORD_PHRASE and RESERVED_DATA_TYPE_PHRASE  is matched before all other keyword tokens
      // to e.g. prioritize matching "TIMESTAMP WITH TIME ZONE" phrase over "WITH" clause.
      {
        type: a.RESERVED_KEYWORD_PHRASE,
        regex: p((r = e.reservedKeywordPhrases) !== null && r !== void 0 ? r : [], e.identChars),
        text: R
      },
      {
        type: a.RESERVED_DATA_TYPE_PHRASE,
        regex: p((n = e.reservedDataTypePhrases) !== null && n !== void 0 ? n : [], e.identChars),
        text: R
      },
      {
        type: a.CASE,
        regex: /CASE\b/iuy,
        text: R
      },
      {
        type: a.END,
        regex: /END\b/iuy,
        text: R
      },
      {
        type: a.BETWEEN,
        regex: /BETWEEN\b/iuy,
        text: R
      },
      {
        type: a.LIMIT,
        regex: e.reservedClauses.includes("LIMIT") ? /LIMIT\b/iuy : void 0,
        text: R
      },
      {
        type: a.RESERVED_CLAUSE,
        regex: p(e.reservedClauses, e.identChars),
        text: R
      },
      {
        type: a.RESERVED_SELECT,
        regex: p(e.reservedSelect, e.identChars),
        text: R
      },
      {
        type: a.RESERVED_SET_OPERATION,
        regex: p(e.reservedSetOperations, e.identChars),
        text: R
      },
      {
        type: a.WHEN,
        regex: /WHEN\b/iuy,
        text: R
      },
      {
        type: a.ELSE,
        regex: /ELSE\b/iuy,
        text: R
      },
      {
        type: a.THEN,
        regex: /THEN\b/iuy,
        text: R
      },
      {
        type: a.RESERVED_JOIN,
        regex: p(e.reservedJoins, e.identChars),
        text: R
      },
      {
        type: a.AND,
        regex: /AND\b/iuy,
        text: R
      },
      {
        type: a.OR,
        regex: /OR\b/iuy,
        text: R
      },
      {
        type: a.XOR,
        regex: e.supportsXor ? /XOR\b/iuy : void 0,
        text: R
      },
      ...e.operatorKeyword ? [
        {
          type: a.OPERATOR,
          regex: /OPERATOR *\([^)]+\)/iuy
        }
      ] : [],
      {
        type: a.RESERVED_FUNCTION_NAME,
        regex: p(e.reservedFunctionNames, e.identChars),
        text: R
      },
      {
        type: a.RESERVED_DATA_TYPE,
        regex: p(e.reservedDataTypes, e.identChars),
        text: R
      },
      {
        type: a.RESERVED_KEYWORD,
        regex: p(e.reservedKeywords, e.identChars),
        text: R
      }
    ]);
  }
  // These rules can also be cached as they only depend on
  // the Tokenizer config options specified for each SQL dialect
  buildRulesAfterParams(e) {
    var t, r;
    return this.validRules([
      {
        type: a.VARIABLE,
        regex: e.variableTypes ? ge(e.variableTypes) : void 0
      },
      { type: a.STRING, regex: k(e.stringTypes) },
      {
        type: a.IDENTIFIER,
        regex: We(e.identChars)
      },
      { type: a.DELIMITER, regex: /[;]/uy },
      { type: a.COMMA, regex: /[,]/y },
      {
        type: a.OPEN_PAREN,
        regex: G("open", e.extraParens)
      },
      {
        type: a.CLOSE_PAREN,
        regex: G("close", e.extraParens)
      },
      {
        type: a.OPERATOR,
        regex: F([
          // standard operators
          "+",
          "-",
          "/",
          ">",
          "<",
          "=",
          "<>",
          "<=",
          ">=",
          "!=",
          ...(t = e.operators) !== null && t !== void 0 ? t : []
        ])
      },
      { type: a.ASTERISK, regex: /[*]/uy },
      {
        type: a.PROPERTY_ACCESS_OPERATOR,
        regex: F([".", ...(r = e.propertyAccessOperators) !== null && r !== void 0 ? r : []])
      }
    ]);
  }
  // These rules can't be blindly cached as the paramTypesOverrides object
  // can differ on each invocation of the format() function.
  buildParamRules(e, t) {
    var r, n, l, S, N;
    const m = {
      named: (t == null ? void 0 : t.named) || ((r = e.paramTypes) === null || r === void 0 ? void 0 : r.named) || [],
      quoted: (t == null ? void 0 : t.quoted) || ((n = e.paramTypes) === null || n === void 0 ? void 0 : n.quoted) || [],
      numbered: (t == null ? void 0 : t.numbered) || ((l = e.paramTypes) === null || l === void 0 ? void 0 : l.numbered) || [],
      positional: typeof (t == null ? void 0 : t.positional) == "boolean" ? t.positional : (S = e.paramTypes) === null || S === void 0 ? void 0 : S.positional,
      custom: (t == null ? void 0 : t.custom) || ((N = e.paramTypes) === null || N === void 0 ? void 0 : N.custom) || []
    };
    return this.validRules([
      {
        type: a.NAMED_PARAMETER,
        regex: M(m.named, te(e.paramChars || e.identChars)),
        key: (T) => T.slice(1)
      },
      {
        type: a.QUOTED_PARAMETER,
        regex: M(m.quoted, se(e.identTypes)),
        key: (T) => (({ tokenKey: D, quoteChar: b }) => D.replace(new RegExp(_("\\" + b), "gu"), b))({
          tokenKey: T.slice(2, -1),
          quoteChar: T.slice(-1)
        })
      },
      {
        type: a.NUMBERED_PARAMETER,
        regex: M(m.numbered, "[0-9]+"),
        key: (T) => T.slice(1)
      },
      {
        type: a.POSITIONAL_PARAMETER,
        regex: m.positional ? /[?]/y : void 0
      },
      ...m.custom.map((T) => {
        var D;
        return {
          type: a.CUSTOM_PARAMETER,
          regex: O(T.regex),
          key: (D = T.key) !== null && D !== void 0 ? D : ((b) => b)
        };
      })
    ]);
  }
  // filters out rules for token types whose regex is undefined
  validRules(e) {
    return e.filter((t) => !!t.regex);
  }
}
const R = (s) => P(s.toUpperCase()), q = /* @__PURE__ */ new Map(), Ge = (s) => {
  let e = q.get(s);
  return e || (e = Fe(s), q.set(s, e)), e;
}, Fe = (s) => ({
  tokenizer: new Ke(s.tokenizerOptions, s.name),
  formatOptions: ve(s.formatOptions)
}), ve = (s) => {
  var e;
  return {
    alwaysDenseOperators: s.alwaysDenseOperators || [],
    onelineClauses: Object.fromEntries(s.onelineClauses.map((t) => [t, !0])),
    tabularOnelineClauses: Object.fromEntries(((e = s.tabularOnelineClauses) !== null && e !== void 0 ? e : s.onelineClauses).map((t) => [t, !0]))
  };
};
function ke(s) {
  return s.indentStyle === "tabularLeft" || s.indentStyle === "tabularRight" ? " ".repeat(10) : s.useTabs ? "	" : " ".repeat(s.tabWidth);
}
function C(s) {
  return s.indentStyle === "tabularLeft" || s.indentStyle === "tabularRight";
}
class Xe {
  constructor(e) {
    this.params = e, this.index = 0;
  }
  /**
   * Returns param value that matches given placeholder with param key.
   */
  get({ key: e, text: t }) {
    return this.params ? e ? this.params[e] : this.params[this.index++] : t;
  }
  /**
   * Returns index of current positional parameter.
   */
  getPositionalParameterIndex() {
    return this.index;
  }
  /**
   * Sets index of current positional parameter.
   */
  setPositionalParameterIndex(e) {
    this.index = e;
  }
}
function qe(s) {
  return s.map(Je).map(je).map(Qe).map(ze).map(Ze);
}
const Je = (s, e, t) => {
  if (me(s.type)) {
    const r = es(t, e);
    if (r && r.type === a.PROPERTY_ACCESS_OPERATOR)
      return Object.assign(Object.assign({}, s), { type: a.IDENTIFIER, text: s.raw });
    const n = L(t, e);
    if (n && n.type === a.PROPERTY_ACCESS_OPERATOR)
      return Object.assign(Object.assign({}, s), { type: a.IDENTIFIER, text: s.raw });
  }
  return s;
}, je = (s, e, t) => {
  if (s.type === a.RESERVED_FUNCTION_NAME) {
    const r = L(t, e);
    if (!r || !Ee(r))
      return Object.assign(Object.assign({}, s), { type: a.IDENTIFIER, text: s.raw });
  }
  return s;
}, Qe = (s, e, t) => {
  if (s.type === a.RESERVED_DATA_TYPE) {
    const r = L(t, e);
    if (r && Ee(r))
      return Object.assign(Object.assign({}, s), { type: a.RESERVED_PARAMETERIZED_DATA_TYPE });
  }
  return s;
}, ze = (s, e, t) => {
  if (s.type === a.IDENTIFIER) {
    const r = L(t, e);
    if (r && ae(r))
      return Object.assign(Object.assign({}, s), { type: a.ARRAY_IDENTIFIER });
  }
  return s;
}, Ze = (s, e, t) => {
  if (s.type === a.RESERVED_DATA_TYPE) {
    const r = L(t, e);
    if (r && ae(r))
      return Object.assign(Object.assign({}, s), { type: a.ARRAY_KEYWORD });
  }
  return s;
}, es = (s, e) => L(s, e, -1), L = (s, e, t = 1) => {
  let r = 1;
  for (; s[e + r * t] && ss(s[e + r * t]); )
    r++;
  return s[e + r * t];
}, Ee = (s) => s.type === a.OPEN_PAREN && s.text === "(", ae = (s) => s.type === a.OPEN_PAREN && s.text === "[", ss = (s) => s.type === a.BLOCK_COMMENT || s.type === a.LINE_COMMENT;
class ne {
  constructor(e) {
    this.tokenize = e, this.index = 0, this.tokens = [], this.input = "";
  }
  reset(e, t) {
    this.input = e, this.index = 0, this.tokens = this.tokenize(e);
  }
  next() {
    return this.tokens[this.index++];
  }
  save() {
  }
  formatError(e) {
    const { line: t, col: r } = re(this.input, e.start);
    return `Parse error at token: ${e.text} at line ${t} column ${r}`;
  }
  has(e) {
    return e in a;
  }
}
var i;
(function(s) {
  s.statement = "statement", s.clause = "clause", s.set_operation = "set_operation", s.function_call = "function_call", s.parameterized_data_type = "parameterized_data_type", s.array_subscript = "array_subscript", s.property_access = "property_access", s.parenthesis = "parenthesis", s.between_predicate = "between_predicate", s.case_expression = "case_expression", s.case_when = "case_when", s.case_else = "case_else", s.limit_clause = "limit_clause", s.all_columns_asterisk = "all_columns_asterisk", s.literal = "literal", s.identifier = "identifier", s.keyword = "keyword", s.data_type = "data_type", s.parameter = "parameter", s.operator = "operator", s.comma = "comma", s.line_comment = "line_comment", s.block_comment = "block_comment", s.disable_comment = "disable_comment";
})(i = i || (i = {}));
function w(s) {
  return s[0];
}
const o = new ne((s) => []), I = ([[s]]) => s, A = (s) => ({
  type: i.keyword,
  tokenType: s.type,
  text: s.text,
  raw: s.raw
}), J = (s) => ({
  type: i.data_type,
  text: s.text,
  raw: s.raw
}), c = (s, { leading: e, trailing: t }) => (e != null && e.length && (s = Object.assign(Object.assign({}, s), { leadingComments: e })), t != null && t.length && (s = Object.assign(Object.assign({}, s), { trailingComments: t })), s), ts = (s, { leading: e, trailing: t }) => {
  if (e != null && e.length) {
    const [r, ...n] = s;
    s = [c(r, { leading: e }), ...n];
  }
  if (t != null && t.length) {
    const r = s.slice(0, -1), n = s[s.length - 1];
    s = [...r, c(n, { trailing: t })];
  }
  return s;
}, rs = {
  Lexer: o,
  ParserRules: [
    { name: "main$ebnf$1", symbols: [] },
    { name: "main$ebnf$1", symbols: ["main$ebnf$1", "statement"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "main",
      symbols: ["main$ebnf$1"],
      postprocess: ([s]) => {
        const e = s[s.length - 1];
        return e && !e.hasSemicolon ? e.children.length > 0 ? s : s.slice(0, -1) : s;
      }
    },
    { name: "statement$subexpression$1", symbols: [o.has("DELIMITER") ? { type: "DELIMITER" } : DELIMITER] },
    { name: "statement$subexpression$1", symbols: [o.has("EOF") ? { type: "EOF" } : EOF] },
    {
      name: "statement",
      symbols: ["expressions_or_clauses", "statement$subexpression$1"],
      postprocess: ([s, [e]]) => ({
        type: i.statement,
        children: s,
        hasSemicolon: e.type === a.DELIMITER
      })
    },
    { name: "expressions_or_clauses$ebnf$1", symbols: [] },
    { name: "expressions_or_clauses$ebnf$1", symbols: ["expressions_or_clauses$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    { name: "expressions_or_clauses$ebnf$2", symbols: [] },
    { name: "expressions_or_clauses$ebnf$2", symbols: ["expressions_or_clauses$ebnf$2", "clause"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "expressions_or_clauses",
      symbols: ["expressions_or_clauses$ebnf$1", "expressions_or_clauses$ebnf$2"],
      postprocess: ([s, e]) => [...s, ...e]
    },
    { name: "clause$subexpression$1", symbols: ["limit_clause"] },
    { name: "clause$subexpression$1", symbols: ["select_clause"] },
    { name: "clause$subexpression$1", symbols: ["other_clause"] },
    { name: "clause$subexpression$1", symbols: ["set_operation"] },
    { name: "clause", symbols: ["clause$subexpression$1"], postprocess: I },
    { name: "limit_clause$ebnf$1$subexpression$1$ebnf$1", symbols: ["free_form_sql"] },
    { name: "limit_clause$ebnf$1$subexpression$1$ebnf$1", symbols: ["limit_clause$ebnf$1$subexpression$1$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    { name: "limit_clause$ebnf$1$subexpression$1", symbols: [o.has("COMMA") ? { type: "COMMA" } : COMMA, "limit_clause$ebnf$1$subexpression$1$ebnf$1"] },
    { name: "limit_clause$ebnf$1", symbols: ["limit_clause$ebnf$1$subexpression$1"], postprocess: w },
    { name: "limit_clause$ebnf$1", symbols: [], postprocess: () => null },
    {
      name: "limit_clause",
      symbols: [o.has("LIMIT") ? { type: "LIMIT" } : LIMIT, "_", "expression_chain_", "limit_clause$ebnf$1"],
      postprocess: ([s, e, t, r]) => {
        if (r) {
          const [n, l] = r;
          return {
            type: i.limit_clause,
            limitKw: c(A(s), { trailing: e }),
            offset: t,
            count: l
          };
        } else
          return {
            type: i.limit_clause,
            limitKw: c(A(s), { trailing: e }),
            count: t
          };
      }
    },
    { name: "select_clause$subexpression$1$ebnf$1", symbols: [] },
    { name: "select_clause$subexpression$1$ebnf$1", symbols: ["select_clause$subexpression$1$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    { name: "select_clause$subexpression$1", symbols: ["all_columns_asterisk", "select_clause$subexpression$1$ebnf$1"] },
    { name: "select_clause$subexpression$1$ebnf$2", symbols: [] },
    { name: "select_clause$subexpression$1$ebnf$2", symbols: ["select_clause$subexpression$1$ebnf$2", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    { name: "select_clause$subexpression$1", symbols: ["asteriskless_free_form_sql", "select_clause$subexpression$1$ebnf$2"] },
    {
      name: "select_clause",
      symbols: [o.has("RESERVED_SELECT") ? { type: "RESERVED_SELECT" } : RESERVED_SELECT, "select_clause$subexpression$1"],
      postprocess: ([s, [e, t]]) => ({
        type: i.clause,
        nameKw: A(s),
        children: [e, ...t]
      })
    },
    {
      name: "select_clause",
      symbols: [o.has("RESERVED_SELECT") ? { type: "RESERVED_SELECT" } : RESERVED_SELECT],
      postprocess: ([s]) => ({
        type: i.clause,
        nameKw: A(s),
        children: []
      })
    },
    {
      name: "all_columns_asterisk",
      symbols: [o.has("ASTERISK") ? { type: "ASTERISK" } : ASTERISK],
      postprocess: () => ({ type: i.all_columns_asterisk })
    },
    { name: "other_clause$ebnf$1", symbols: [] },
    { name: "other_clause$ebnf$1", symbols: ["other_clause$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "other_clause",
      symbols: [o.has("RESERVED_CLAUSE") ? { type: "RESERVED_CLAUSE" } : RESERVED_CLAUSE, "other_clause$ebnf$1"],
      postprocess: ([s, e]) => ({
        type: i.clause,
        nameKw: A(s),
        children: e
      })
    },
    { name: "set_operation$ebnf$1", symbols: [] },
    { name: "set_operation$ebnf$1", symbols: ["set_operation$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "set_operation",
      symbols: [o.has("RESERVED_SET_OPERATION") ? { type: "RESERVED_SET_OPERATION" } : RESERVED_SET_OPERATION, "set_operation$ebnf$1"],
      postprocess: ([s, e]) => ({
        type: i.set_operation,
        nameKw: A(s),
        children: e
      })
    },
    { name: "expression_chain_$ebnf$1", symbols: ["expression_with_comments_"] },
    { name: "expression_chain_$ebnf$1", symbols: ["expression_chain_$ebnf$1", "expression_with_comments_"], postprocess: (s) => s[0].concat([s[1]]) },
    { name: "expression_chain_", symbols: ["expression_chain_$ebnf$1"], postprocess: w },
    { name: "expression_chain$ebnf$1", symbols: [] },
    { name: "expression_chain$ebnf$1", symbols: ["expression_chain$ebnf$1", "_expression_with_comments"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "expression_chain",
      symbols: ["expression", "expression_chain$ebnf$1"],
      postprocess: ([s, e]) => [s, ...e]
    },
    { name: "andless_expression_chain$ebnf$1", symbols: [] },
    { name: "andless_expression_chain$ebnf$1", symbols: ["andless_expression_chain$ebnf$1", "_andless_expression_with_comments"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "andless_expression_chain",
      symbols: ["andless_expression", "andless_expression_chain$ebnf$1"],
      postprocess: ([s, e]) => [s, ...e]
    },
    {
      name: "expression_with_comments_",
      symbols: ["expression", "_"],
      postprocess: ([s, e]) => c(s, { trailing: e })
    },
    {
      name: "_expression_with_comments",
      symbols: ["_", "expression"],
      postprocess: ([s, e]) => c(e, { leading: s })
    },
    {
      name: "_andless_expression_with_comments",
      symbols: ["_", "andless_expression"],
      postprocess: ([s, e]) => c(e, { leading: s })
    },
    { name: "free_form_sql$subexpression$1", symbols: ["asteriskless_free_form_sql"] },
    { name: "free_form_sql$subexpression$1", symbols: ["asterisk"] },
    { name: "free_form_sql", symbols: ["free_form_sql$subexpression$1"], postprocess: I },
    { name: "asteriskless_free_form_sql$subexpression$1", symbols: ["asteriskless_andless_expression"] },
    { name: "asteriskless_free_form_sql$subexpression$1", symbols: ["logic_operator"] },
    { name: "asteriskless_free_form_sql$subexpression$1", symbols: ["comma"] },
    { name: "asteriskless_free_form_sql$subexpression$1", symbols: ["comment"] },
    { name: "asteriskless_free_form_sql$subexpression$1", symbols: ["other_keyword"] },
    { name: "asteriskless_free_form_sql", symbols: ["asteriskless_free_form_sql$subexpression$1"], postprocess: I },
    { name: "expression$subexpression$1", symbols: ["andless_expression"] },
    { name: "expression$subexpression$1", symbols: ["logic_operator"] },
    { name: "expression", symbols: ["expression$subexpression$1"], postprocess: I },
    { name: "andless_expression$subexpression$1", symbols: ["asteriskless_andless_expression"] },
    { name: "andless_expression$subexpression$1", symbols: ["asterisk"] },
    { name: "andless_expression", symbols: ["andless_expression$subexpression$1"], postprocess: I },
    { name: "asteriskless_andless_expression$subexpression$1", symbols: ["atomic_expression"] },
    { name: "asteriskless_andless_expression$subexpression$1", symbols: ["between_predicate"] },
    { name: "asteriskless_andless_expression$subexpression$1", symbols: ["case_expression"] },
    { name: "asteriskless_andless_expression", symbols: ["asteriskless_andless_expression$subexpression$1"], postprocess: I },
    { name: "atomic_expression$subexpression$1", symbols: ["array_subscript"] },
    { name: "atomic_expression$subexpression$1", symbols: ["function_call"] },
    { name: "atomic_expression$subexpression$1", symbols: ["property_access"] },
    { name: "atomic_expression$subexpression$1", symbols: ["parenthesis"] },
    { name: "atomic_expression$subexpression$1", symbols: ["curly_braces"] },
    { name: "atomic_expression$subexpression$1", symbols: ["square_brackets"] },
    { name: "atomic_expression$subexpression$1", symbols: ["operator"] },
    { name: "atomic_expression$subexpression$1", symbols: ["identifier"] },
    { name: "atomic_expression$subexpression$1", symbols: ["parameter"] },
    { name: "atomic_expression$subexpression$1", symbols: ["literal"] },
    { name: "atomic_expression$subexpression$1", symbols: ["data_type"] },
    { name: "atomic_expression$subexpression$1", symbols: ["keyword"] },
    { name: "atomic_expression", symbols: ["atomic_expression$subexpression$1"], postprocess: I },
    {
      name: "array_subscript",
      symbols: [o.has("ARRAY_IDENTIFIER") ? { type: "ARRAY_IDENTIFIER" } : ARRAY_IDENTIFIER, "_", "square_brackets"],
      postprocess: ([s, e, t]) => ({
        type: i.array_subscript,
        array: c({ type: i.identifier, quoted: !1, text: s.text }, { trailing: e }),
        parenthesis: t
      })
    },
    {
      name: "array_subscript",
      symbols: [o.has("ARRAY_KEYWORD") ? { type: "ARRAY_KEYWORD" } : ARRAY_KEYWORD, "_", "square_brackets"],
      postprocess: ([s, e, t]) => ({
        type: i.array_subscript,
        array: c(A(s), { trailing: e }),
        parenthesis: t
      })
    },
    {
      name: "function_call",
      symbols: [o.has("RESERVED_FUNCTION_NAME") ? { type: "RESERVED_FUNCTION_NAME" } : RESERVED_FUNCTION_NAME, "_", "parenthesis"],
      postprocess: ([s, e, t]) => ({
        type: i.function_call,
        nameKw: c(A(s), { trailing: e }),
        parenthesis: t
      })
    },
    {
      name: "parenthesis",
      symbols: [{ literal: "(" }, "expressions_or_clauses", { literal: ")" }],
      postprocess: ([s, e, t]) => ({
        type: i.parenthesis,
        children: e,
        openParen: "(",
        closeParen: ")"
      })
    },
    { name: "curly_braces$ebnf$1", symbols: [] },
    { name: "curly_braces$ebnf$1", symbols: ["curly_braces$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "curly_braces",
      symbols: [{ literal: "{" }, "curly_braces$ebnf$1", { literal: "}" }],
      postprocess: ([s, e, t]) => ({
        type: i.parenthesis,
        children: e,
        openParen: "{",
        closeParen: "}"
      })
    },
    { name: "square_brackets$ebnf$1", symbols: [] },
    { name: "square_brackets$ebnf$1", symbols: ["square_brackets$ebnf$1", "free_form_sql"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "square_brackets",
      symbols: [{ literal: "[" }, "square_brackets$ebnf$1", { literal: "]" }],
      postprocess: ([s, e, t]) => ({
        type: i.parenthesis,
        children: e,
        openParen: "[",
        closeParen: "]"
      })
    },
    { name: "property_access$subexpression$1", symbols: ["identifier"] },
    { name: "property_access$subexpression$1", symbols: ["array_subscript"] },
    { name: "property_access$subexpression$1", symbols: ["all_columns_asterisk"] },
    { name: "property_access$subexpression$1", symbols: ["parameter"] },
    {
      name: "property_access",
      symbols: ["atomic_expression", "_", o.has("PROPERTY_ACCESS_OPERATOR") ? { type: "PROPERTY_ACCESS_OPERATOR" } : PROPERTY_ACCESS_OPERATOR, "_", "property_access$subexpression$1"],
      postprocess: (
        // Allowing property to be <array_subscript> is currently a hack.
        // A better way would be to allow <property_access> on the left side of array_subscript,
        // but we currently can't do that because of another hack that requires
        // %ARRAY_IDENTIFIER on the left side of <array_subscript>.
        ([s, e, t, r, [n]]) => ({
          type: i.property_access,
          object: c(s, { trailing: e }),
          operator: t.text,
          property: c(n, { leading: r })
        })
      )
    },
    {
      name: "between_predicate",
      symbols: [o.has("BETWEEN") ? { type: "BETWEEN" } : BETWEEN, "_", "andless_expression_chain", "_", o.has("AND") ? { type: "AND" } : AND, "_", "andless_expression"],
      postprocess: ([s, e, t, r, n, l, S]) => ({
        type: i.between_predicate,
        betweenKw: A(s),
        expr1: ts(t, { leading: e, trailing: r }),
        andKw: A(n),
        expr2: [c(S, { leading: l })]
      })
    },
    { name: "case_expression$ebnf$1", symbols: ["expression_chain_"], postprocess: w },
    { name: "case_expression$ebnf$1", symbols: [], postprocess: () => null },
    { name: "case_expression$ebnf$2", symbols: [] },
    { name: "case_expression$ebnf$2", symbols: ["case_expression$ebnf$2", "case_clause"], postprocess: (s) => s[0].concat([s[1]]) },
    {
      name: "case_expression",
      symbols: [o.has("CASE") ? { type: "CASE" } : CASE, "_", "case_expression$ebnf$1", "case_expression$ebnf$2", o.has("END") ? { type: "END" } : END],
      postprocess: ([s, e, t, r, n]) => ({
        type: i.case_expression,
        caseKw: c(A(s), { trailing: e }),
        endKw: A(n),
        expr: t || [],
        clauses: r
      })
    },
    {
      name: "case_clause",
      symbols: [o.has("WHEN") ? { type: "WHEN" } : WHEN, "_", "expression_chain_", o.has("THEN") ? { type: "THEN" } : THEN, "_", "expression_chain_"],
      postprocess: ([s, e, t, r, n, l]) => ({
        type: i.case_when,
        whenKw: c(A(s), { trailing: e }),
        thenKw: c(A(r), { trailing: n }),
        condition: t,
        result: l
      })
    },
    {
      name: "case_clause",
      symbols: [o.has("ELSE") ? { type: "ELSE" } : ELSE, "_", "expression_chain_"],
      postprocess: ([s, e, t]) => ({
        type: i.case_else,
        elseKw: c(A(s), { trailing: e }),
        result: t
      })
    },
    { name: "comma$subexpression$1", symbols: [o.has("COMMA") ? { type: "COMMA" } : COMMA] },
    { name: "comma", symbols: ["comma$subexpression$1"], postprocess: ([[s]]) => ({ type: i.comma }) },
    { name: "asterisk$subexpression$1", symbols: [o.has("ASTERISK") ? { type: "ASTERISK" } : ASTERISK] },
    { name: "asterisk", symbols: ["asterisk$subexpression$1"], postprocess: ([[s]]) => ({ type: i.operator, text: s.text }) },
    { name: "operator$subexpression$1", symbols: [o.has("OPERATOR") ? { type: "OPERATOR" } : OPERATOR] },
    { name: "operator", symbols: ["operator$subexpression$1"], postprocess: ([[s]]) => ({ type: i.operator, text: s.text }) },
    { name: "identifier$subexpression$1", symbols: [o.has("IDENTIFIER") ? { type: "IDENTIFIER" } : IDENTIFIER] },
    { name: "identifier$subexpression$1", symbols: [o.has("QUOTED_IDENTIFIER") ? { type: "QUOTED_IDENTIFIER" } : QUOTED_IDENTIFIER] },
    { name: "identifier$subexpression$1", symbols: [o.has("VARIABLE") ? { type: "VARIABLE" } : VARIABLE] },
    { name: "identifier", symbols: ["identifier$subexpression$1"], postprocess: ([[s]]) => ({ type: i.identifier, quoted: s.type !== "IDENTIFIER", text: s.text }) },
    { name: "parameter$subexpression$1", symbols: [o.has("NAMED_PARAMETER") ? { type: "NAMED_PARAMETER" } : NAMED_PARAMETER] },
    { name: "parameter$subexpression$1", symbols: [o.has("QUOTED_PARAMETER") ? { type: "QUOTED_PARAMETER" } : QUOTED_PARAMETER] },
    { name: "parameter$subexpression$1", symbols: [o.has("NUMBERED_PARAMETER") ? { type: "NUMBERED_PARAMETER" } : NUMBERED_PARAMETER] },
    { name: "parameter$subexpression$1", symbols: [o.has("POSITIONAL_PARAMETER") ? { type: "POSITIONAL_PARAMETER" } : POSITIONAL_PARAMETER] },
    { name: "parameter$subexpression$1", symbols: [o.has("CUSTOM_PARAMETER") ? { type: "CUSTOM_PARAMETER" } : CUSTOM_PARAMETER] },
    { name: "parameter", symbols: ["parameter$subexpression$1"], postprocess: ([[s]]) => ({ type: i.parameter, key: s.key, text: s.text }) },
    { name: "literal$subexpression$1", symbols: [o.has("NUMBER") ? { type: "NUMBER" } : NUMBER] },
    { name: "literal$subexpression$1", symbols: [o.has("STRING") ? { type: "STRING" } : STRING] },
    { name: "literal", symbols: ["literal$subexpression$1"], postprocess: ([[s]]) => ({ type: i.literal, text: s.text }) },
    { name: "keyword$subexpression$1", symbols: [o.has("RESERVED_KEYWORD") ? { type: "RESERVED_KEYWORD" } : RESERVED_KEYWORD] },
    { name: "keyword$subexpression$1", symbols: [o.has("RESERVED_KEYWORD_PHRASE") ? { type: "RESERVED_KEYWORD_PHRASE" } : RESERVED_KEYWORD_PHRASE] },
    { name: "keyword$subexpression$1", symbols: [o.has("RESERVED_JOIN") ? { type: "RESERVED_JOIN" } : RESERVED_JOIN] },
    {
      name: "keyword",
      symbols: ["keyword$subexpression$1"],
      postprocess: ([[s]]) => A(s)
    },
    { name: "data_type$subexpression$1", symbols: [o.has("RESERVED_DATA_TYPE") ? { type: "RESERVED_DATA_TYPE" } : RESERVED_DATA_TYPE] },
    { name: "data_type$subexpression$1", symbols: [o.has("RESERVED_DATA_TYPE_PHRASE") ? { type: "RESERVED_DATA_TYPE_PHRASE" } : RESERVED_DATA_TYPE_PHRASE] },
    {
      name: "data_type",
      symbols: ["data_type$subexpression$1"],
      postprocess: ([[s]]) => J(s)
    },
    {
      name: "data_type",
      symbols: [o.has("RESERVED_PARAMETERIZED_DATA_TYPE") ? { type: "RESERVED_PARAMETERIZED_DATA_TYPE" } : RESERVED_PARAMETERIZED_DATA_TYPE, "_", "parenthesis"],
      postprocess: ([s, e, t]) => ({
        type: i.parameterized_data_type,
        dataType: c(J(s), { trailing: e }),
        parenthesis: t
      })
    },
    { name: "logic_operator$subexpression$1", symbols: [o.has("AND") ? { type: "AND" } : AND] },
    { name: "logic_operator$subexpression$1", symbols: [o.has("OR") ? { type: "OR" } : OR] },
    { name: "logic_operator$subexpression$1", symbols: [o.has("XOR") ? { type: "XOR" } : XOR] },
    {
      name: "logic_operator",
      symbols: ["logic_operator$subexpression$1"],
      postprocess: ([[s]]) => A(s)
    },
    { name: "other_keyword$subexpression$1", symbols: [o.has("WHEN") ? { type: "WHEN" } : WHEN] },
    { name: "other_keyword$subexpression$1", symbols: [o.has("THEN") ? { type: "THEN" } : THEN] },
    { name: "other_keyword$subexpression$1", symbols: [o.has("ELSE") ? { type: "ELSE" } : ELSE] },
    { name: "other_keyword$subexpression$1", symbols: [o.has("END") ? { type: "END" } : END] },
    {
      name: "other_keyword",
      symbols: ["other_keyword$subexpression$1"],
      postprocess: ([[s]]) => A(s)
    },
    { name: "_$ebnf$1", symbols: [] },
    { name: "_$ebnf$1", symbols: ["_$ebnf$1", "comment"], postprocess: (s) => s[0].concat([s[1]]) },
    { name: "_", symbols: ["_$ebnf$1"], postprocess: ([s]) => s },
    {
      name: "comment",
      symbols: [o.has("LINE_COMMENT") ? { type: "LINE_COMMENT" } : LINE_COMMENT],
      postprocess: ([s]) => ({
        type: i.line_comment,
        text: s.text,
        precedingWhitespace: s.precedingWhitespace
      })
    },
    {
      name: "comment",
      symbols: [o.has("BLOCK_COMMENT") ? { type: "BLOCK_COMMENT" } : BLOCK_COMMENT],
      postprocess: ([s]) => ({
        type: i.block_comment,
        text: s.text,
        precedingWhitespace: s.precedingWhitespace
      })
    },
    {
      name: "comment",
      symbols: [o.has("DISABLE_COMMENT") ? { type: "DISABLE_COMMENT" } : DISABLE_COMMENT],
      postprocess: ([s]) => ({
        type: i.disable_comment,
        text: s.text,
        precedingWhitespace: s.precedingWhitespace
      })
    }
  ],
  ParserStart: "main"
}, { Parser: Es, Grammar: as } = le;
function ns(s) {
  let e = {};
  const t = new ne((n) => [
    ...qe(s.tokenize(n, e)),
    z(n.length)
  ]), r = new Es(as.fromCompiled(rs), { lexer: t });
  return {
    parse: (n, l) => {
      e = l;
      const { results: S } = r.feed(n);
      if (S.length === 1)
        return S[0];
      throw S.length === 0 ? new Error("Parse error: Invalid SQL") : new Error(`Parse error: Ambiguous grammar
${JSON.stringify(S, void 0, 2)}`);
    }
  };
}
var E;
(function(s) {
  s[s.SPACE = 0] = "SPACE", s[s.NO_SPACE = 1] = "NO_SPACE", s[s.NO_NEWLINE = 2] = "NO_NEWLINE", s[s.NEWLINE = 3] = "NEWLINE", s[s.MANDATORY_NEWLINE = 4] = "MANDATORY_NEWLINE", s[s.INDENT = 5] = "INDENT", s[s.SINGLE_INDENT = 6] = "SINGLE_INDENT";
})(E = E || (E = {}));
class ie {
  constructor(e) {
    this.indentation = e, this.items = [];
  }
  /**
   * Appends token strings and whitespace modifications to SQL string.
   */
  add(...e) {
    for (const t of e)
      switch (t) {
        case E.SPACE:
          this.items.push(E.SPACE);
          break;
        case E.NO_SPACE:
          this.trimHorizontalWhitespace();
          break;
        case E.NO_NEWLINE:
          this.trimWhitespace();
          break;
        case E.NEWLINE:
          this.trimHorizontalWhitespace(), this.addNewline(E.NEWLINE);
          break;
        case E.MANDATORY_NEWLINE:
          this.trimHorizontalWhitespace(), this.addNewline(E.MANDATORY_NEWLINE);
          break;
        case E.INDENT:
          this.addIndentation();
          break;
        case E.SINGLE_INDENT:
          this.items.push(E.SINGLE_INDENT);
          break;
        default:
          this.items.push(t);
      }
  }
  trimHorizontalWhitespace() {
    for (; is(y(this.items)); )
      this.items.pop();
  }
  trimWhitespace() {
    for (; os(y(this.items)); )
      this.items.pop();
  }
  addNewline(e) {
    if (this.items.length > 0)
      switch (y(this.items)) {
        case E.NEWLINE:
          this.items.pop(), this.items.push(e);
          break;
        case E.MANDATORY_NEWLINE:
          break;
        default:
          this.items.push(e);
          break;
      }
  }
  addIndentation() {
    for (let e = 0; e < this.indentation.getLevel(); e++)
      this.items.push(E.SINGLE_INDENT);
  }
  /**
   * Returns the final SQL string.
   */
  toString() {
    return this.items.map((e) => this.itemToString(e)).join("");
  }
  /**
   * Returns the internal layout data
   */
  getLayoutItems() {
    return this.items;
  }
  itemToString(e) {
    switch (e) {
      case E.SPACE:
        return " ";
      case E.NEWLINE:
      case E.MANDATORY_NEWLINE:
        return `
`;
      case E.SINGLE_INDENT:
        return this.indentation.getSingleIndent();
      default:
        return e;
    }
  }
}
const is = (s) => s === E.SPACE || s === E.SINGLE_INDENT, os = (s) => s === E.SPACE || s === E.SINGLE_INDENT || s === E.NEWLINE;
function j(s, e) {
  if (e === "standard")
    return s;
  let t = [];
  return s.length >= 10 && s.includes(" ") && ([s, ...t] = s.split(" ")), e === "tabularLeft" ? s = s.padEnd(9, " ") : s = s.padStart(9, " "), s + ["", ...t].join(" ");
}
function Q(s) {
  return ue(s) || s === a.RESERVED_CLAUSE || s === a.RESERVED_SELECT || s === a.RESERVED_SET_OPERATION || s === a.RESERVED_JOIN || s === a.LIMIT;
}
const U = "top-level", ls = "block-level";
class oe {
  /**
   * @param {string} indent A string to indent with
   */
  constructor(e) {
    this.indent = e, this.indentTypes = [];
  }
  /**
   * Returns indentation string for single indentation step.
   */
  getSingleIndent() {
    return this.indent;
  }
  /**
   * Returns current indentation level
   */
  getLevel() {
    return this.indentTypes.length;
  }
  /**
   * Increases indentation by one top-level indent.
   */
  increaseTopLevel() {
    this.indentTypes.push(U);
  }
  /**
   * Increases indentation by one block-level indent.
   */
  increaseBlockLevel() {
    this.indentTypes.push(ls);
  }
  /**
   * Decreases indentation by one top-level indent.
   * Does nothing when the previous indent is not top-level.
   */
  decreaseTopLevel() {
    this.indentTypes.length > 0 && y(this.indentTypes) === U && this.indentTypes.pop();
  }
  /**
   * Decreases indentation by one block-level indent.
   * If there are top-level indents within the block-level indent,
   * throws away these as well.
   */
  decreaseBlockLevel() {
    for (; this.indentTypes.length > 0 && this.indentTypes.pop() === U; )
      ;
  }
}
class Rs extends ie {
  constructor(e) {
    super(new oe("")), this.expressionWidth = e, this.length = 0, this.trailingSpace = !1;
  }
  add(...e) {
    if (e.forEach((t) => this.addToLength(t)), this.length > this.expressionWidth)
      throw new W();
    super.add(...e);
  }
  addToLength(e) {
    if (typeof e == "string")
      this.length += e.length, this.trailingSpace = !1;
    else {
      if (e === E.MANDATORY_NEWLINE || e === E.NEWLINE)
        throw new W();
      e === E.INDENT || e === E.SINGLE_INDENT || e === E.SPACE ? this.trailingSpace || (this.length++, this.trailingSpace = !0) : (e === E.NO_NEWLINE || e === E.NO_SPACE) && this.trailingSpace && (this.trailingSpace = !1, this.length--);
    }
  }
}
class W extends Error {
}
class d {
  constructor({ cfg: e, dialectCfg: t, params: r, layout: n, inline: l = !1 }) {
    this.inline = !1, this.nodes = [], this.index = -1, this.cfg = e, this.dialectCfg = t, this.inline = l, this.params = r, this.layout = n;
  }
  format(e) {
    for (this.nodes = e, this.index = 0; this.index < this.nodes.length; this.index++)
      this.formatNode(this.nodes[this.index]);
    return this.layout;
  }
  formatNode(e) {
    this.formatComments(e.leadingComments), this.formatNodeWithoutComments(e), this.formatComments(e.trailingComments);
  }
  formatNodeWithoutComments(e) {
    switch (e.type) {
      case i.function_call:
        return this.formatFunctionCall(e);
      case i.parameterized_data_type:
        return this.formatParameterizedDataType(e);
      case i.array_subscript:
        return this.formatArraySubscript(e);
      case i.property_access:
        return this.formatPropertyAccess(e);
      case i.parenthesis:
        return this.formatParenthesis(e);
      case i.between_predicate:
        return this.formatBetweenPredicate(e);
      case i.case_expression:
        return this.formatCaseExpression(e);
      case i.case_when:
        return this.formatCaseWhen(e);
      case i.case_else:
        return this.formatCaseElse(e);
      case i.clause:
        return this.formatClause(e);
      case i.set_operation:
        return this.formatSetOperation(e);
      case i.limit_clause:
        return this.formatLimitClause(e);
      case i.all_columns_asterisk:
        return this.formatAllColumnsAsterisk(e);
      case i.literal:
        return this.formatLiteral(e);
      case i.identifier:
        return this.formatIdentifier(e);
      case i.parameter:
        return this.formatParameter(e);
      case i.operator:
        return this.formatOperator(e);
      case i.comma:
        return this.formatComma(e);
      case i.line_comment:
        return this.formatLineComment(e);
      case i.block_comment:
        return this.formatBlockComment(e);
      case i.disable_comment:
        return this.formatBlockComment(e);
      case i.data_type:
        return this.formatDataType(e);
      case i.keyword:
        return this.formatKeywordNode(e);
    }
  }
  formatFunctionCall(e) {
    this.withComments(e.nameKw, () => {
      this.layout.add(this.showFunctionKw(e.nameKw));
    }), this.formatNode(e.parenthesis);
  }
  formatParameterizedDataType(e) {
    this.withComments(e.dataType, () => {
      this.layout.add(this.showDataType(e.dataType));
    }), this.formatNode(e.parenthesis);
  }
  formatArraySubscript(e) {
    let t;
    switch (e.array.type) {
      case i.data_type:
        t = this.showDataType(e.array);
        break;
      case i.keyword:
        t = this.showKw(e.array);
        break;
      default:
        t = this.showIdentifier(e.array);
        break;
    }
    this.withComments(e.array, () => {
      this.layout.add(t);
    }), this.formatNode(e.parenthesis);
  }
  formatPropertyAccess(e) {
    this.formatNode(e.object), this.layout.add(E.NO_SPACE, e.operator), this.formatNode(e.property);
  }
  formatParenthesis(e) {
    const t = this.formatInlineExpression(e.children);
    t ? (this.layout.add(e.openParen), this.layout.add(...t.getLayoutItems()), this.layout.add(E.NO_SPACE, e.closeParen, E.SPACE)) : (this.layout.add(e.openParen, E.NEWLINE), C(this.cfg) ? (this.layout.add(E.INDENT), this.layout = this.formatSubExpression(e.children)) : (this.layout.indentation.increaseBlockLevel(), this.layout.add(E.INDENT), this.layout = this.formatSubExpression(e.children), this.layout.indentation.decreaseBlockLevel()), this.layout.add(E.NEWLINE, E.INDENT, e.closeParen, E.SPACE));
  }
  formatBetweenPredicate(e) {
    this.layout.add(this.showKw(e.betweenKw), E.SPACE), this.layout = this.formatSubExpression(e.expr1), this.layout.add(E.NO_SPACE, E.SPACE, this.showNonTabularKw(e.andKw), E.SPACE), this.layout = this.formatSubExpression(e.expr2), this.layout.add(E.SPACE);
  }
  formatCaseExpression(e) {
    this.formatNode(e.caseKw), this.layout.indentation.increaseBlockLevel(), this.layout = this.formatSubExpression(e.expr), this.layout = this.formatSubExpression(e.clauses), this.layout.indentation.decreaseBlockLevel(), this.layout.add(E.NEWLINE, E.INDENT), this.formatNode(e.endKw);
  }
  formatCaseWhen(e) {
    this.layout.add(E.NEWLINE, E.INDENT), this.formatNode(e.whenKw), this.layout = this.formatSubExpression(e.condition), this.formatNode(e.thenKw), this.layout = this.formatSubExpression(e.result);
  }
  formatCaseElse(e) {
    this.layout.add(E.NEWLINE, E.INDENT), this.formatNode(e.elseKw), this.layout = this.formatSubExpression(e.result);
  }
  formatClause(e) {
    this.isOnelineClause(e) ? this.formatClauseInOnelineStyle(e) : C(this.cfg) ? this.formatClauseInTabularStyle(e) : this.formatClauseInIndentedStyle(e);
  }
  isOnelineClause(e) {
    return C(this.cfg) ? this.dialectCfg.tabularOnelineClauses[e.nameKw.text] : this.dialectCfg.onelineClauses[e.nameKw.text];
  }
  formatClauseInIndentedStyle(e) {
    this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e.nameKw), E.NEWLINE), this.layout.indentation.increaseTopLevel(), this.layout.add(E.INDENT), this.layout = this.formatSubExpression(e.children), this.layout.indentation.decreaseTopLevel();
  }
  formatClauseInOnelineStyle(e) {
    this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e.nameKw), E.SPACE), this.layout = this.formatSubExpression(e.children);
  }
  formatClauseInTabularStyle(e) {
    this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e.nameKw), E.SPACE), this.layout.indentation.increaseTopLevel(), this.layout = this.formatSubExpression(e.children), this.layout.indentation.decreaseTopLevel();
  }
  formatSetOperation(e) {
    this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e.nameKw), E.NEWLINE), this.layout.add(E.INDENT), this.layout = this.formatSubExpression(e.children);
  }
  formatLimitClause(e) {
    this.withComments(e.limitKw, () => {
      this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e.limitKw));
    }), this.layout.indentation.increaseTopLevel(), C(this.cfg) ? this.layout.add(E.SPACE) : this.layout.add(E.NEWLINE, E.INDENT), e.offset ? (this.layout = this.formatSubExpression(e.offset), this.layout.add(E.NO_SPACE, ",", E.SPACE), this.layout = this.formatSubExpression(e.count)) : this.layout = this.formatSubExpression(e.count), this.layout.indentation.decreaseTopLevel();
  }
  formatAllColumnsAsterisk(e) {
    this.layout.add("*", E.SPACE);
  }
  formatLiteral(e) {
    this.layout.add(e.text, E.SPACE);
  }
  formatIdentifier(e) {
    this.layout.add(this.showIdentifier(e), E.SPACE);
  }
  formatParameter(e) {
    this.layout.add(this.params.get(e), E.SPACE);
  }
  formatOperator({ text: e }) {
    this.cfg.denseOperators || this.dialectCfg.alwaysDenseOperators.includes(e) ? this.layout.add(E.NO_SPACE, e) : e === ":" ? this.layout.add(E.NO_SPACE, e, E.SPACE) : this.layout.add(e, E.SPACE);
  }
  formatComma(e) {
    this.inline ? this.layout.add(E.NO_SPACE, ",", E.SPACE) : this.layout.add(E.NO_SPACE, ",", E.NEWLINE, E.INDENT);
  }
  withComments(e, t) {
    this.formatComments(e.leadingComments), t(), this.formatComments(e.trailingComments);
  }
  formatComments(e) {
    e && e.forEach((t) => {
      t.type === i.line_comment ? this.formatLineComment(t) : this.formatBlockComment(t);
    });
  }
  formatLineComment(e) {
    x(e.precedingWhitespace || "") ? this.layout.add(E.NEWLINE, E.INDENT, e.text, E.MANDATORY_NEWLINE, E.INDENT) : this.layout.getLayoutItems().length > 0 ? this.layout.add(E.NO_NEWLINE, E.SPACE, e.text, E.MANDATORY_NEWLINE, E.INDENT) : this.layout.add(e.text, E.MANDATORY_NEWLINE, E.INDENT);
  }
  formatBlockComment(e) {
    e.type === i.block_comment && this.isMultilineBlockComment(e) ? (this.splitBlockComment(e.text).forEach((t) => {
      this.layout.add(E.NEWLINE, E.INDENT, t);
    }), this.layout.add(E.NEWLINE, E.INDENT)) : this.layout.add(e.text, E.SPACE);
  }
  isMultilineBlockComment(e) {
    return x(e.text) || x(e.precedingWhitespace || "");
  }
  isDocComment(e) {
    const t = e.split(/\n/);
    return (
      // first line starts with /* or /**
      /^\/\*\*?$/.test(t[0]) && // intermediate lines start with *
      t.slice(1, t.length - 1).every((r) => /^\s*\*/.test(r)) && // last line ends with */
      /^\s*\*\/$/.test(y(t))
    );
  }
  // Breaks up block comment to multiple lines.
  // For example this doc-comment (dots representing leading whitespace):
  //
  //   ..../**
  //   .....* Some description here
  //   .....* and here too
  //   .....*/
  //
  // gets broken to this array (note the leading single spaces):
  //
  //   [ '/**',
  //     '.* Some description here',
  //     '.* and here too',
  //     '.*/' ]
  //
  // However, a normal comment (non-doc-comment) like this:
  //
  //   ..../*
  //   ....Some description here
  //   ....*/
  //
  // gets broken to this array (no leading spaces):
  //
  //   [ '/*',
  //     'Some description here',
  //     '*/' ]
  //
  splitBlockComment(e) {
    return this.isDocComment(e) ? e.split(/\n/).map((t) => /^\s*\*/.test(t) ? " " + t.replace(/^\s*/, "") : t) : e.split(/\n/).map((t) => t.replace(/^\s*/, ""));
  }
  formatSubExpression(e) {
    return new d({
      cfg: this.cfg,
      dialectCfg: this.dialectCfg,
      params: this.params,
      layout: this.layout,
      inline: this.inline
    }).format(e);
  }
  formatInlineExpression(e) {
    const t = this.params.getPositionalParameterIndex();
    try {
      return new d({
        cfg: this.cfg,
        dialectCfg: this.dialectCfg,
        params: this.params,
        layout: new Rs(this.cfg.expressionWidth),
        inline: !0
      }).format(e);
    } catch (r) {
      if (r instanceof W) {
        this.params.setPositionalParameterIndex(t);
        return;
      } else
        throw r;
    }
  }
  formatKeywordNode(e) {
    switch (e.tokenType) {
      case a.RESERVED_JOIN:
        return this.formatJoin(e);
      case a.AND:
      case a.OR:
      case a.XOR:
        return this.formatLogicalOperator(e);
      default:
        return this.formatKeyword(e);
    }
  }
  formatJoin(e) {
    C(this.cfg) ? (this.layout.indentation.decreaseTopLevel(), this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e), E.SPACE), this.layout.indentation.increaseTopLevel()) : this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e), E.SPACE);
  }
  formatKeyword(e) {
    this.layout.add(this.showKw(e), E.SPACE);
  }
  formatLogicalOperator(e) {
    this.cfg.logicalOperatorNewline === "before" ? C(this.cfg) ? (this.layout.indentation.decreaseTopLevel(), this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e), E.SPACE), this.layout.indentation.increaseTopLevel()) : this.layout.add(E.NEWLINE, E.INDENT, this.showKw(e), E.SPACE) : this.layout.add(this.showKw(e), E.NEWLINE, E.INDENT);
  }
  formatDataType(e) {
    this.layout.add(this.showDataType(e), E.SPACE);
  }
  showKw(e) {
    return Q(e.tokenType) ? j(this.showNonTabularKw(e), this.cfg.indentStyle) : this.showNonTabularKw(e);
  }
  // Like showKw(), but skips tabular formatting
  showNonTabularKw(e) {
    switch (this.cfg.keywordCase) {
      case "preserve":
        return P(e.raw);
      case "upper":
        return e.text;
      case "lower":
        return e.text.toLowerCase();
    }
  }
  showFunctionKw(e) {
    return Q(e.tokenType) ? j(this.showNonTabularFunctionKw(e), this.cfg.indentStyle) : this.showNonTabularFunctionKw(e);
  }
  // Like showFunctionKw(), but skips tabular formatting
  showNonTabularFunctionKw(e) {
    switch (this.cfg.functionCase) {
      case "preserve":
        return P(e.raw);
      case "upper":
        return e.text;
      case "lower":
        return e.text.toLowerCase();
    }
  }
  showIdentifier(e) {
    if (e.quoted)
      return e.text;
    switch (this.cfg.identifierCase) {
      case "preserve":
        return e.text;
      case "upper":
        return e.text.toUpperCase();
      case "lower":
        return e.text.toLowerCase();
    }
  }
  showDataType(e) {
    switch (this.cfg.dataTypeCase) {
      case "preserve":
        return P(e.raw);
      case "upper":
        return e.text;
      case "lower":
        return e.text.toLowerCase();
    }
  }
}
class As {
  constructor(e, t) {
    this.dialect = e, this.cfg = t, this.params = new Xe(this.cfg.params);
  }
  /**
   * Formats an SQL query.
   * @param {string} query - The SQL query string to be formatted
   * @return {string} The formatter query
   */
  format(e) {
    const t = this.parse(e);
    return this.formatAst(t).trimEnd();
  }
  parse(e) {
    return ns(this.dialect.tokenizer).parse(e, this.cfg.paramTypes || {});
  }
  formatAst(e) {
    return e.map((t) => this.formatStatement(t)).join(`
`.repeat(this.cfg.linesBetweenQueries + 1));
  }
  formatStatement(e) {
    const t = new d({
      cfg: this.cfg,
      dialectCfg: this.dialect.formatOptions,
      params: this.params,
      layout: new ie(new oe(ke(this.cfg)))
    }).format(e.children);
    return e.hasSemicolon && (this.cfg.newlineBeforeSemicolon ? t.add(E.NEWLINE, ";") : t.add(E.NO_NEWLINE, ";")), t.toString();
  }
}
class g extends Error {
}
function cs(s) {
  const e = [
    "multilineLists",
    "newlineBeforeOpenParen",
    "newlineBeforeCloseParen",
    "aliasAs",
    "commaPosition",
    "tabulateAlias"
  ];
  for (const t of e)
    if (t in s)
      throw new g(`${t} config is no more supported.`);
  if (s.expressionWidth <= 0)
    throw new g(`expressionWidth config must be positive number. Received ${s.expressionWidth} instead.`);
  if (s.params && !Ss(s.params) && console.warn('WARNING: All "params" option values should be strings.'), s.paramTypes && !_s(s.paramTypes))
    throw new g("Empty regex given in custom paramTypes. That would result in matching infinite amount of parameters.");
  return s;
}
function Ss(s) {
  return (s instanceof Array ? s : Object.values(s)).every((t) => typeof t == "string");
}
function _s(s) {
  return s.custom && Array.isArray(s.custom) ? s.custom.every((e) => e.regex !== "") : !0;
}
var Ts = function(s, e) {
  var t = {};
  for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && e.indexOf(r) < 0 && (t[r] = s[r]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, r = Object.getOwnPropertySymbols(s); n < r.length; n++)
      e.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(s, r[n]) && (t[r[n]] = s[r[n]]);
  return t;
};
const ps = {
  tabWidth: 2,
  useTabs: !1,
  keywordCase: "preserve",
  identifierCase: "preserve",
  dataTypeCase: "preserve",
  functionCase: "preserve",
  indentStyle: "standard",
  logicalOperatorNewline: "before",
  expressionWidth: 50,
  linesBetweenQueries: 1,
  denseOperators: !1,
  newlineBeforeSemicolon: !1
}, us = (s, e) => {
  var { dialect: t } = e, r = Ts(e, ["dialect"]);
  if (typeof s != "string")
    throw new Error("Invalid query argument. Expected string, instead got " + typeof s);
  const n = cs(Object.assign(Object.assign({}, ps), r));
  return new As(Ge(t), n).format(s);
};
export {
  us as f,
  ms as m
};
