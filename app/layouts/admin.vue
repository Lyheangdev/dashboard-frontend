<script setup lang="ts">
import IconCollapse from '~~/public/icons/chevron-collapse.svg';

import IconClock from '~~/public/icons/clock.svg';
import IconHistory from '~~/public/icons/history.svg';
import IconClose from '~~/public/icons/close.svg';
import { useSystemMenu } from '~/composables/menu/useSystemMenu';

const { menu, activeMenu, activeMenuPath, handleMenuClick } = useSystemMenu();

const {
  isSubmenuCollapse,
  isHistoryCollapse,
  handleToggleCollapseHistory,
  handleToggleCollapseSubmenu,
} = useCollapseMenu();

const accesshistory = [
  {
    time: '2026-09-24 10:30:34',
    user: 'superadmin@sviaec.com',
  },
  {
    time: '2026-09-24 13:30:34',
    user: 'vichetsome@sviaec.com',
  },
  {
    time: '2026-09-25 08:30:34',
    user: 'chanmonica@sviaec.com',
  },
];
</script>

<template>
  <div class="bg-primary relative flex">
    <div
      class="relative flex bg-white"
      :class="{
        'bg-primary! transition-colors duration-150 ease-linear': isSubmenuCollapse,
      }"
    >
      <MainMenu :active-menu-key="activeMenuPath || ''" :menu="menu" @click="handleMenuClick" />
      <SubMenu :menu="activeMenu" />

      <button
        class="ease absolute top-0 right-0 z-30 translate-3/5 cursor-pointer transition-transform duration-150"
        :class="[{ 'rotate-180': isSubmenuCollapse }]"
        @click.stop="handleToggleCollapseSubmenu"
      >
        <IconCollapse
          class="size-6! fill-white text-blue-400"
          :class="{
            'text-blue-300!': isSubmenuCollapse,
          }"
          filled
        />
      </button>
    </div>

    <div
      class="relative flex max-h-screen grow scrollbar-none flex-col overflow-y-auto scroll-smooth"
    >
      <slot />
    </div>

    <Transition name="slide-right" mode="out-in">
      <div
        v-if="isHistoryCollapse"
        class="fixed top-0 right-0 bottom-0 h-screen max-h-screen max-w-52 min-w-52 bg-white py-3.5 shadow-[-5px_0px_10px_0px_rgba(0,0,0,0.1)]"
      >
        <div class="pb-2.5">
          <div class="relative flex items-center gap-2 px-3">
            <div class="rounded-lg bg-blue-400/10 p-1">
              <IconHistory class="size-5! text-blue-400" filled />
            </div>
            <div>
              <h4 class="text-sm font-semibold text-gray-700">System History</h4>
              <p class="text-[10px] text-gray-500">Last 20 user accesses</p>
            </div>

            <button
              @click.stop="handleToggleCollapseHistory"
              class="absolute top-1 right-2.5 cursor-pointer"
            >
              <IconClose class="size-5! text-blue-400" filled />
            </button>
          </div>

          <div class="my-2 h-px w-full bg-gray-200/60" />

          <div class="mt-1.5 flex flex-col gap-3 px-2">
            <div
              v-for="(history, i) in accesshistory"
              :key="history.user"
              class="relative flex flex-col py-1.5 pr-2 pl-10"
            >
              <div
                class="absolute top-1.5 left-2 flex size-5 items-center justify-center rounded-full bg-blue-300"
              >
                <!-- <div class="z-10 size-2 rounded-full bg-white" /> -->
                <IconClock class="z-10 m-0.5 size-3.5! text-white" filled />
                <div
                  v-if="i != accesshistory.length - 1"
                  class="absolute top-1/2 z-0 h-12 w-px border-r border-dashed border-r-gray-300/80 text-gray-700"
                />
              </div>
              <p class="text-[11px] text-gray-400">{{ history.time }}</p>
              <p class="text-[11px] text-gray-700">{{ history.user }}</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-right-enter-active {
  transition: all 300ms ease;
}
.slide-right-leave-active {
  transition: all 300ms ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
