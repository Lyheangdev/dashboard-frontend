<script setup lang="ts">
import type { IGlobalInput } from '~/shared/types/type.input';

const props = withDefaults(defineProps<IGlobalInput>(), { row: 4 });

const model = defineModel<string>();
</script>

<template>
  <textarea
    v-model="model"
    :placeholder="placeholder"
    :rows="row"
    :disabled="disabled"
    :maxlength="maxlength"
    class="w-full rounded-md border-none bg-gray-100/80 px-3.5 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
    :class="['focus:outline-2 focus:outline-blue-400']"
  />
</template>
