<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
import { scrollToFirstErrMsgInput } from '@/utils/dom'
import { OVERLAY_TRANSPARENT_LOADING } from '@/constants/overlayTypes'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  minBodyWidth: { type: String, default: '466px' },
  isDynamicWidth: { type: Boolean, default: false },
  scrollable: { type: Boolean, default: true },
  title: { type: String, required: true },
  onSave: { type: Function, required: true },
  cancelText: { type: String, default: '' },
  saveText: { type: String, default: '' },
  saveDisabled: { type: Boolean, default: false },
  lazyValidation: { type: Boolean, default: true },
  hasSavingErr: { type: Boolean, default: false },
  hasFormDivider: { type: Boolean, default: false },
  /**
   * close dialog immediately, don't wait for submit
   * Limitation: form needs to be cleared manually on parent component
   */
  closeImmediate: { type: Boolean, default: false },
  allowEnterToSubmit: { type: Boolean, default: true },
  showCloseBtn: { type: Boolean, default: true },
  showCancelBtn: { type: Boolean, default: true },
  titleCtrClass: { type: [String, Object, Array], default: '' },
  bodyCtrClass: { type: [String, Object, Array], default: 'px-0 pt-0 pb-12' },
  formClass: { type: [String, Object, Array], default: 'body-padding-x' },
  actionCtrClass: { type: [String, Object, Array], default: '' },
  disableOnSaveError: { type: Boolean, default: true },
})
const emit = defineEmits(['update:modelValue', 'is-form-valid', 'after-cancel', 'after-close'])

const { delay } = useHelpers()
const store = useStore()
const { formRef, formValidity, validateForm, resetForm, resetValidation } = useFormRef()

const isDlgOpened = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emit('update:modelValue', v)
  },
})

const isSaveDisabled = computed(
  () =>
    (props.disableOnSaveError && props.hasSavingErr) ||
    props.saveDisabled ||
    formValidity.value === false
)

watch(formValidity, (v) => emit('is-form-valid', Boolean(v)))

function closeDialog() {
  isDlgOpened.value = false
}

function cancel() {
  cleanUp()
  closeDialog()
  emit('after-cancel')
}

function close() {
  closeDialog()
  emit('after-close')
}

async function keydownHandler() {
  if (props.allowEnterToSubmit && !isSaveDisabled.value) await save()
}

function cleanUp() {
  if (formRef.value) {
    resetForm()
    resetValidation()
  }
}

async function waitClose() {
  // wait time out for loading animation
  await delay(600).then(() => store.commit('SET_OVERLAY_TYPE', null))
  cleanUp()
  closeDialog()
}

function handleCloseImmediate() {
  closeDialog()
  store.commit('SET_OVERLAY_TYPE', null)
}

async function save() {
  await validateForm()
  if (formValidity.value === false) scrollToFirstErrMsgInput()
  else {
    store.commit('SET_OVERLAY_TYPE', OVERLAY_TRANSPARENT_LOADING)
    if (!props.hasSavingErr && props.closeImmediate) handleCloseImmediate()
    await props.onSave()
    if (!props.closeImmediate)
      if (!props.hasSavingErr) await waitClose()
      else store.commit('SET_OVERLAY_TYPE', null)
  }
}
defineExpose({ cleanUp })
</script>

<template>
  <VDialog
    v-model="isDlgOpened"
    width="unset"
    content-class="base-dlg"
    persistent
    :scrollable="scrollable"
  >
    <!-- Use tabIndex to make VCard focusable so that keydown event can be listened-->
    <VCard
      :min-width="minBodyWidth"
      :max-width="isDynamicWidth ? 'unset' : minBodyWidth"
      @keydown.enter="keydownHandler"
      tabindex="0"
    >
      <VCardTitle class="v-card-title_padding" :class="titleCtrClass">
        <h3 class="text-h3 font-weight-light text-tertiary">
          {{ title }}
        </h3>
        <VBtn
          v-if="showCloseBtn"
          class="close pos--absolute"
          data-test="close-btn"
          density="comfortable"
          icon
          variant="text"
          @click="close"
        >
          <VIcon size="20" color="foreground" icon="mxs:close" />
        </VBtn>
      </VCardTitle>
      <VCardText :class="bodyCtrClass">
        <div v-if="$slots.body" data-test="body-slot-ctr" class="body-padding-x">
          <slot name="body" />
        </div>
        <VDivider v-if="hasFormDivider" class="my-6" />
        <div v-else class="mt-4" />
        <VForm
          ref="formRef"
          v-model="formValidity"
          :validate-on="lazyValidation ? 'lazy input' : 'input'"
          :class="formClass"
          data-test="form-body-slot-ctr"
        >
          <slot name="form-body" />
        </VForm>
      </VCardText>
      <VCardActions
        class="v-card-actions_padding border-top--separator"
        :class="actionCtrClass"
        data-test="action-ctr"
      >
        <slot name="action-prepend" />
        <VSpacer />
        <VBtn
          v-if="showCancelBtn"
          color="primary"
          rounded
          variant="outlined"
          class="cancel font-weight-medium px-7 text-capitalize"
          data-test="cancel-btn"
          @click="cancel"
        >
          {{ cancelText || $t('$common.cancel') }}
        </VBtn>
        <VBtn
          color="primary"
          rounded
          variant="flat"
          :disabled="isSaveDisabled"
          class="font-weight-medium px-7 text-capitalize"
          data-test="save-btn"
          @click="save"
        >
          {{ saveText || $t('$lib.save') }}
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<style lang="scss" scoped>
.base-dlg {
  .close {
    top: 18px;
    right: 18px;
  }
  $paddingX: 62px;
  .v-card-title_padding {
    padding: 52px $paddingX 16px;
    white-space: normal;
    h3 {
      word-break: break-word;
    }
  }
  .body-padding-x {
    padding: 0px $paddingX;
  }
  .v-card-actions_padding {
    padding: 30px $paddingX 36px;
  }
  .v-card-text {
    color: colors.$foreground;
    font-size: 0.875rem !important;
  }
}
</style>
