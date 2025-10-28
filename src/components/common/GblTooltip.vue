<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { VTooltip } from 'vuetify/components/VTooltip'
import { VMenu } from 'vuetify/components/VMenu'
import { TOOLTIP_DEBOUNCE } from '@/constants'

const store = useStore()
const typy = useTypy()

const gbl_tooltip_data = computed(() => store.state.gbl_tooltip_data)

const interactive = computed(() => typy(gbl_tooltip_data.value, 'interactive').safeBoolean)

const contentWrapperClass = computed(() => [
  'text-body-2',
  interactive.value ? 'py-2 px-4 overflow-auto' : '',
  typy(gbl_tooltip_data.value, 'contentClass').safeString,
])

const component = computed(() => (interactive.value ? VMenu : VTooltip))
const componentProps = computed(() => {
  const {
    location = 'top',
    offset,
    transition = 'fade-transition',
    maxWidth = 800,
    maxHeight = 600,
  } = gbl_tooltip_data.value

  const props = {
    location,
    offset,
    transition,
    maxWidth,
    maxHeight,
  }
  if (interactive.value) props.contentClass = 'shadow-drop rounded-10 bg-white'
  return props
})
</script>

<template>
  <ShadowActivator :activator="gbl_tooltip_data ? `#${gbl_tooltip_data.activatorID}` : ''">
    <template #default="{ activator }">
      <component
        :is="component"
        v-if="gbl_tooltip_data"
        :key="gbl_tooltip_data.activatorID"
        :model-value="Boolean(gbl_tooltip_data)"
        open-on-hover
        :open-delay="TOOLTIP_DEBOUNCE"
        :close-on-content-click="false"
        :activator="activator || ''"
        v-bind="componentProps"
      >
        <div
          :class="contentWrapperClass"
          :style="{
            whiteSpace: typy(gbl_tooltip_data, 'whiteSpace').safeString || 'pre',
            wordWrap: typy(gbl_tooltip_data, 'wordWrap').safeString || 'normal',
          }"
        >
          <template v-if="!typy(gbl_tooltip_data, 'collection').isUndefined">
            <span
              v-for="(value, key) in gbl_tooltip_data.collection"
              :key="key"
              class="d-block text-body-2"
            >
              <span class="mr-1 font-weight-bold text-capitalize"> {{ key }}: </span>
              <span> {{ value }}</span>
            </span>
          </template>
          <template v-else>
            {{ gbl_tooltip_data.txt }}
          </template>
        </div>
      </component>
    </template>
  </ShadowActivator>
</template>
