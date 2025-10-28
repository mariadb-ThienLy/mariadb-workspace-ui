/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { t as typy } from 'typy'

/**
 * @param {Object} params
 * @param {Array} params.groupItems - Current group of items to sort
 * @param {Array} params.result - Accumulated result array
 * @param {Object} params.parentMap - Map of parentId to children arrays
 * @param {Function} params.compareFn - Comparison function for sorting nodes
 * @param {Set} params.visited - Set of visited node IDs to prevent infinite loops
 * @returns {Array} Hierarchically sorted array of nodes
 */
function hierarchySortIterative({ groupItems, parentMap, compareFn }) {
  const result = []
  const stack = []
  const visited = new Set()

  // Find root nodes (nodes with null/undefined parentId or parentId not in the dataset)
  const allParentIds = new Set(Object.keys(parentMap))
  const rootItems = groupItems.filter(
    (item) => !item.parentId || !allParentIds.has(item.parentId.toString())
  )

  if (!rootItems.length) {
    // Fallback: if no clear root nodes, use the first group
    const firstGroupKey = Object.keys(parentMap)[0]
    if (firstGroupKey) stack.push(...typy(parentMap[firstGroupKey]).safeArray.sort(compareFn))
  }
  // Start with sorted root nodes
  else stack.push(...rootItems.sort(compareFn))

  // Iterative traversal
  while (stack.length > 0) {
    const currentNode = stack.shift()
    const nodeId = typy(currentNode, 'id').safeString

    // Prevent infinite loops in malformed data
    if (visited.has(nodeId)) continue
    visited.add(nodeId)

    result.push(currentNode)

    // Get children and add them to the front of the stack (to maintain order)
    const children = typy(parentMap[nodeId]).safeArray
    if (children.length > 0) {
      const sortedChildren = children.sort(compareFn)
      stack.unshift(...sortedChildren)
    }
  }

  return result
}

/**
 * Sorts items hierarchically while preserving the tree structure.
 * @param {Object} params
 * @param {Array} params.arr - Array of tree nodes with parentId and id properties
 * @param {Function} params.compareFn - Comparison function for sorting nodes
 * @returns {Array} Hierarchically sorted array of nodes
 */
function hierarchySort({ arr, compareFn }) {
  if (!arr.length) return []
  const items = arr
  const parentMap = {}
  for (const item of items) {
    const parentId = item.parentId
    if (!parentMap[parentId]) {
      parentMap[parentId] = []
    }
    parentMap[parentId].push(item)
  }

  return hierarchySortIterative({
    groupItems: items,
    parentMap,
    compareFn,
  })
}

/**
 * Sorts hierarchical data by numeric properties with parent-child value aggregation.
 *
 * Parent nodes are positioned based on aggregated values from their children:
 * - For ascending sort (isDesc=false): Uses MINIMUM child value for parent positioning
 * - For descending sort (isDesc=true): Uses MAXIMUM child value for parent positioning
 * - Standalone nodes (no children): Use their own property value
 *
 * @param {Object} params
 * @param {Array} params.arr - Array of nodes with id, parentId, and numeric properties
 * @param {string} params.property - Name of the numeric property to sort by
 * @param {boolean} [params.isDesc=false] - Sort direction: true for descending, false for ascending
 * @returns {Array} Hierarchically sorted array preserving parent-child relationships
 */
function aggHierarchySort({ arr, property, isDesc = false }) {
  const treeMap = {}
  for (const node of arr) {
    const parentId = node.parentId
    if (!treeMap[parentId]) {
      treeMap[parentId] = []
    }
    treeMap[parentId].push(node)
  }

  // Create aggregation lookup
  const aggregationMap = new Map()
  for (const node of arr) {
    const children = typy(treeMap[node.id]).safeArray
    if (children.length > 0) {
      const childPropertyValues = children
        .map((child) => {
          const rawValue = child[property]
          return isNaN(Number(rawValue)) ? NaN : Number(rawValue)
        })
        .filter((value) => !isNaN(value))

      if (childPropertyValues.length > 0) {
        const aggregatedValue = isDesc
          ? Math.max(...childPropertyValues)
          : Math.min(...childPropertyValues)
        aggregationMap.set(node.id, aggregatedValue)
      }
    }
  }

  const compareFn = (nodeA, nodeB) => {
    // Use aggregated value for parents, original value for leaf nodes
    const rawValueA = aggregationMap.has(nodeA.id) ? aggregationMap.get(nodeA.id) : nodeA[property]
    const rawValueB = aggregationMap.has(nodeB.id) ? aggregationMap.get(nodeB.id) : nodeB[property]

    // Convert to number and treat undefined/NaN values as 0
    const valueA = isNaN(Number(rawValueA)) ? 0 : Number(rawValueA)
    const valueB = isNaN(Number(rawValueB)) ? 0 : Number(rawValueB)

    return isDesc ? valueB - valueA : valueA - valueB
  }

  return hierarchySort({ arr, compareFn })
}

export default { hierarchy: hierarchySort, aggHierarchy: aggHierarchySort }
