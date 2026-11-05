<script setup lang="ts">
import type { IAuthUser } from '~/shared/types/type.user';
import IconEarthLogo from '~~/public/icons/globe-logo.svg';
import IconLogout from '~~/public/icons/logout.svg';

defineProps<{ activeMenuKey: string; menu: MenuList }>();
defineEmits<{
  (e: 'click', href: string): void;
}>();

const runtimeConfig = useRuntimeConfig();
const { clearnAuth } = useAuthStore();

const handleLogout = async () => {
  try {
    await $fetch<IApiSingleResponse<IAuthUser>>(`${runtimeConfig.public.apiBase}/auth/logout`, {
      credentials: 'include',
    });
    clearnAuth();
    await navigateTo('/admin/login');
  } catch (error) {
    await navigateTo('/admin/login');
  }
};
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
        :class="[{ 'bg-white/20': m.href == activeMenuKey }]"
        @click.stop="$emit('click', m?.href || '')"
      >
        <component :is="m.icon" class="size-6! text-gray-100!" filled />
      </div>
    </nav>

    <button @click.stop="handleLogout" class="group absolute bottom-4 cursor-pointer bg-white/15 p-1.5 rounded-full hover:bg-white duration-300 ease-linear">
      <IconLogout class="ease size-5! text-white duration-300 group-hover:text-blue-400" filled />
    </button>
  </div>
</template>
