<script setup lang="ts">
import Iconsearch from '~~/public/icons/search.svg';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    delay?: number;
  }>(),
  { delay: 300 },
);

const emit = defineEmits<{
  (e: 'change', value: string): void;
}>();

const emitChange = debounce((value: string) => {
  emit('change', value);
}, props.delay);

const handleInputChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emitChange(value);
};
</script>

<template>
  <div class="relative w-fit">
    <Iconsearch class="absolute top-1/2 left-3 size-4! -translate-y-1/2 text-blue-500" filled />
    <input
      type="text"
      :placeholder="placeholder"
      class="bg-primary w-full rounded-md border-none py-1.5 pr-4 pl-8 text-sm text-gray-500 outline-0 placeholder:text-[13px] placeholder:text-gray-400"
      maxlength="100"
      @input="handleInputChange"
    />
  </div>
</template>
