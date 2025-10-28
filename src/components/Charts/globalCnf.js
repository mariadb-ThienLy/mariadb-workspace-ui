/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import {
  BarController,
  BarElement,
  LineController,
  LineElement,
  Filler,
  PointElement,
  ScatterController,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Title,
  SubTitle,
  Legend,
  Chart,
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import trendLinePlugin from 'chartjs-plugin-trendline'

Chart.defaults.font.family = "'azo-sans-web', adrianna, serif"
Chart.defaults.color = '#424F62'
Chart.defaults.font.size = 10
Chart.defaults.scale.grid.lineWidth = 0.6
Chart.defaults.scale.grid.color = 'rgba(234, 234, 234, 1)'
Chart.defaults.scale.grid.drawTicks = false
Chart.defaults.scale.border.display = false

/**
 * @param elements {Chart.Element[]} the tooltip elements
 * @param eventPosition {Point} the position of the event in canvas coordinates
 * @returns {TooltipPosition} the tooltip position
 */
Tooltip.positioners.mxsCursor = (elements, eventPosition) => ({
  x: eventPosition.x,
  y: eventPosition.y,
})

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  Filler,
  PointElement,
  ScatterController,
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Title,
  SubTitle,
  Legend,
  trendLinePlugin
)
