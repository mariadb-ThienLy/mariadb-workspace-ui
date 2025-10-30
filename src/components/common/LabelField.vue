<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
defineOptions({ inheritAttrs: false })
const props = defineProps({
  modelValue: { type: [String, Number] },
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'password', 'number'].includes(value),
  },
  label: { type: String, required: true },
  customErrMsg: { type: String, default: '' },
  rules: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs()

const {
  lodash: { uniqueId },
} = useHelpers()
const { t } = useI18n()
const typy = useTypy()

const inputRef = ref(null)

const input = computed({
  get: () => typeCast({ type: props.type, v: props.modelValue }),
  set: (v) => emit('update:modelValue', typeCast({ type: props.type, v })),
})
const id = computed(() => attrs.id || `label-field-${uniqueId()}`)
const isRequired = computed(() => attrs.required || attrs.required === '')
const validationRules = computed(() => {
  if (props.rules.length) return props.rules
  if (isRequired.value)
    return [(v) => !!v || props.customErrMsg || t('$common.errors.requiredField')]
  return []
})

function typeCast({ type, v }) {
  // allow empty string for number type instead of converting it to 0 via Number constructor
  if (type === 'number') return v === '' ? '' : Number(v)
  return String(v).trim()
}

async function validate() {
  await typy(inputRef.value, 'validate').safeFunction()
}
defineExpose({ validate })
</script>

<template>
  <label class="label-field text-label" :class="{ 'label--required': isRequired }" :for="id">
    {{ label }}
  </label>
  <VTextField
    v-model="input"
    ref="inputRef"
    :id="id"
    :type="type"
    hide-details="auto"
    :rules="validationRules"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </VTextField>
</template>
