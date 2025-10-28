/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { lodash } from '@/utils/helpers'
import { t as typy } from 'typy'

/**
 * Create a span tag with highlighted text
 * @param {String} txt - text to have highlighted text
 * @param {String} keyword - highlight txt
 * @returns {String} Return highlighted tag
 */
function highlight(binding) {
  const { keyword, txt } = binding.value
  let res = `${txt}`
  if (keyword !== '') {
    const regex = new RegExp('(' + lodash.escapeRegExp(keyword) + ')', 'gi')
    res = res.replace(regex, '<span class="bg-primary text-white">$&</span>')
  }
  return res
}
function updateTxt(el, binding) {
  if (typy(binding, 'value.keyword').isDefined && typy(binding, 'value.txt').isDefined)
    el.innerHTML = highlight(binding)
}
/**
 * Usage example: Place this directive v-highlight-txt="{ keyword, txt}" on the element
 * that renders text.
 */
export default {
  install: (app) => {
    app.directive('highlight-txt', {
      mounted(...args) {
        updateTxt(...args)
      },
      updated(...args) {
        updateTxt(...args)
      },
      unmounted(...args) {
        updateTxt(...args)
      },
    })
  },
}
