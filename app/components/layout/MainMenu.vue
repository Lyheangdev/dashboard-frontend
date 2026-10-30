<script setup lang="ts">
import IconEarthLogo from '~~/public/icons/globe-logo.svg';
import IconLogout from '~~/public/icons/logout.svg';

defineProps<{ activeMenuKey: string; menu: MenuList }>();
defineEmits<{
  (e: 'click', key: string): void;
}>();
</script>

<template>
  <div
    class="flex h-screen max-h-screen w-full max-w-14 flex-col items-center overflow-x-clip overflow-y-auto bg-linear-to-b from-blue-500 to-blue-400"
  >
    <IconEarthLogo class="size-18! fill-white" filled />
    <nav class="relative flex flex-col gap-3.5">
      <div
        role="button"
        v-for="m in menu"
        :key="m.key"
        class="ease cursor-pointer rounded-xl p-1.5 transition-all duration-200 hover:-translate-x-0.5 hover:bg-white/20"
        :class="[m.key == activeMenuKey ? 'bg-white/20' : '']"
        @click.stop="$emit('click', m?.key)"
      >
        <component :is="m.icon" class="size-6! text-gray-100!" filled />
      </div>
    </nav>
    <button class="group absolute bottom-6 cursor-pointer">
      <IconLogout class="ease size-6! text-white duration-300 group-hover:text-gray-300" filled />
    </button>
  </div>
</template>
