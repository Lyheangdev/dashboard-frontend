<script setup lang="ts">
import IconLoader from '~~/public/icons/loader.svg';
import IconLoaded from '~~/public/icons/loaded.svg';

const props = withDefaults(defineProps<{ isLoading?: boolean }>(), { isLoading: false });
</script>

<template>
  <div class="flex items-center gap-2.5">
    <IconLoader v-if="isLoading" class="size-3.5! animate-spin text-white" filled />
    <IconLoaded v-else class="size-4! text-white" filled />
    <span
      class="mb-0.5 text-xs leading-[100%] text-gray-100"
      :class="[{ 'animate-pulse text-gray-50!': isLoading }]"
      >{{ isLoading ? 'Loading more ...' : 'Loaded' }}</span
    >
  </div>
</template>
