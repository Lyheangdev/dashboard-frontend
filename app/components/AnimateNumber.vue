<script setup lang="ts">
import NumberFlow, { continuous, type Trend } from '@number-flow/vue'

const props = withDefaults(
  defineProps<{
    value: number
    trend?: Trend
    enableWatch?: boolean
  }>(),
  { trend: 0, enableWatch: false },
)

const value = ref(0)

let timtout: ReturnType<typeof window.setTimeout> | null = null

onMounted(() => {
  timtout = setTimeout(() => {
    value.value = props.value
  }, 500)
})

if (props.enableWatch) {
  watchEffect(() => {
    value.value = props.value
  })
}

onBeforeUnmount(() => {
  window.clearTimeout(timtout!)
})
</script>

<!-- https://number-flow.barvian.me/vue/#props -->
<template>
  <NumberFlow
    :format="{
      minimumIntegerDigits: 2,
    }"
    :trend="trend"
    :plugins="[continuous]"
    :value="value"
    class="font-light! text-gray-600"
  />
</template>
