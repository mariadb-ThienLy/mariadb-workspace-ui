<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
const isPwdVisible = ref(false)
const inputRef = ref(null)
defineExpose({ inputRef })
</script>

<template>
  <LabelField
    ref="inputRef"
    required
    :type="isPwdVisible ? 'text' : 'password'"
    autocomplete="new-password"
    :label="$t('$common.password')"
  >
    <template #append-inner>
      <EyeToggleIcon v-model="isPwdVisible" />
    </template>
  </LabelField>
</template>
