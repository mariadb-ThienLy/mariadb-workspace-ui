/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */

/**
 * Prevents non-integer input by cancelling the event if the pressed
 * key does not represent an integer.
 * @param {KeyboardEvent} e - The keyboard event object.
 */
export function preventNonInteger(e) {
  if (!e.key.match(/^[-]?\d*$/g)) e.preventDefault()
}

/**
 * This allows user to enter only number
 * @param {Event} e - input evt
 */
export function preventNonNumericalVal(e) {
  if (!e.key.match(/^\d*$/g)) e.preventDefault()
}

/**
 * Vue.nextTick is not enough for rendering large DOM.
 * This function uses double RAF technique to wait for a browser repaint
 * @param {Function} callback callback function
 */
export function doubleRAF(callback) {
  requestAnimationFrame(() => {
    requestAnimationFrame(callback)
  })
}

/**
 * @private
 * @param {String} text
 */
function fallbackCopyTextToClipboard(text) {
  const txtArea = document.createElement('textarea')
  txtArea.value = text
  txtArea.style = { ...txtArea.style, top: 0, left: 0, position: 'fixed' }
  document.body.appendChild(txtArea)
  txtArea.focus()
  txtArea.select()
  document.execCommand('copy')
  document.body.removeChild(txtArea)
}

/**
 * @param {String} text
 */
export function copyTextToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
  } else fallbackCopyTextToClipboard(text)
}

export function scrollToFirstErrMsgInput() {
  const invalidEles = document.getElementsByClassName('v-messages__message')
  return invalidEles[0].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start',
  })
}
