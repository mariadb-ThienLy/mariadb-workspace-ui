/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { MXS_OBJ_TYPE_MAP, LOADING_TIME } from '@/constants'
import { OVERLAY_TRANSPARENT_LOADING } from '@/constants/overlayTypes'
import { t as typy } from 'typy'
import * as helpers from '@/utils/helpers'
import logger from '@/utils/logger'

const { delay, getAppEle, uuidv1 } = helpers

export function useTypy() {
  return typy
}

export function useLogger() {
  return logger
}

export function useHelpers() {
  return helpers
}

/**
 *
 * @param {string} param.key - default key name
 * @param {boolean} param.isDesc - default isDesc state
 * @returns
 */
export function useSortBy({ key = '', isDesc = false }) {
  const sortBy = ref({ key, isDesc })
  function toggleSortBy(key) {
    if (sortBy.value.isDesc)
      sortBy.value = { key: '', isDesc: false } // non-sort
    else if (sortBy.value.key === key) sortBy.value = { key, isDesc: !sortBy.value.isDesc }
    else sortBy.value = { key, isDesc: false }
  }
  function compareFn(a, b) {
    const aStr = String(a[sortBy.value.key])
    const bStr = String(b[sortBy.value.key])
    return sortBy.value.isDesc ? bStr.localeCompare(aStr) : aStr.localeCompare(bStr)
  }
  return { sortBy, toggleSortBy, compareFn }
}

export function useLoading() {
  const isMounting = ref(true)
  const store = useStore()
  const overlay_type = computed(() => store.state.overlay_type)
  const loading = computed(() =>
    isMounting.value || overlay_type.value === OVERLAY_TRANSPARENT_LOADING ? 'primary' : false
  )
  onMounted(async () => await delay(LOADING_TIME).then(() => (isMounting.value = false)))
  return loading
}

/**
 * To use this composable, a mousedown event needs to be listened on drag target
 * element and do the followings assign
 * assign true to `isDragging` and event.target to `dragTarget`
 * @returns {DragAndDropData} Reactive object: { isDragging, dragTarget }
 */
export function useDragAndDrop(emitter) {
  const DRAG_TARGET_ID = 'target-drag'
  const isDragging = ref(false)
  const dragTarget = ref(null)

  watch(isDragging, (v) => {
    if (v) addDragEvts()
    else removeDragEvts()
  })
  onBeforeUnmount(() => removeDragEvts())

  /**
   * This copies inherit styles from srcNode to dstNode
   * @param {Object} payload.srcNode - html node to be copied
   * @param {Object} payload.dstNode - target html node to pasted
   */
  function copyNodeStyle({ srcNode, dstNode }) {
    const computedStyle = window.getComputedStyle(srcNode)
    Array.from(computedStyle).forEach((key) =>
      dstNode.style.setProperty(
        key,
        computedStyle.getPropertyValue(key),
        computedStyle.getPropertyPriority(key)
      )
    )
  }

  function removeTargetDragEle() {
    const elem = document.getElementById(DRAG_TARGET_ID)
    if (elem) elem.parentNode.removeChild(elem)
  }

  function addDragTargetEle(e) {
    const cloneNode = dragTarget.value.cloneNode(true)
    cloneNode.setAttribute('id', DRAG_TARGET_ID)
    cloneNode.textContent = dragTarget.value.textContent
    copyNodeStyle({ srcNode: dragTarget.value, dstNode: cloneNode })
    cloneNode.style.position = 'absolute'
    cloneNode.style.top = e.clientY + 'px'
    cloneNode.style.left = e.clientX + 'px'
    cloneNode.style.zIndex = 9999
    getAppEle().appendChild(cloneNode)
  }

  function addDragEvts() {
    document.addEventListener('mousemove', onDragging)
    document.addEventListener('mouseup', onDragEnd)
  }

  function removeDragEvts() {
    document.removeEventListener('mousemove', onDragging)
    document.removeEventListener('mouseup', onDragEnd)
  }

  function onDragging(e) {
    e.preventDefault()
    if (isDragging.value) {
      removeTargetDragEle()
      addDragTargetEle(e)
      emitter('on-dragging', e)
    }
  }

  function onDragEnd(e) {
    e.preventDefault()
    if (isDragging.value) {
      removeTargetDragEle()
      emitter('on-dragend', e)
      isDragging.value = false
    }
  }

  return { isDragging, dragTarget }
}

export function useEventDispatcher(KEY) {
  const eventData = ref(null)
  provide(KEY, eventData)
  /**
   * @param {string} name
   * @param {any} [payload] - The payload associated with the event
   */
  return (name, payload) => {
    eventData.value = { id: uuidv1(), name, payload }
  }
}

export function useValidationRule() {
  const { t } = useI18n()
  return {
    validateEmpty: (v) => typy(v).isUndefined || typy(v).isNull || typy(v).isEmptyString,
    validateRequired: (v) =>
      typy(v).isBoolean || !!v || v === 0 || t('$common.errors.requiredField'), // null, undefined, and empty string will return the msg
    validateRequiredArr: (v) => typy(v).safeArray.length > 0 || t('$common.errors.requiredField'),
    validateNonNegative: (v) => (typy(v).isNumber && v >= 0) || t('$lib.errors.negativeNum'),
    validatePositiveNum: (v) => (typy(v).isNumber && v > 0) || t('$lib.errors.largerThanZero'),
    validateInteger: (v) =>
      (typy(v).isNumber && /^[-]?\d+$/g.test(v)) || t('$lib.errors.nonInteger'),
    validateHexColor: (v) => Boolean(v.match(/^#[0-9A-F]{6}$/i)) || t('$lib.errors.hexColor'),
    validateUnique: ({ v, items }) => !items.includes(v) || t('$lib.errors.duplicatedValue'),
    validateObjId: (v) => {
      if (/\s/.test(v)) return t('$lib.errors.objIdNoWhitespace')
      if (!/^[a-zA-Z0-9_.~-]+$/.test(v)) return t('$lib.errors.objIdInvalidChars')
      return true
    },
  }
}

export function useCtxMenu() {
  const data = reactive({
    isOpened: false,
    type: '',
    item: {},
    activatorId: '',
    target: [0, 0], // coord
  })
  const isOpened = computed(() => data.isOpened)

  watch(isOpened, (v) => {
    // clear data
    if (!v) {
      data.item = {}
      data.activatorId = ''
    }
  })

  function openCtxMenu({ e = {}, type = '', activatorId = '', item = {} }) {
    Object.assign(data, {
      isOpened: true,
      type,
      item,
      activatorId: activatorId || item.id,
      target: [typy(e, 'clientX').safeNumber, typy(e, 'clientY').safeNumber],
    })
  }

  /**
   * @param {string} str
   * @returns {string} valid HTML id attribute value
   */
  function escapeToId(str) {
    return str.replace(/[^a-zA-Z0-9\-_:.]/g, '-')
  }

  function genActivatorId(id) {
    return escapeToId(`ctx-menu-activator-${id}`)
  }

  return { data, openCtxMenu, genActivatorId }
}

export function useZoomAndPanController() {
  const panAndZoom = ref({ x: 0, y: 0, k: 1, transition: false, eventType: '' })
  const isFitIntoView = ref(false)

  watch(
    panAndZoom,
    (v) => {
      if (v.eventType && v.eventType == 'wheel') isFitIntoView.value = false
    },
    { deep: true }
  )

  /**
   * @param {object} param.extent - graph extent
   * @param {object} param.dim - graph dimension
   * @param {array} param.scaleExtent - e.g. [0.25, 2]
   * @param {number} [param.paddingPct]
   * @returns {number} zoom ratio
   */
  function calcFitZoom({ extent: { minX, maxX, minY, maxY }, dim, scaleExtent, paddingPct = 2 }) {
    const graphWidth = maxX - minX
    const graphHeight = maxY - minY
    const xScale = (dim.width / graphWidth) * (1 - paddingPct / 100)
    const yScale = (dim.height / graphHeight) * (1 - paddingPct / 100)
    // Choose the minimum scale among xScale, yScale, and the maximum allowed scale
    let k = Math.min(xScale, yScale, scaleExtent[1])
    // Clamp the scale value within the scaleExtent range
    k = Math.min(Math.max(k, scaleExtent[0]), scaleExtent[1])
    return k
  }

  /**
   * Auto adjust (zoom in or out) the contents of a graph
   * @param {object} param
   * @param {number} [param.v] - zoom value
   * @param {boolean} [param.isFitIntoView] - if it's true, v param will be ignored
   * @param {object} param.extent
   * @param {array} param.scaleExtent
   * @param {object} param.dim
   * @param {boolean} [param.transition] - true by default
   */
  function zoomTo({
    v,
    isFitIntoView: isFitIntoViewValue = false,
    extent,
    scaleExtent,
    dim,
    paddingPct = 2,
    transition = true,
  }) {
    isFitIntoView.value = isFitIntoViewValue

    const { minX, minY, maxX, maxY } = extent
    const k = isFitIntoViewValue ? calcFitZoom({ extent, dim, scaleExtent, paddingPct }) : v
    const x = dim.width / 2 - ((minX + maxX) / 2) * k
    const y = dim.height / 2 - ((minY + maxY) / 2) * k

    panAndZoom.value = { x, y, k, transition, eventType: '' }
  }

  return { panAndZoom, isFitIntoView, zoomTo }
}

export function useDimObserver() {
  const dim = ref({ width: 0, height: 0 })
  function setDim(v) {
    dim.value = v
  }
  return { dim, setDim }
}

export function useFormRef() {
  const formRef = ref(null)
  const formValidity = ref(null)

  return {
    formValidity,
    formRef,
    validateForm: async () => await typy(formRef.value, `validate`).safeFunction(),
    resetForm: async () => await typy(formRef.value, `reset`).safeFunction(),
    resetValidation: async () => await typy(formRef.value, `resetValidation`).safeFunction(),
  }
}

export function useMxsObjTypeTxt() {
  const { t } = useI18n()

  return ({ type, plural = false }) => {
    switch (type) {
      case MXS_OBJ_TYPE_MAP.SERVERS:
        return t('$common.servers', plural ? 2 : 1)
      case MXS_OBJ_TYPE_MAP.MONITORS:
        return t('$common.monitors', plural ? 2 : 1)
      case MXS_OBJ_TYPE_MAP.FILTERS:
        return t('$common.filters', plural ? 2 : 1)
      case MXS_OBJ_TYPE_MAP.SERVICES:
        return t('$common.services', plural ? 2 : 1)
      case MXS_OBJ_TYPE_MAP.LISTENERS:
        return t('$common.listeners', plural ? 2 : 1)
      default:
        return ''
    }
  }
}

/**
 * For use in ConfirmDlg common component
 * @returns {Object} Reactive object: { confirmDlg, setConfirmDlgVisibility }
 */
export function useConfirmDlg(data = {}) {
  const confirmDlg = ref(
    helpers.lodash.merge(
      {},
      {
        //BaseDlg common props
        modelValue: false,
        title: '',
        saveText: '',
        onSave: () => null,
        'onUpdate:modelValue': updateModelValue,
        //ConfirmDlg props
        confirmMsg: '',
        smallInfo: '',
      },
      data
    )
  )

  function updateModelValue(v) {
    confirmDlg.value.modelValue = v
  }

  return confirmDlg
}

export function useExternalTooltip() {
  const tooltip = ref(null)

  function showTooltip({ activator, ...rest }) {
    tooltip.value = { activator, ...rest }
  }

  function rmTooltip() {
    tooltip.value = null
  }

  function eventsBinder({ activator, ...rest } = {}) {
    return {
      mouseenter: () => showTooltip({ activator, ...rest }),
      mouseleave: rmTooltip,
    }
  }

  return { tooltip, eventsBinder }
}
