<script setup lang="ts">
import IconEarthLogo from '~~/public/icons/globe-logo.svg';
import IconLogout from '~~/public/icons/logout.svg';

defineProps<{ activeMenuKey: string; menu: MenuList }>();
defineEmits<{
  (e: 'click', key: string): void;
}>();

type ISingleResponse<T> = {
  status: string;
  message: string;
  data: T;
};

type ISingleReponseError<T> = ISingleResponse<T> & {
  error: {
    code: string;
    details: null;
    message: string | null;
  };
};

interface IUser {
  id: number;
  full_name?: string;
  email?: string;
  bio?: string;
  profile_url?: string;
  role: string;
  isBanned: boolean;
  status: number;
  code: string;
  permissions: string[];
  created_at: string;
  updated_at: string;
}

const { clearnAuth } = useAuthStore();

const handleLogout = async () => {
  try {
    await $fetch<ISingleResponse<IUser>>('http://localhost:8000/api/v1/auth/logout', {
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
        :class="[m.key == activeMenuKey ? 'bg-white/20' : '']"
        @click.stop="$emit('click', m?.key)"
      >
        <component :is="m.icon" class="size-6! text-gray-100!" filled />
      </div>
    </nav>
    <button @click.stop="handleLogout" class="group absolute bottom-6 cursor-pointer">
      <IconLogout class="ease size-6! text-white duration-300 group-hover:text-gray-300" filled />
    </button>
  </div>
</template>
