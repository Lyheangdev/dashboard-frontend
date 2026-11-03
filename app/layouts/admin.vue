<script setup lang="ts">
import IconCollapse from '~~/public/icons/chevron-collapse.svg';

import IconDashboard from '~~/public/dashboard/dashboar-home.svg';
import IconSettings from '~~/public/dashboard/settings.svg';
import IconReports from '~~/public/dashboard/reports.svg';
import IconDatabase from '~~/public/icons/database.svg';
import IconLogging from '~~/public/icons/logging.svg';
import IconClock from '~~/public/icons/clock.svg';
import IconHistory from '~~/public/icons/history.svg';
import IconClose from '~~/public/icons/close.svg';

const menu: MenuList = [
  {
    key: 'menu-dashboard-key',
    label: 'Dashboard',
    icon: IconDashboard,
    href: ROUTE.$dashboard('/dashboard/summury'),
    submenu: [
      {
        key: 'section-overview-summury-key',
        label: 'Overview Summary',
        subitems: [
          {
            key: 'submenu-dashboard-key',
            label: 'Dashboard',
            href: ROUTE.$dashboard('/dashboard/summury'),
          },
        ],
      },
    ],
  },
  {
    key: 'menu-input-yield-key',
    label: 'Input Yield',
    icon: IconReports,
    href: ROUTE.$yield('/yield/input'),
    submenu: [
      {
        key: 'section-tracking-input-key',
        label: 'Tracking Yield',
        subitems: [
          {
            key: 'submenu-input-yield-key',
            label: 'Input Yield',
            href: ROUTE.$yield('/yield/input'),
          },
        ],
      },
    ],
  },
  {
    key: 'menu-manage-resource-key',
    label: 'Manage Resource',
    icon: IconDatabase,
    href: ROUTE.$miscellaneous('/miscellaneous/line'),
    submenu: [
      {
        key: 'section-miscellaneous-key',
        label: 'Miscellaneous',
        subitems: [
          {
            key: 'submenu-line-key',
            label: 'Manage Line',
            href: ROUTE.$miscellaneous('/miscellaneous/line'),
          },
          {
            key: 'submenu-project-line-key',
            label: 'Manage Project Line',
            href: ROUTE.$miscellaneous('/miscellaneous/project-line'),
          },
          {
            key: 'submenu-project-key',
            label: 'Manage Project',
            href: ROUTE.$miscellaneous('/miscellaneous/project'),
          },
          {
            key: 'submenu-workorder-key',
            label: 'Manage Workorder',
            href: ROUTE.$miscellaneous('/miscellaneous/workorder'),
          },
          {
            key: 'submenu-customer-key',
            label: 'Manage customer',
            href: ROUTE.$miscellaneous('/miscellaneous/customer'),
          },
          {
            key: 'submenu-line-owner-key',
            label: 'Manage Line Owner',
            href: ROUTE.$miscellaneous('/miscellaneous/line-owner'),
          },
        ],
      },
    ],
  },
  {
    key: 'menu-logging-key',
    label: 'Logging',
    icon: IconLogging,
    href: ROUTE.$log('/log/operation-log'),
    submenu: [
      {
        key: 'section-logging-key',
        label: 'Auditing & Logging',
        subitems: [
          {
            key: 'submenu-operation-logging-key',
            label: 'Operation Logging',
            href: ROUTE.$log('/log/operation-log'),
          },
          {
            key: 'submenu-error-logging-key',
            label: 'Error Logging',
            href: ROUTE.$log('/log/error-log'),
          },
        ],
      },
    ],
  },
  {
    key: 'menu-setting-key',
    label: 'Settings',
    icon: IconSettings,
    href: ROUTE.$settings('/settings/roles'),
    submenu: [
      {
        key: 'section-permission-privilege-key',
        label: 'Role & Permission',
        subitems: [
          {
            key: 'submenu-manage-role-key',
            label: 'Manage Role',
            href: ROUTE.$settings('/settings/roles'),
          },
          {
            key: 'submenu-manage-permission-key',
            label: 'Manage Permission',
            href: ROUTE.$settings('/settings/permissions'),
          },
          {
            key: 'submenu-config-role-permission-key',
            label: 'Config Role & Permission',
            href: ROUTE.$settings('/settings/config-role-permission'),
          },
        ],
      },
      {
        key: 'section-user-key',
        label: 'Internal User',
        subitems: [
          {
            key: 'submenu-manage-user-key',
            label: 'Manage Users',
            href: ROUTE.$settings('/settings/users'),
          },
          {
            key: 'submenu-bind-user-key',
            label: 'Manage User Access',
            href: ROUTE.$settings('/settings/link-access'),
          },
        ],
      },
      {
        key: 'section-setting-miscellaneous-key',
        label: 'Miscellaneous',
        subitems: [
          {
            key: 'submenu-setting-my-profile-key',
            label: 'Personal Preference',
            href: ROUTE.$settings('/settings/my-profile'),
          },
          {
            key: 'submenu-setting-miscellaneous-key',
            label: 'Configure SSE',
            href: '#',
          },
        ],
      },
    ],
  },
];

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

const activeMenu = ref<Menu | null>();

const isCollapse = ref(false);
const isCollapseHistory = ref(true);

const route = useRoute();
const router = useRouter();

const handleToggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

const handleToggleCollapseHistory = () => {
  isCollapseHistory.value = !isCollapseHistory.value;
};

const handleMenuClick = (href: string) => {
  const currentMenu = (menu || []).find((m) => m?.href == href);
  if (!currentMenu) {
    activeMenu.value = null;
    return;
  }
  activeMenu.value = currentMenu;
  router.push(href);
};

provide(COLLAPSE_KEY, isCollapse);
provide(COLLAPSE_HISTORY_KEY, isCollapseHistory);

const validateRoute = () => {
  const original = route.path.split('/');
  original.shift(); //-- omit first path
  original.pop(); //-- omit the last path

  const joinPath = original.join('/') ? `/${original.join('/')}` : original.join('/');
  const currentMenu = joinPath ? menu.find((m) => m?.href?.startsWith(joinPath)) : null;

  if (!currentMenu) {
    activeMenu.value = null;
    return;
  }

  activeMenu.value = currentMenu;
  router.push(route.path || activeMenu.value?.href || '');
};

onMounted(() => {
  validateRoute();
});
</script>

<template>
  <div class="bg-primary relative flex">
    <div
      class="relative flex bg-white"
      :class="{
        'bg-primary! transition-colors duration-150 ease-linear': isCollapse,
      }"
    >
      <MainMenu :active-menu-key="activeMenu?.href || ''" :menu="menu" @click="handleMenuClick" />
      <SubMenu :menu="activeMenu" />

      <button
        class="ease absolute top-0 right-0 z-30 translate-3/5 cursor-pointer transition-transform duration-150"
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

    <div
      class="relative flex max-h-screen grow scrollbar-none flex-col overflow-y-auto scroll-smooth"
    >
      <slot />
    </div>

    <div v-if="isCollapseHistory" class="h-screen max-h-screen max-w-52 min-w-52 bg-white py-3.5">
      <div class="pb-2.5">
        <div class="relative flex items-center gap-2 px-3">
          <div class="rounded-lg bg-blue-400/10 p-1">
            <IconHistory class="size-5! text-blue-400" filled />
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-700">System History</h4>
            <p class="text-[10px] text-gray-500">Last 20 accessibilty</p>
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
  </div>
</template>
