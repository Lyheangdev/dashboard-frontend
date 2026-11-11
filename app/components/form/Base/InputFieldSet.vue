<script setup lang="ts">
defineProps<{
  label: string;
  required?: boolean;
  labelClass?: string;
}>();
</script>

<template>
  <div class="relative flex flex-col gap-1c">
    <div class="flex items-center gap-1.5">
      <small class="ml-0.5 font-medium text-gray-600" :class="[labelClass]">{{ label }}</small>
      <span class="text-red-600">&ast;</span>
    </div>
    <slot></slot>
  </div>
</template>
