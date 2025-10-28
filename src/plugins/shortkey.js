/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import Vue3Shortkey from 'vue3-shortkey'

export default {
  install: (app) => app.use(Vue3Shortkey, { prevent: ['input', 'textarea'] }),
}
