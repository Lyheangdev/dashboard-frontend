<script setup lang="ts">
import IconProfile from '~~/public/icons/profile.svg';
import IconHistory from '~~/public/icons/history.svg';

defineProps<{
  pageLabel: string;
  containerClass?: string;
}>();

const historyPanel = inject(COLLAPSE_HISTORY_KEY);

const handleToggleHistory = () => {
  if (!historyPanel) return;
  historyPanel.handleToggleCollapseHistory();
};
</script>

<template>
  <div class="relative mx-6 mt-4 mb-2 flex flex-col gap-2.5">
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-0.5">
        <h4 class="text-2xl font-bold text-gray-600">{{ pageLabel }}</h4>
        <div class="flex items-center gap-1.5">
          <span class="text-[13px] font-bold text-gray-600">Path:</span>
          <Breadcrumb />
        </div>
      </div>
      <div class="relative flex items-center gap-3.5">
        <NotificationBell />
        <div class="h-4 w-px bg-blue-300" />
        <button
          class="flex cursor-pointer items-center gap-1.5 rounded-md"
          @click.stop="handleToggleHistory"
        >
          <IconHistory class="size-4! text-blue-400" filled />
          <span class="text-xs text-blue-400">History</span>
        </button>
        <div class="h-4 w-px bg-blue-300" />
        <!-- Profile -->
        <div
          class="flex items-center gap-1.5 rounded-md border border-blue-200 bg-blue-50 px-2.5 pt-1 pb-1"
        >
          <IconProfile class="size-4.5! text-blue-500" filled />
          <NuxtLink
            :to="ROUTE.$settings('/settings/my-profile')"
            class="cursor-pointer text-sm font-medium text-blue-400 capitalize"
          >
            My profile
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="relative mt-2 flex max-w-full flex-1 flex-col gap-2 rounded-xl bg-white p-2"
      :class="containerClass"
    >
      <slot />
    </div>
  </div>
</template>
