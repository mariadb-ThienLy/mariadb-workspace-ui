<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
const props = defineProps({ modelValue: { type: Boolean, required: true } })

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
</script>

<template>
  <VIcon :icon="value ? '$mdiEyeOutline' : '$mdiEyeOffOutline'" size="20" @click="value = !value" />
</template>
