<script setup lang="ts">
import IconClipboard from '~~/public/icons/copy-clipboard.svg';

defineProps<{ text: string }>();

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error('Failed to copy:', error);
  }
};
</script>

<template>
  <button
    @click.stop="() => copyToClipboard(text)"
    class="cursor-pointer rounded-sm"
  >
    <IconClipboard
      class="size-4! text-blue-400/70 transition-all duration-200 hover:scale-110 hover:text-gray-600"
      filled
    />
  </button>
</template>