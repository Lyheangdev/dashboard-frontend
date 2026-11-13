<script setup lang="ts">
import IconClipboard from '~~/public/icons/copy-clipboard.svg';

defineProps<{ text: string }>();

const toat = useToaster();

const openToast = () => {
  toat.open({
    isOpen: true,
    title: 'Copied To Clipboard',
    description: 'Data has been copied successfull.',
    type: 'success',
    position: 'top-right',
    duration: 1,
  });
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    openToast();
  } catch (error) {
    console.error('Failed to copy:', error);
  }
};
</script>

<template>
  <button @click.stop="() => copyToClipboard(text)" class="cursor-pointer rounded-sm">
    <IconClipboard
      class="size-4! text-blue-400/70 transition-all duration-200 hover:scale-110 hover:text-gray-600"
      filled
    />
  </button>
</template>
