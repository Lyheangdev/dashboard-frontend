<script setup lang="ts">
import IconUserAccount from '~~/public/icons/user-account.svg';
import IconCheck from '~~/public/icons/check.svg';
import IconDoubleKey from '~~/public/icons/double-key.svg';
import IconMenu from '~~/public/icons/menu.svg';
import IconResource from '~~/public/icons/resource.svg';
import IconCircleCheck from '~~/public/icons/circle-check.svg';

definePageMeta({
  layout: 'admin',
});

useHead({
  title: 'My Profile',
});
const authStore = useAuthStore();
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <PageWrapper page-label="My Profile" container-class="bg-transparent! p-0! gap-3!">
    <div class="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white pt-4 pb-6">
      <div class="flex items-end gap-4 px-6 pt-2 pb-1">
        <IconUserAccount
          v-if="!authStore.user?.profile_url"
          class="size-10! text-blue-300"
          filled
        />
        <NuxtImg
          v-else
          :src="`${runtimeConfig.public.assetUrl}${authStore.user?.profile_url}`"
          class="size-12! rounded-full border border-gray-200 object-cover"
          quality="75"
        />

        <div class="flex flex-col gap-1">
          <h2 class="text-lg leading-[100%] font-medium text-gray-700">Personal Information</h2>
          <p class="text-xs text-gray-500">Term of condition and policy</p>
        </div>
      </div>
      <div class="h-px w-full bg-gray-200/60" />
      <div class="px-4 py-2">
        <ul class="grid grid-cols-4">
          <li
            class="flex flex-col gap-0.5 border-r border-b border-dashed border-r-gray-200 border-b-gray-200 p-3"
          >
            <span class="text-base font-medium text-gray-700">Email</span
            ><span class="text-sm text-gray-600">{{ authStore.user?.email || 'N/A' }}</span>
          </li>

          <li
            class="flex flex-col gap-0.5 border-r border-b border-dashed border-r-gray-200 border-b-gray-200 p-3"
          >
            <span class="text-base font-medium text-gray-700">Full Name</span
            ><span class="text-sm text-gray-600">{{ authStore.user?.full_name || 'N/A' }}</span>
          </li>

          <li
            class="flex flex-col gap-0.5 border-r border-b border-dashed border-r-gray-200 border-b-gray-200 p-3"
          >
            <span class="text-base font-medium text-gray-700">Employee ID</span
            ><span class="text-sm text-gray-600">{{ authStore.user?.code || 'N/A' }}</span>
          </li>

          <li class="flex flex-col gap-0.5 border-b border-dashed border-b-gray-200 p-3">
            <span class="text-base font-medium text-gray-700">Acccessibility</span
            ><span class="text-sm text-gray-600">{{
              authStore.user?.isBanned ? 'Banned' : 'Normal'
            }}</span>
          </li>

          <li class="flex flex-col gap-0.5 border-r border-dashed border-r-gray-200 p-3">
            <span class="text-base font-medium text-gray-700">Role</span
            ><span class="text-sm text-gray-600">{{ authStore.user?.role || 'N/A' }}</span>
          </li>

          <li class="flex flex-col gap-0.5 border-r border-dashed border-r-gray-200 p-3">
            <span class="text-base font-medium text-gray-700">Status</span>
            <div class="flex w-fit items-center gap-1.5 py-1">
              <div class="size-2.5 rounded-full bg-green-400" />
              <span class="text-xs text-gray-600">{{
                authStore.user?.status == 1 ? 'Active' : 'Pending'
              }}</span>
            </div>
          </li>

          <li class="flex flex-col gap-0.5 border-r border-dashed border-r-gray-200 p-3">
            <span class="text-base font-medium text-gray-700">Biography</span
            ><span class="text-sm text-gray-600">{{ authStore.user?.bio || 'N/A' }}</span>
          </li>

          <li class="flex flex-col gap-0.5 border-dashed p-3">
            <span class="text-base font-medium text-gray-700">Registered At</span
            ><span class="text-sm text-gray-600">{{
              authStore.user?.created_at ? formatUtc(authStore.user?.created_at) : 'N/A'
            }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Menu & Resource -->
    <div class="grid grid-cols-2 gap-3">
      <!-- Menu -->
      <div class="flex flex-col rounded-2xl border border-gray-200/80 bg-white pt-6 pb-6">
        <div class="flex items-center gap-2 px-5">
          <IconMenu class="size-10! text-blue-300" filled />
          <div class="flex flex-col gap-1">
            <h2 class="text-lg leading-[100%] font-medium text-gray-700">System Menus</h2>
            <p class="text-xs text-gray-500">System menus allowed for you</p>
          </div>
        </div>

        <div class="mt-4 h-px w-full bg-gray-200/60" />

        <div
          class="mt-5 grid grid-cols-2 gap-2 pr-3 pl-6"
          :class="[{ grow: !authStore.user?.views }]"
        >
          <template v-if="Boolean(authStore.user?.views?.length)">
            <div
              v-for="menu in authStore.user?.views || []"
              :key="menu"
              class="relative flex flex-1 items-center gap-2 rounded-lg bg-blue-50/70 px-2 py-2.5"
            >
              <component :is="getMenuIcon(menu)" class="size-5! shrink-0 text-blue-400" filled />
              <span class="text-xs text-gray-500">{{ menu }}</span>
              <div class="absolute top-1/2 right-2.5 flex -translate-y-1/2 items-center gap-1">
                <IconCircleCheck class="size-4 text-blue-300" filled />
                <span class="mb-0.5 text-[11px] text-blue-400">In Used</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="col-span-2 flex items-center justify-center">
              <div class="relative flex flex-col items-center justify-center py-4">
                <NuxtImg
                  src="/images/empty-menu.png"
                  class="aspect-3/1.5 max-w-56 object-cover"
                  quality="75"
                />
                <h4 class="font-semibold text-gray-700">There is no menu available</h4>
                <p class="text-xs text-gray-500">Ask admin to add menu for work</p>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Resource  -->
      <div class="rounded-2xl border border-gray-200/80 bg-white pt-6 pb-6">
        <div class="flex items-center gap-3 px-6">
          <IconResource class="size-10! text-blue-300" filled />
          <div class="flex flex-col gap-1">
            <h2 class="text-lg leading-[100%] font-medium text-gray-700">Authorized Resources</h2>
            <p class="text-xs text-gray-500">Your resources allocated</p>
          </div>
        </div>

        <div class="mt-4 h-px w-full bg-gray-200/60" />

        <div class="mt-5 grid grid-cols-2 pr-3 pl-6">
          <div
            v-for="resource in authStore.user?.resources || []"
            :key="resource"
            class="relative flex flex-1 items-center justify-between gap-2 border-t border-r border-t-gray-200/70 border-r-gray-100 px-2.5 py-4 nth-[1]:border-t-0 nth-[2]:border-t-0 nth-[2n]:border-r-0"
          >
            <span class="text-xs text-gray-500">{{ resource }}</span>
            <div class="flex items-center gap-1">
              <IconCircleCheck class="text-blue-300" filled />
              <span class="mb-0.5 text-[11px] text-blue-300">In Used</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Permissions -->
    <div class="flex flex-col gap-3 rounded-2xl border border-gray-200/80 bg-white pt-6 pb-6">
      <div class="flex items-center gap-2 px-5">
        <IconDoubleKey class="size-10! text-blue-300" filled />
        <div class="flex flex-col gap-1">
          <h2 class="text-lg leading-[100%] font-medium text-gray-700">System Permission</h2>
          <p class="text-xs text-gray-500">What you can be permited in system</p>
        </div>
      </div>
      <div class="h-px w-full bg-gray-200/60" />
      <div class="mt-2 grid px-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        <div
          v-for="permision in authStore.user?.permissions || []"
          :key="permision"
          class="flex items-center gap-2"
        >
          <div class="flex items-center justify-center rounded-md bg-blue-100/70 p-0.5">
            <IconCheck class="size-4! text-blue-400" filled />
          </div>
          <span class="text-sm text-gray-700">{{ permision }}</span>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
