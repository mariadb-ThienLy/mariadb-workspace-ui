<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { EXTERNAL_ANCHOR_ATTRS } from '@/constants'
</script>

<template>
  <a class="anchor-link" v-bind="EXTERNAL_ANCHOR_ATTRS">
    <slot />
  </a>
</template>
