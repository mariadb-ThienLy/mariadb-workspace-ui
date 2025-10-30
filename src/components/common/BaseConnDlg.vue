<script setup>
/*
 * Copyright (c) 2025 MariaDB plc. All rights reserved, proprietary and confidential.
 *
 * This is UNPUBLISHED PROPRIETARY SOURCE CODE AND A TRADE SECRET of MariaDB plc, www.mariadb.com
 */
const props = defineProps({
  targetType: { type: String, required: true },
  targetId: { type: String, default: '' },
  nativeParams: { type: Object, default: () => ({}) },
})

const attrs = useAttrs()
const store = useStore()
const typy = useTypy()
const getObjTypeTxt = useMxsObjTypeTxt()

const payload = ref({})

const conn_err_state = computed(() => store.state.queryConnsMem.conn_err_state)
const hasSavingErr = computed(() => conn_err_state.value)

watch(
  () => attrs.modelValue,
  async (v) => {
    if (v) initFormData()
  },
  { immediate: true }
)

function initFormData() {
  payload.value = {
    user: '',
    password: '',
    db: '',
    timeout: 300,
  }
}

async function confirmOpen() {
  const attributes = { target: props.targetId, ...payload.value, ...props.nativeParams }
  if (!typy(props.nativeParams).isEmptyObject) attributes.target = 'native'

  // eslint-disable-next-line no-console
  console.info('Open a connection with the following attributes', {
    attributes,
    meta: { name: props.targetId, type: props.targetType },
  })
}
</script>

<template>
  <BaseDlg
    :onSave="confirmOpen"
    :title="`${$t('$lib.workspaceView.connectTo')}...`"
    minBodyWidth="512px"
    :hasSavingErr="hasSavingErr"
    hasFormDivider
    :disableOnSaveError="false"
    :saveText="$t('$lib.workspaceView.connect')"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
    <template #form-body>
      <VContainer class="pa-1">
        <VRow class="my-0 mx-n1">
          <VCol v-if="targetType" cols="12" md="12" class="pa-1">
            <label class="label-field text-label label--required" for="obj-select">
              {{ $t('$common.nameLabel', [getObjTypeTxt({ type: targetType })]) }}
            </label>
            <slot name="obj-select" :props="{ id: 'obj-select' }" />
          </VCol>
          <VCol cols="12" md="6" class="pa-1">
            <UidInput v-model="payload.user" name="db-user" />
          </VCol>
          <VCol cols="12" md="6" class="pa-1">
            <PwdInput v-model="payload.password" name="db-password" />
          </VCol>
          <VCol cols="12" md="6" class="pa-1">
            <LabelField v-model="payload.db" :label="$t('$lib.workspaceView.database')" name="db" />
          </VCol>
          <VCol cols="12" md="6" class="pa-1">
            <TimeoutInput v-model="payload.timeout" name="timeout" />
          </VCol>
        </VRow>
      </VContainer>
    </template>
  </BaseDlg>
</template>
