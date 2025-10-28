/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */

import { lodash } from '@/utils/helpers'

export default class GraphConfig {
  constructor(config) {
    this.config = lodash.cloneDeep(config)
  }
  updateConfig({ path, value }) {
    lodash.set(this.config, path, value)
  }
}
