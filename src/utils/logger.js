/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
/* eslint-disable no-console */
import * as stackParser from 'stacktrace-parser'

const getCallerInfo = () => {
  const {
    file = 'n/a',
    lineNumber = 'n/a',
    methodName = 'n/a',
  } = stackParser.parse(new Error().stack).at(-1)
  return `[${file}:${lineNumber}:${methodName}]`
}

export default {
  info: (...args) =>
    console.info('%c INFO ', 'color: white; background-color: green;', getCallerInfo(), ...args),
  warn: (...args) =>
    console.warn(
      '%c WARNING ',
      'color: black; background-color: yellow;',
      getCallerInfo(),
      ...args
    ),
  error: (...args) =>
    console.error('%c ERROR ', 'color: white; background-color: red;', getCallerInfo(), ...args),
}
