/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { h } from 'vue'

const req = import.meta.glob('./*.vue', { eager: true })

const svgIcons = Object.keys(req).reduce((obj, fileName) => {
  obj[
    fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
  ] = req[fileName].default
  return obj
}, {})

export default {
  component: (props) => h(svgIcons[props.icon]),
}
