/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { formatDialect, mariadb } from 'sql-formatter'
import { capitalizeFirstLetter } from '@/utils/helpers'

/**
 * Format MariaDB SQL dialect.
 * The use of changing DELIMITER is not supported.
 * @param {string} v- SQL
 * @returns {string}
 */
export function formatSQL(v, opts = {}) {
  return formatDialect(v, { dialect: mariadb, tabWidth: 2, keywordCase: 'upper', ...opts })
}

const IDENTIFIED_PATTERN = /IDENTIFIED\s*/gim
const PWD_PATTERN = /['"][^'"]*['"]/

const IDENTIFIED_BY_PATTERN = new RegExp(
  '(\\b' + IDENTIFIED_PATTERN.source + 'BY(?:\\s*PASSWORD)?\\s*)' + PWD_PATTERN.source,
  'gim'
)
const IDENTIFIED_PLUGIN_PATTERN = new RegExp(
  '(\\b' +
    IDENTIFIED_PATTERN.source +
    '(VIA|WITH)\\s*\\w+\\s*(USING|AS)(?:\\s*PASSWORD)?\\s*)' +
    PWD_PATTERN.source,
  'gim'
)
const PLUGIN_PWD_PATTERN = new RegExp(`PASSWORD\\s*\\(${PWD_PATTERN.source}`, 'gim')

/**
 * @param {string} query - SQL
 * @returns {boolean} true if query should be masked
 */
export function shouldMaskQuery(query) {
  return Boolean(
    query.match(IDENTIFIED_PATTERN) ||
      query.match(PLUGIN_PWD_PATTERN) ||
      query.match(IDENTIFIED_PLUGIN_PATTERN)
  )
}

/**
 * @param {string} query - SQL
 * @returns {string} SQL with password masked.
 */
export function maskQueryPwd(query) {
  if (shouldMaskQuery(query))
    return query
      .replace(IDENTIFIED_BY_PATTERN, "$1'***'")
      .replace(PLUGIN_PWD_PATTERN, "PASSWORD ('***'")
      .replace(IDENTIFIED_PLUGIN_PATTERN, `$1'***'`)
  return query
}

/**
 * @param {object} result - error query result
 * @returns {string}
 */
export function stringifyErrResult(result) {
  return Object.keys(result)
    .map((key) => `${capitalizeFirstLetter(key)}: ${result[key]}.`)
    .join(' ')
}
