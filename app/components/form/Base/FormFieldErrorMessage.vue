<script setup lang="ts">
import IconFieldError from '~~/public/icons/form/error-field.svg';

defineProps<{ msg?: string }>();
</script>

<template>
  <div v-if="Boolean(msg)" class="relative mt-2 flex items-center gap-1 ml-1">
    <IconFieldError class="size-4! text-red-600" filled />
    <small class="text-xs text-red-500">{{ msg }}</small>
  </div>
</template>
