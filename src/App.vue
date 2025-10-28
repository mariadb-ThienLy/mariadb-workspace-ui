<script setup>
import workspaceService from '@/services/workspaceService'
import Worksheet from '@/store/orm/models/Worksheet'

const { delay } = useHelpers()

const isInitializing = ref(true)
const sql = ref('SELECT * FROM mysql.users')
const selectItem = ref(null)
const isDlgOpened = ref(false)
const testItems = ref([
  { value: 1, title: 'Item 1' },
  { value: 2, title: 'Item 2' },
  { value: 3, title: 'Item 3' },
])

const worksheets = computed(() => Worksheet.all())

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
          <VBtn size="small" color="primary" class="my-4" @click="isDlgOpened = true">
            Open Dialog
          </VBtn>
          <BaseDlg v-model="isDlgOpened" title="Test Dialog" :onSave="() => {}" />
          <VSelect v-model="selectItem" :items="testItems" width="200px" />
        </VSheet>
      </div>
      <GblTooltip />
    </div>
  </VApp>
</template>
