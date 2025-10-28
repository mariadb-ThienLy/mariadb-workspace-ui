/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import ax from 'axios'
import { handleNullStatusCode, defErrStatusHandler } from '@/utils/errResponse'
import store from '@/store'
import { t as typy } from 'typy'

let controller = new AbortController()
const abortRequests = () => {
  controller.abort()
  // refresh the controller
  controller = new AbortController()
}

function getBaseHttp() {
  return ax.create({
    baseURL: import.meta.env.PROD ? '/' : '/api',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    },
  })
}

// axios instance for `/auth` endpoint
const authHttp = getBaseHttp()
authHttp.interceptors.request.use(
  (config) => ({ ...config }),
  (error) => Promise.reject(error)
)

// axios instance for all endpoints except `/sql`
const http = getBaseHttp()

http.interceptors.request.use(
  (config) => ({ ...config, signal: controller.signal }),
  (error) => Promise.reject(error)
)
http.interceptors.response.use(
  (response) => {
    store.commit('SET_IS_SESSION_ALIVE', true)
    return response
  },
  async (error) => {
    const { response: { status = null } = {}, config } = error || {}
    if (typy(config, 'customErrHandlers').isFunction) config.customErrHandlers({ store, error })
    else {
      switch (status) {
        case 401:
          abortRequests()
          store.commit('SET_IS_SESSION_ALIVE', false)
          break
        case null:
          handleNullStatusCode({ store, error })
          break
        default:
          if (!typy(config, 'metadata.ignoreDefErrHandler').safeBoolean)
            defErrStatusHandler({ store, error })
      }
    }
    return Promise.reject(error)
  }
)

export { authHttp, http, abortRequests, getBaseHttp }
