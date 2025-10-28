/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { SNACKBAR_TYPE_MAP, APP_NAME } from '@/constants'
import { lodash, delay } from '@/utils/helpers'
import logger from '@/utils/logger'

/**
 * @param {Object|String} error - Error object or string that returns from try catch
 * @return {Array} An array of error string
 */
export function getErrorsArr(error) {
  if (typeof error === 'string') return [error]
  else {
    const errors = lodash.get(error, 'response.data.errors') || []
    // cancel-cmd operation has error messages inside meta object
    const metaErrs = lodash.get(error, 'response.data.meta.errors') || []
    if (errors.length) return errors.map((ele) => `${ele.detail}`)
    if (metaErrs.length) return metaErrs.map((ele) => `${ele.detail}`)
    return [error]
  }
}

const CANCEL_MESSAGE = 'canceled'
/**
 * Default handler for error response status codes
 */
export async function defErrStatusHandler({ store, error }) {
  store.commit('SET_SNACK_BAR_MESSAGE', {
    text: getErrorsArr(error),
    type: SNACKBAR_TYPE_MAP.ERROR,
  })
  /* When request is dispatched in a modal, an overlay_type loading will be set,
   * Turn it off before returning error
   */
  if (store.state.overlay_type !== null)
    await delay(600).then(() => store.commit('SET_OVERLAY_TYPE', null))
}

export function isCancelled(error) {
  return error.toString().includes(CANCEL_MESSAGE)
}

export function handleNullStatusCode({ store, error }) {
  if (isCancelled(error))
    // request is cancelled by user, so no response is received
    logger.info(error.toString())
  else
    store.commit('SET_SNACK_BAR_MESSAGE', {
      text: [`Lost connection to ${APP_NAME}, please check if ${APP_NAME} is running`],
      type: SNACKBAR_TYPE_MAP.ERROR,
    })
}
