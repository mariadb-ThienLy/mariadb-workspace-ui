/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import VuexORM from '@vuex-orm/core'
import database from '@/store/orm/database'
import { ORM_NAMESPACE } from '@/constants'

export default VuexORM.install(database, { namespace: ORM_NAMESPACE })
