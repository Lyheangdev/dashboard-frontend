<script setup lang="ts">
import IconNotificationBell from '~~/public/icons/notification.svg';
</script>

<template>
  <button class="relative cursor-pointer">
    <IconNotificationBell class="size-6! text-blue-400" filled />
    <div
      class="absolute top-px right-0 flex size-2.5 items-center justify-center rounded-full bg-white"
    >
      <div class="size-1.5 rounded-full bg-red-600" />
      <div class="size-1.5 animate-ping absolute rounded-full bg-red-600" />
    </div>
  </button>
</template>
