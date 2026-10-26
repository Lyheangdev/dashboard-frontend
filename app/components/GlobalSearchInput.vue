[7/10/26 11:42 AM] Lyheang:
<script setup lang="ts">
import IconSearch from '~~/public/icons/search.svg'
const open = ref(false)

const searchTerm = ref('')

const emit = defineEmits<{
  (e: 'search', value: string): void
}>()

const handleClose = () => {
  open.value = false
}

const handleOpen = () => {
  open.value = true
}

const handleSearch = (event: KeyboardEvent) => {
  const element = event.target as HTMLInputElement
  handleOpen()
  emit('search', element.value)
}
</script>

<template>
  <div class="relative z-50!">
    <div class="absolute top-1/2 left-1.5 -translate-y-1/2 rounded-lg bg-blue-500 p-1.5">
      <IconSearch class="h-4! w-5! text-white" filled />
    </div>

    <input
      v-model="searchTerm"
      ref="global-search-input-ref"
      class="bg-primary h-10 w-80 rounded-xl border border-gray-400/15 pr-18 pl-12 text-sm font-normal text-gray-700 ring-0 outline-0 placeholder:text-[13px] placeholder:text-gray-500 focus:border-2 focus:border-blue-500"
      placeholder="Search by project ..."
      @keyup.ctrl.enter.prevent="handleSearch"
      @focus="handleOpen"
      @blur="handleClose"
    />

    <button
      class="absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer rounded-lg bg-blue-500 px-2 py-1.5 text-[11px] text-white"
    >
      Find Now
    </button>
  </div>
</template>

<style scoped>
.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 0.3s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}
</style>
