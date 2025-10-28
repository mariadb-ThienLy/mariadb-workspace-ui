/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { getAppEle } from '@/utils/helpers'

/**
 * Function to create chartjs tooltip element
 * @param {Object} payload.context - chartjs tooltip context
 * @param {String} payload.tooltipId - tooltipId. Use to remove the tooltip when chart instance is destroyed
 * @param {String} [payload.className] - Custom class name for tooltip element
 * @param {Boolean} payload.alignTooltipToLeft - To either align tooltip to the right or left.
 * If not provided, it aligns to center
 */
function createTooltipEle({ context, tooltipId, className, alignTooltipToLeft }) {
  let tooltipEl = document.getElementById(tooltipId)
  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = tooltipId
    tooltipEl.className = [`chartjs-tooltip shadow-drop ${className}`]
    tooltipEl.innerHTML = '<table></table>'
    getAppEle().appendChild(tooltipEl)
  }
  const tooltip = context.tooltip
  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0
    tooltipEl.style.position = 'absolute'
    return
  }

  // Set caret Position
  tooltipEl.classList.remove(
    'above',
    'below',
    'no-transform',
    'chartjs-tooltip--transform-left',
    'chartjs-tooltip--transform-right',
    'chartjs-tooltip--transform-center'
  )
  if (tooltip.yAlign) tooltipEl.classList.add(tooltip.yAlign)
  else tooltipEl.classList.add('no-transform')

  if (typeof alignTooltipToLeft === 'boolean') {
    if (alignTooltipToLeft) tooltipEl.classList.add('chartjs-tooltip--transform-left')
    else tooltipEl.classList.add('chartjs-tooltip--transform-right')
  } else tooltipEl.classList.add('chartjs-tooltip--transform-center')

  // Display, position, and set styles for font
  const position = context.chart.canvas.getBoundingClientRect()
  tooltipEl.style.opacity = 1
  tooltipEl.style.position = 'absolute'
  tooltipEl.style.left = `${position.left + tooltip.caretX}px`
  tooltipEl.style.top = `${position.top + tooltip.caretY + 10}px`
  tooltip.font = {
    family: "'azo-sans-web', adrianna, serif",
    size: 10,
  }
  return tooltipEl
}

/**
 * Rendering object tooltip for a single dataset by using provided dataPointObj
 * @param {Object} payload.context - chartjs tooltip context
 * @param {String} payload.tooltipId - tooltipId. Use to remove the tooltip when chart instance is destroyed
 * @param {Object} payload.dataPoint - data point object
 * @param {String} payload.axisKeyMap.x - xAxisKey
 * @param {String} payload.axisKeyMap.y - yAxisKey
 */
export function objectTooltip({ context, tooltipId, dataPoint, axisKeyMap, alignTooltipToLeft }) {
  // Tooltip Element
  const tooltipEl = createTooltipEle({
    context,
    tooltipId,
    className: 'query-editor-chartjs-tooltip',
    alignTooltipToLeft,
  })
  // Set Text
  if (tooltipEl && context.tooltip.body) {
    let innerHtml = '<tbody>'
    Object.keys(dataPoint).forEach((key) => {
      //bold x,y axes value
      const boldClass = `${key === axisKeyMap.x || key === axisKeyMap.y ? 'font-weight-black' : ''}`
      innerHtml += `
                <tr>
                    <td class="text-tbl-header ${boldClass}">
                     ${key}
                     </td>
                    <td class="text-foreground ${boldClass}">
                        ${dataPoint[key]}
                    </td>
                </tr>`
    })
    innerHtml += '</tbody>'
    const tableRoot = tooltipEl.querySelector('table')
    tableRoot.innerHTML = innerHtml
  }
}
