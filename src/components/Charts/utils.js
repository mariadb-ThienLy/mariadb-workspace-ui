/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { lodash } from '@/utils/helpers'

export function mergeBaseOpts(opts) {
  return lodash.merge(
    {
      responsive: true,
      maintainAspectRatio: false,
      clip: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          mode: 'index',
          enabled: false,
          intersect: false,
          position: 'mxsCursor',
        },
        /**
         * chartjs-plugin-annotation is registered globally so annotation key must be defined,
         * otherwise chartjs will have "Maximum call stack size exceeded" error
         */
        annotation: {},
      },
    },
    opts
  )
}

export function vertCrossHair(chart) {
  if (chart.tooltip && chart.tooltip._active && chart.tooltip._active.length) {
    const activePoint = chart.tooltip._active[0],
      ctx = chart.ctx,
      y_axis = chart.scales.y,
      x = activePoint.element.x,
      topY = y_axis.top,
      bottomY = y_axis.bottom
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x, topY)
    ctx.lineTo(x, bottomY)
    ctx.lineWidth = 2
    ctx.strokeStyle = '#e5e1e5'
    ctx.stroke()
    ctx.restore()
  }
}
