/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { isCancelled, getErrorsArr } from '@/utils/errResponse'
import logger from '@/utils/logger'
import { v1 } from 'uuid'
import diff from 'deep-diff'
import lodashEs from 'lodash-es'
import update from 'immutability-helper'
import { t as typy } from 'typy'

export const uuidv1 = v1

export const deepDiff = diff

export const lodash = lodashEs

export const immutableUpdate = update

export function delay(t, v) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, v), t)
  })
}

/**
 * This function replaces a char in payload.str at payload.index with payload.newChar
 * @param {String} payload.str - string to be processed
 * @param {Number} payload.index - index of char that will be replaced
 * @param {String} payload.newChar - new char
 * @returns new string
 */
export function strReplaceAt({ str, index, newChar }) {
  if (index > str.length - 1) return str
  return str.substr(0, index) + newChar + str.substr(index + 1)
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Case insensitive check if substring is included in source string
 * @param {String} str source string
 * @param {String} subStr sub string to be searched
 * @return {Boolean} Return Boolean
 */
export function ciStrIncludes(str, subStr) {
  return str.toLowerCase().includes(subStr.toLowerCase())
}

/**
 * An async await wrapper
 * @param {Promise} promise
 * @returns { Promise }
 */
export async function tryAsync(promise) {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (!isCancelled(err)) logger.error(getErrorsArr(err).toString())
      return [err, undefined]
    })
}

/**
 * Each object must have an id field to calculate the diff
 * @param {array} payload.initialData - initial data
 * @param {array} payload.data - new data
 * @returns {map} - returns  Map { unchanged: [{}], added: [{}], updated:[{}], removed:[{}] }
 */
export function arrOfObjsDiff({ initialData, data }) {
  // stored ids of two arrays to get removed objects
  const initialIds = []
  const newIds = []
  const initialDataMap = new Map()
  initialData.forEach((o) => {
    initialIds.push(o.id)
    initialDataMap.set(o.id, o)
  })

  const resultMap = new Map()
  resultMap.set('unchanged', [])
  resultMap.set('added', [])
  resultMap.set('removed', [])
  resultMap.set('updated', [])

  data.forEach((obj2) => {
    newIds.push(obj2.id)
    const obj1 = initialDataMap.get(obj2.id)
    if (!obj1) resultMap.set('added', [...resultMap.get('added'), obj2])
    else if (lodash.isEqual(obj1, obj2))
      resultMap.set('unchanged', [...resultMap.get('unchanged'), obj2])
    else {
      const diff = deepDiff(obj1, obj2)
      const objDiff = { oriObj: obj1, newObj: obj2, diff }
      resultMap.set('updated', [...resultMap.get('updated'), objDiff])
    }
  })
  const removedIds = initialIds.filter((id) => !newIds.includes(id))
  const removed = removedIds.map((id) => initialDataMap.get(id))
  resultMap.set('removed', removed)
  return resultMap
}

export function getAppEle() {
  return document.getElementById('mariadb-workspace')
}

/**
 * @param {Object} param
 * @param {Function|Object} prop
 * @param {Object} item
 * @returns {Object}
 */
export function resolveDynamicProp({ prop, item }) {
  if (typy(prop).isFunction) return prop(item)
  return prop
}
