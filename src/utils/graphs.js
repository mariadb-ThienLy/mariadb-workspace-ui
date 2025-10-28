/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { t as typy } from 'typy'

/**
 * @param {array} param.nodes
 * @param {object} param.dim - graph dimension
 * @param {function} [param.getNodeSize] - if it is undefined, it uses the `size` attribute
 * @returns {object} graph extent
 */
export function getGraphExtent({ nodes, dim, getNodeSize }) {
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity

  nodes.forEach((n) => {
    const { width, height } = typy(getNodeSize).isFunction ? getNodeSize(n) : n.size
    const left = n.x - width / 2
    const right = n.x + width / 2
    const top = n.y - height / 2
    const bottom = n.y + height / 2

    if (left < minX) minX = left
    if (right > maxX) maxX = right
    if (top < minY) minY = top
    if (bottom > maxY) maxY = bottom
  })

  return {
    minX: minX === Infinity ? 0 : minX,
    minY: minY === Infinity ? 0 : minY,
    maxX: maxX === -Infinity ? dim.width : maxX,
    maxY: maxY === -Infinity ? dim.height : maxY,
  }
}

function createCanvasFrame(canvas) {
  // create new canvas with white background
  const desCanvas = document.createElement('canvas')
  desCanvas.width = canvas.width
  desCanvas.height = canvas.height
  const destCtx = desCanvas.getContext('2d')
  destCtx.fillStyle = '#FFFFFF'
  destCtx.fillRect(0, 0, desCanvas.width, desCanvas.height)
  //draw the original canvas onto the destination canvas
  destCtx.drawImage(canvas, 0, 0)
  destCtx.scale(2, 2)
  return desCanvas
}

/**
 * @param {object} param
 * @param {HTMLElement} param.canvas - canvas element
 * @param {string} param.fileName
 */
export function exportToJpeg({ canvas, fileName }) {
  const desCanvas = createCanvasFrame(canvas)
  const imageUrl = desCanvas.toDataURL('image/jpeg', 1.0)
  const a = document.createElement('a')
  a.href = imageUrl
  a.download = `${fileName}.jpeg`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function dynamicColors(dataIndex) {
  const palette = [
    'rgba(171,199,74,1)',
    'rgba(245,157,52,1)',
    'rgba(47,153,163,1)',
    'rgba(150,221,207,1)',
    'rgba(14,155,192,1)',
    'rgba(125,208,18,1)',
    'rgba(14,100,136,1)',
    'rgba(66,79,98,1)',
    'rgba(163,186,192,1)',
    'rgba(0,53,69,1)',
    'rgba(45,156,219,1)',
    'rgba(235,87,87,1)',
    'rgba(48,48,51,1)',
    'rgba(134,205,223,1)',
    'rgba(76,76,79,1)',
  ]
  return palette[dataIndex % palette.length]
}
