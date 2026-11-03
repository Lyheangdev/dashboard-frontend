<script setup lang="ts">
import IconUserGear from '~~/public/icons/user-gear.svg';

definePageMeta({
  layout: 'admin',
});

const authStore = useAuthStore();
</script>

<template>
  <PageWrapper page-label="My Profile">
    <div class="flex items-center gap-4 px-4 pt-2 pb-1">
      <IconUserGear class="size-6!" filled />
      <h2 class="text-lg font-medium text-gray-700">Personal Profile</h2>
    </div>
    <div class="h-px w-full bg-gray-200" />
    <div class="px-4 py-2">
      <ul class="flex w-1/4 flex-col gap-1.5">
        <li class="flex justify-between">
          <span class="text-[15px] font-medium text-gray-700">Email</span
          ><span class="text-sm text-gray-600">{{ authStore.user?.email }}</span>
        </li>
        <li class="flex justify-between">
          <span class="text-[15px] font-medium text-gray-700">Full Name</span
          ><span class="text-sm text-gray-600">{{ authStore.user?.full_name }}</span>
        </li>
        <li class="flex justify-between">
          <span class="text-[15px] font-medium text-gray-700">Acccessibility</span
          ><span class="text-sm text-gray-600">{{
            authStore.user?.isBanned ? 'Banned' : 'Normal'
          }}</span>
        </li>
        <li class="flex justify-between">
          <span class="text-[15px] font-medium text-gray-700">Role</span
          ><span class="text-sm text-gray-600">{{ authStore.user?.role }}</span>
        </li>
      </ul>
    </div>
  </PageWrapper>
</template>
