/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import VuexPersistence from 'vuex-persist'
import localForage from 'localforage'
import { ORM_NAMESPACE, PERSISTENT_ORM_ENTITY_MAP } from '@/constants'
import { lodash } from '@/utils/helpers'

export default new VuexPersistence({
  key: 'mxs-workspace',
  storage: localForage,
  asyncStorage: true,
  reducer: (state) =>
    lodash.cloneDeep({
      [ORM_NAMESPACE]: lodash.pick(state[ORM_NAMESPACE], [
        ...Object.values(PERSISTENT_ORM_ENTITY_MAP),
        '$name', // not an entity, but it's a reserved key for vuex-orm
      ]),
      prefAndStorage: state.prefAndStorage,
    }),
}).plugin
