<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
const inputRef = ref(null)
defineExpose({ inputRef })
</script>

<template>
  <LabelField ref="inputRef" required autocomplete="new-username" :label="$t('$common.username')" />
</template>
