<script setup lang="ts">
import IconCollapse from '~~/public/icons/chevron-collapse.svg'

import IconDashboard from '~~/public/dashboard/dashboar-home.svg'
import IconSettings from '~~/public/dashboard/settings.svg'
import IconReports from '~~/public/dashboard/reports.svg'
import IconDatabase from '~~/public/icons/database.svg'
import IconLogging from '~~/public/icons/logging.svg'
import IconClock from '~~/public/icons/clock.svg'
import IconHistory from '~~/public/icons/history.svg'

const menu: MenuList = [
  {
    key: 'menu-dashboard-key',
    label: 'Dashboard',
    icon: IconDashboard,
    submenu: [
      {
        key: 'section-layout-dashboard-key',
        label: 'Layout Dashboard',
        subitems: [
          {
            key: 'submenu-home-key',
            label: 'Home',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    key: 'menu-input-yield-key',
    label: 'Input Yield',
    icon: IconReports,
    submenu: [
      {
        key: 'section-tracking-input-key',
        label: 'Tracking Yield',
        subitems: [
          {
            key: 'submenu-input-yield-key',
            label: 'Input Yield',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    key: 'menu-manage-resource-key',
    label: 'Manage Resource',
    icon: IconDatabase,
    submenu: [
      {
        key: 'section-miscellaneous-key',
        label: 'Miscellaneous',
        subitems: [
          {
            key: 'submenu-line-key',
            label: 'Manage Line',
            href: '#',
          },
          {
            key: 'submenu-line-status-key',
            label: 'Manage Line Status',
            href: '#',
          },
          {
            key: 'submenu-project-key',
            label: 'Manage Project',
            href: '#',
          },
          {
            key: 'submenu-workorder-key',
            label: 'Manage Workorder',
            href: '#',
          },
          {
            key: 'submenu-customer-key',
            label: 'Manage customer',
            href: '#',
          },
          {
            key: 'submenu-line-owner-key',
            label: 'Manage Line Owner',
            href: '#',
          },
          {
            key: 'submenu-dashboard-key',
            label: 'Manage Smart Dashboard',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    key: 'menu-logging-key',
    label: 'Logging',
    icon: IconLogging,
    submenu: [
      {
        key: 'section-logging-key',
        label: 'Auditing & Logging',
        subitems: [
          {
            key: 'submenu-operation-logging-key',
            label: 'Operation Logging',
            href: '#',
          },
          {
            key: 'submenu-error-logging-key',
            label: 'Error Logging',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    key: 'menu-setting-key',
    label: 'Settings',
    icon: IconSettings,
    submenu: [
      {
        key: 'section-permission-privilege-key',
        label: 'Role & Permission',
        subitems: [
          {
            key: 'submenu-manage-role-key',
            label: 'Manage Role',
            href: '#',
          },
          {
            key: 'submenu-manage-permission-key',
            label: 'Manage Permission',
            href: '#',
          },
        ],
      },
      {
        key: 'section-user-key',
        label: 'Internal User',
        subitems: [
          {
            key: 'submenu-manage-user-key',
            label: 'Manage User',
            href: '#',
          },
        ],
      },
      {
        key: 'section-setting-miscellaneous-key',
        label: 'Miscellaneous',
        subitems: [
          {
            key: 'submenu-setting-miscellaneous-key',
            label: 'Configure SSE',
            href: '#',
          },
        ],
      },
    ],
  },
]

const activeMenu = ref<Menu>()
const isCollapse = ref(false)

const handleToggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}

const handleMenuClick = (key: string) => {
  const currentMenu = (menu || []).find((m) => m?.key == key)
  if (!currentMenu) return
  activeMenu.value = currentMenu
}

provide(COLLAPSE_KEY, isCollapse)

onMounted(() => {
  activeMenu.value = menu[0]
})
</script>

<template>
  <div class="bg-primary relative flex">
    <div
      class="relative flex bg-white"
      :class="{
        'bg-primary! transition-colors duration-150 ease-linear': isCollapse,
      }"
    >
      <MainMenu :active-menu-key="activeMenu?.key || ''" :menu="menu" @click="handleMenuClick" />
      <SubMenu :menu="activeMenu" />

      <button
        class="ease absolute top-0 right-0 translate-3/5 cursor-pointer transition-transform duration-150"
        :class="{
          'rotate-180': isCollapse,
        }"
        @click.stop="handleToggleCollapse"
      >
        <IconCollapse
          class="size-6! fill-white text-blue-400"
          :class="{
            'text-blue-300!': isCollapse,
          }"
          filled
        />
      </button>
    </div>
    <div class="relative grow overflow-hidden">
      <slot />
    </div>
    <div class="h-screen max-h-screen max-w-96 bg-white px-5 py-3.5">
      <div class="pb-2.5">
        <div class="flex items-center gap-2">
          <div class="rounded-full bg-blue-400/10 p-0.5">
            <IconHistory class="size-6! text-blue-400" filled />
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-700">System History</h4>
            <p class="text-[10px] text-gray-500">Reatime 50 latest access</p>
          </div>
        </div>
        <div class="my-2 h-px w-full bg-gray-200" />
        <div class="flex flex-col gap-3">
          <div class="flex gap-1.5 border-l border-dashed border-gray-200 pl-2">
            <IconClock class="mt-1 size-4! text-gray-400" filled />
            <div>
              <p class="text-xs text-gray-600 lowercase">Lyheangdev@gmail.com</p>
              <p class="text-xs text-gray-400">11-09-2026 11:30:45</p>
            </div>
          </div>

          <div class="flex gap-1.5 border-l border-dashed border-gray-200 pl-2">
            <IconClock class="mt-1 size-4! text-gray-400" filled />
            <div>
              <p class="text-xs text-gray-600 lowercase">vichetsom@gmail.com</p>
              <p class="text-xs text-gray-400">11-09-2026 11:30:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
