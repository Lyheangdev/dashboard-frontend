<script setup lang="ts">
import type { IGlobalInput } from '~/shared/types/type.input';

defineProps<IGlobalInput>();
const model = defineModel<string>();
const slot = useSlots();

const hasLeading = !!slot?.leading;
const hasTrailing = !!slot?.trailing;
</script>

<template>
  <div
    class="relative flex w-full items-center gap-2 overflow-hidden rounded-md bg-gray-100 px-3.5 py-2 outline-gray-200 focus-within:outline-2 focus-within:outline-blue-400"
    :class="[{ 'bg-gray-200/80!': disabled }]"
  >
    <slot name="leading"></slot>
    <div v-if="hasLeading" class="h-[70%] w-px bg-gray-300/70" />
    <input
      v-model="model"
      :disabled="disabled"
      :placeholder="placeholder"
      :minlength="minlength"
      :maxlength="maxlength"
      :tabindex="tabindex"
      class="mb-0.5 h-full grow rounded-xs border-none text-sm leading-[100%]! text-gray-700 placeholder:text-sm placeholder:leading-[100%]! placeholder:text-gray-400 focus:border-none focus:ring-0 focus:outline-0 disabled:cursor-not-allowed!"
      :class="[{ 'ml-1': hasLeading, 'mr-1': hasTrailing }]"
    />
    <div v-if="hasTrailing" class="h-[70%] w-px bg-gray-300/70" />
    <slot name="trailing"> </slot>
  </div>
</template>
