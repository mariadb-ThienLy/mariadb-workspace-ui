/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { t as typy } from 'typy'
import { format, intervalToDuration, formatDuration } from 'date-fns'
/**
 * Handle format date value
 * @param {string|number} param.value - string date to be formatted or timestamp (milliseconds)
 * @param {string} param.formatType - format type (default is DATE_RFC2822: E, dd MMM yyyy HH:mm:ss)
 * @return {String} new date format
 */
export function dateFormat({ value, formatType = 'E, dd MMM yyyy HH:mm:ss' }) {
  return format(new Date(value), formatType)
}

/**
 * @returns {number}
 */
export function getCurrentTimeStamp() {
  return new Date().valueOf()
}

const padTimeNumber = (num) => (typy(num).isUndefined ? '00' : num.toString().padStart(2, '0'))
/**
 * @param {Number} sec - seconds
 * @returns Human-readable time, e.g. 1295222 -> 14 Days 23:47:02
 */
export function uptimeHumanize(sec) {
  const duration = intervalToDuration({ start: 0, end: sec * 1000 })
  const formattedDuration = formatDuration(duration, {
    format: ['years', 'months', 'days'].filter((unit) => duration[unit] !== 0),
  })
  const formattedTime = [duration.hours, duration.minutes, duration.seconds]
    .map(padTimeNumber)
    .join(':')

  return `${formattedDuration} ${formattedTime}`
}

/**
 * @param {Number} seconds - seconds
 * @returns Human-readable time, e.g. 3661 -> 1h 1m 1s
 */
export function humanizeSecond(sec) {
  if (!sec || sec < 0) return '0s'

  const { years, days, hours, minutes, seconds } = intervalToDuration({
    start: 0,
    end: sec * 1000,
  })

  const parts = [
    { u: 'y', v: years },
    { u: 'd', v: days },
    { u: 'h', v: hours },
    { u: 'm', v: minutes },
    { u: 's', v: seconds },
  ]
    .filter(({ v }) => v > 0)
    .map(({ u, v }) => `${v}${u}`)

  return parts.length > 0 ? parts.join(' ') : '0s'
}
