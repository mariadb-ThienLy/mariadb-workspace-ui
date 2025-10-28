<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { TOOLTIP_DEBOUNCE } from '@/constants'

const props = defineProps({
  /* If data.activatorID is defined, it uses that as an external
   * activator instead of the componentActivatorID.
   */
  data: {
    type: Object,
    required: true,
    validator: (v) => {
      const keys = Object.keys(v)
      return keys.includes('txt') || keys.includes('collection')
    },
  },
  maxWidth: { type: Number, default: 0 }, // if maxWidth isn't provided, it uses clientWidth
  disabled: { type: Boolean, default: false },
  debounce: { type: Number, default: TOOLTIP_DEBOUNCE },
  activateOnTruncation: { type: Boolean, default: false },
  tag: { type: String, default: 'span' },
  fillHeight: { type: Boolean, default: false },
})

const {
  uuidv1,
  lodash: { debounce: debounceFn, isEqual },
  delay,
  immutableUpdate,
} = useHelpers()
const typy = useTypy()
const store = useStore()
const wrapper = ref(null)
const isMouseOvered = ref(false)
const stopAll = ref(false)

const componentActivatorID = `gbl-tooltip-activator-${uuidv1()}`

const gbl_tooltip_data = computed(() => store.state.gbl_tooltip_data)

const id = computed(() => (props.data.activatorID ? '' : componentActivatorID))
const interactive = computed(() => typy(props.data, 'interactive').safeBoolean)

const style = computed(() =>
  props.maxWidth ? { maxWidth: `${props.maxWidth}px` } : { maxWidth: '100%' }
)

const tooltipData = computed(() =>
  props.data.activatorID
    ? props.data
    : {
        ...props.data,
        activatorID: componentActivatorID,
      }
)

const collectionData = computed(() => typy(props.data, 'collection').safeObjectOrEmpty)
const txt = computed(() => typy(props.data, 'txt').safeString)
const tooltipEnabled = computed(() => !props.activateOnTruncation || isTruncated())

let debouncedMouseOver

function createDebouncedMouseOver() {
  debouncedMouseOver = debounceFn(() => {
    if (!stopAll.value) {
      store.commit(
        'SET_GBL_TOOLTIP_DATA',
        props.activateOnTruncation && !isTruncated() ? null : tooltipData.value
      )
      isMouseOvered.value = true
    }
  }, props.debounce)
}

function mouseover() {
  createDebouncedMouseOver()
  debouncedMouseOver()
}

function mouseleave() {
  debouncedMouseOver.cancel()
  debouncedMouseOver = undefined
  if (!interactive.value)
    delay(TOOLTIP_DEBOUNCE).then(() => {
      store.commit('SET_GBL_TOOLTIP_DATA', null)
      isMouseOvered.value = false
    })
}

function isTruncated() {
  return (
    typy(wrapper, 'value.scrollWidth').safeNumber > typy(wrapper, 'value.clientWidth').safeNumber
  )
}

function updateTooltipData({ key, value }) {
  if (isMouseOvered.value) {
    const tooltipData = tooltipEnabled.value
      ? immutableUpdate(gbl_tooltip_data.value, { $merge: { [key]: value } })
      : null
    store.commit('SET_GBL_TOOLTIP_DATA', tooltipData)
  }
}

onBeforeMount(() => (stopAll.value = false))
onBeforeUnmount(() => (stopAll.value = true))

watch(
  collectionData,
  (v, oV) => {
    if (!isEqual(v, oV)) updateTooltipData({ key: 'collection', value: v })
  },
  { deep: true }
)

watch(txt, (v, oV) => {
  if (v !== oV) updateTooltipData({ key: 'txt', value: v })
})
</script>

<template>
  <component
    :is="tag"
    :id="id"
    ref="wrapper"
    class="text-truncate"
    :class="[fillHeight ? 'wrapper--align-middle d-block fill-height' : 'd-inline-block']"
    :style="style"
    v-on="disabled ? {} : { mouseover, mouseleave }"
  >
    <slot :value="txt" :activatorID="id"> {{ txt }}</slot>
  </component>
</template>

<style lang="scss" scoped>
.wrapper--align-middle:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  height: 100%;
}
</style>
