<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { preventNonNumericalVal } from '@/utils/dom'

const { t } = useI18n()
const typy = useTypy()

const inputRef = ref(null)

function validateNonNegative(v) {
  return (typy(v).isNumber && v >= 0) || t('$lib.errors.negativeNum')
}

defineExpose({ inputRef })
</script>

<template>
  <LabelField
    ref="inputRef"
    :label="$t('$common.timeout')"
    type="number"
    required
    :rules="[validateNonNegative]"
    @keypress="preventNonNumericalVal($event)"
  />
</template>
