<script setup>
const props = defineProps({
  activator: {
    type: [String, Object], // "#id", ".class", or HTMLElement
    required: true,
  },
})

const activatorRef = ref(null)
const vm = getCurrentInstance()

function resolveActivator() {
  if (!props.activator) return

  // If already DOM element → use as-is
  if (props.activator instanceof HTMLElement) {
    activatorRef.value = props.activator
    return
  }

  // If selector string → resolve inside host shadow root
  const root = vm.proxy?.$el?.getRootNode()
  const scope = root instanceof ShadowRoot ? root : document
  activatorRef.value = scope.querySelector(props.activator)
}

// Initial resolution
onMounted(resolveActivator)

// Watch for dynamic changes
watch(
  () => props.activator,
  () => {
    resolveActivator()
  },
  { immediate: false }
)
</script>

<template>
  <slot :activator="activatorRef"></slot>
</template>
