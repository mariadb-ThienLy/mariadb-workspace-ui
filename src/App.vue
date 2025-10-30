<script setup>
import workspaceService from '@/services/workspaceService'
import Worksheet from '@/store/orm/models/Worksheet'
import { MXS_OBJ_TYPE_MAP } from '@/constants'

defineOptions({ namedSlots: ['conn-obj-select'] })

const props = defineProps({
  targetId: { type: String, default: '' },
  nativeParams: { type: String, default: '' },
})
const { SERVERS } = MXS_OBJ_TYPE_MAP

const { delay } = useHelpers()
const store = useStore()

const isInitializing = ref(true)
const sql = ref('SELECT * FROM mysql.users')
const selectItem = ref(1)
const testItems = ref([
  { value: 1, title: 'Item 1' },
  { value: 2, title: 'Item 2' },
  { value: 3, title: 'Item 3' },
])

const worksheets = computed(() => Worksheet.all())
const conn_dlg = computed(() => store.state.workspace.conn_dlg)
const isConnDlgOpened = computed({
  get: () => conn_dlg.value.is_opened,
  set: (v) => store.commit('workspace/SET_CONN_DLG', { ...conn_dlg.value, is_opened: v }),
})

const nativeParamsObj = computed(() => (props.nativeParams ? JSON.parse(props.nativeParams) : {}))

onMounted(async () => {
  if (worksheets.value.length === 0)
    await workspaceService.init({ userPermission: { row_limit: 1000 } })
  await delay(500)
  isInitializing.value = false
})
</script>

<template>
  <VApp id="mariadb-workspace">
    <div class="db-workspace-view h-100">
      <VProgressLinear v-if="isInitializing" indeterminate color="primary" />
      <div v-else class="workspace-ctr h-100">
        <div class="mb-6">vuex-orm worksheets data from indexedDB: {{ worksheets }}</div>
        <p class="mb-2">Test custom-styled isolated monaco-editor.</p>
        <VSheet height="200px" class="border--table-border">
          <SqlEditor v-model="sql" class="pt-2 h-100" />
        </VSheet>

        <GblTooltipActivator
          class="mt-2"
          :maxWidth="140"
          :data="{ txt: 'Long text auto truncate feature' }"
          activateOnTruncation
        />

        <VSheet class="my-6">
          <h3 class="text-h3 font-weight-light text-tertiary">
            Test custom-styled isolated Vuetify components.
          </h3>
          <VBtn size="small" color="primary" class="my-4" @click="isConnDlgOpened = true">
            Open connection Dialog
          </VBtn>
          <BaseConnDlg
            v-model="isConnDlgOpened"
            :targetType="SERVERS"
            :targetId="targetId"
            :nativeParams="nativeParamsObj"
          >
            <template #obj-select="{ props }">
              <slot name="conn-obj-select" v-bind="props"></slot>
            </template>
          </BaseConnDlg>
          <VSelect v-model="selectItem" :items="testItems" width="200px" />
        </VSheet>
      </div>
      <GblTooltip />
    </div>
  </VApp>
</template>
