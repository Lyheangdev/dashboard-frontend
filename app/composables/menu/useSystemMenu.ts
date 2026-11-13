import {
  checkExactOneMenuExist,
  checkExactOnePermissionExist,
  checkExactOneResourceExist,
  checkSomePermissionExist,
  checkSomeResourceExist,
} from '~/shared/hepers/authority-helper';

import IconDashboard from '~~/public/dashboard/dashboar-home.svg';
import IconSettings from '~~/public/dashboard/settings.svg';
import IconReports from '~~/public/dashboard/reports.svg';
import IconDatabase from '~~/public/icons/database.svg';
import IconLogging from '~~/public/icons/logging.svg';
import { EMenu, EPermission, EResource, ERole } from '~/shared/hepers/authorities';

/**
 ** Fast Looking Main Point
 *! 1. @activeMenuPath
 *! 2. @isMenuEnableFor
 *! 3. @isResourceEnableFor
 *! 4. @isPermissionEnableFor
 */

export const useSystemMenu = () => {
  const auth = useAuthStore();
  const { activeMenuPath, routePath } = useActiveMenuPath();

  const route = useRoute();
  const router = useRouter();

  const activeMenu = ref<Menu | null>();

  //! Core System Menus Navigation Configuration
  const menu = computed<MenuList>(() => {
    return [
      {
        key: 'dashboard-key',
        label: 'dashboard',
        icon: IconDashboard,
        href: ROUTE.$dashboard('/dashboard'), //! @activeMenuPath
        isAuthorized: checkExactOneMenuExist(auth.user?.views || [], EMenu.VIEW_DASHBOARD_MENU), //! @isMenuEnableFor
        submenu: [
          {
            key: 'overview-key',
            label: 'Overview',
            isAuthorized: checkSomeResourceExist(auth.user?.resources || [], [EResource.DASHBOARD]), //! @isResourceEnableFor
            subitems: [
              {
                key: 'summary-dashboard-key',
                label: 'Dashboard',
                href: ROUTE.$dashboard('/dashboard/summary'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.DASHBOARD_READ,
                ), //! @isPermissionEnableFor
              },
            ],
          },
        ],
      },
      {
        key: 'yield-key',
        label: 'yield',
        icon: IconReports,
        href: ROUTE.$yield('/yield'), //! @activeMenuPath
        isAuthorized: checkExactOneMenuExist(auth.user?.views || [], EMenu.VIEW_YIELD_MENU), //! @isMenuEnableFor
        submenu: [
          {
            key: 'section-tracking-input-key',
            label: 'Production Reports',
            isAuthorized: checkSomeResourceExist(auth.user?.resources || [], [EResource.YIELD]), //! @isResourceEnableFor
            subitems: [
              {
                key: 'insert-yield-smt-key',
                label: 'Insert Yield (SMT)',
                href: ROUTE.$yield('/yield/input'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.YIELD_READ,
                ), //! @isPermissionEnableFor
              },
            ],
          },
        ],
      },
      {
        key: 'menu-manage-resource-key',
        label: 'Manage Resource',
        icon: IconDatabase,
        href: ROUTE.$resources('/resources'), //! @activeMenuPath
        isAuthorized: checkExactOneMenuExist(auth.user?.views || [], EMenu.VIEW_MICELLANEOUS_MENU), //! @isMenuEnableFor
        submenu: [
          {
            key: 'section-resource-key',
            label: 'Manage Resource',
            isAuthorized: checkSomeResourceExist(auth.user?.resources || [], [
              EResource.LINE,
              EResource.LINE_OWNER,
              EResource.JOBORDER,
              EResource.WORKORDER,
              EResource.CUSTOMER,
              EResource.LINE_OWNER,
              EResource.PROCESS,
              EResource.PROJECT,
              EResource.PROJECT_LINE,
            ]), //! @isResourceEnableFor
            subitems: [
              {
                key: 'manage-processes-key',
                label: 'Manage Processes',
                href: ROUTE.$resources('/resources/process'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.PROCESS_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-projects-key',
                label: 'Manage Projects',
                href: ROUTE.$resources('/resources/project'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.PROJECT_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-customer-key',
                label: 'Manage Customers',
                href: ROUTE.$resources('/resources/customer'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.CUSTOMER_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-line-key',
                label: 'Manage Lines',
                href: ROUTE.$resources('/resources/line'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.LINE_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-project-lines-key',
                label: 'Manage Project Lines',
                href: ROUTE.$resources('/resources/project-line'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.PROJECT_LINE_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-workorder-key',
                label: 'Manage Workorders',
                href: ROUTE.$resources('/resources/workorder'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.WORKORDER_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-workorder-key',
                label: 'Manage Joborders',
                href: ROUTE.$resources('/resources/joborder'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.JOBORDER_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-line-owner-key',
                label: 'Manage Line Owners',
                href: ROUTE.$resources('/resources/line-owner'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.LINE_OWNER_READ,
                ), //! @isPermissionEnableFor
              },
            ],
          },
        ],
      },
      {
        key: 'log-key',
        label: 'log',
        icon: IconLogging,
        href: ROUTE.$log('/log'), //! @activeMenuPath
        isAuthorized: checkExactOneMenuExist(auth.user?.views || [], EMenu.VIEW_LOG_MENU), //! @isMenuEnableFor
        submenu: [
          {
            key: 'system-logs-key',
            label: 'System Logs',
            isAuthorized: checkSomeResourceExist(auth.user?.resources || [], [EResource.LOG]), //! @isResourceEnableFor
            subitems: [
              {
                key: 'operation-log-file-key',
                label: 'Operation Log File',
                href: ROUTE.$log('/log/operation-log'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.LOG_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'error-log-file-key',
                label: 'Error Log File',
                href: ROUTE.$log('/log/error-log'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.LOG_READ,
                ), //! @isPermissionEnableFor
              },
            ],
          },
        ],
      },
      {
        key: 'settings-key',
        label: 'settings',
        icon: IconSettings,
        href: ROUTE.$settings('/settings'), //! @activeMenuPath
        isAuthorized: checkExactOneMenuExist(auth.user?.views || [], EMenu.VIEW_SETTINGS_MENU), //! @isMenuEnableFor
        submenu: [
          {
            key: 'access-control-key',
            label: 'Access Control',
            isAuthorized: checkSomeResourceExist(auth.user?.resources || [], [
              EResource.ROLE,
              EResource.PERMISSION,
            ]), //! @isResourceEnableFor
            subitems: [
              {
                key: 'manage-roles-key',
                label: 'Manage Roles',
                href: ROUTE.$settings('/settings/roles'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.ROLE_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-permissions-key',
                label: 'Manage Permissions',
                href: ROUTE.$settings('/settings/permissions'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.PERMISSION_READ, //! @isPermissionEnableFor
                ),
              },
              {
                key: 'config-role-and-permission-key',
                label: 'Config Roles & Permissions',
                href: ROUTE.$settings('/settings/config-role-permission'),
                isAuthorized: checkSomePermissionExist(auth.user?.permissions || [], [
                  EPermission.PERMISSION_READ,
                  EPermission.ROLE_READ,
                ]), //! @isPermissionEnableFor
              },
            ],
          },
          {
            key: 'system-users-key',
            label: 'System Users',
            isAuthorized: checkSomeResourceExist(auth.user?.resources || [], [
              EResource.USER,
              EResource.SYSTEM_ACCESS,
            ]), //! @isResourceEnableFor
            subitems: [
              {
                key: 'manage-user-key',
                label: 'Manage Users',
                href: ROUTE.$settings('/settings/users'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.USER_READ,
                ), //! @isPermissionEnableFor
              },
              {
                key: 'manage-user-access-key',
                label: 'Manage User Access',
                href: ROUTE.$settings('/settings/link-access'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.permissions || [],
                  EPermission.USER_READ,
                ), //! @isPermissionEnableFor
              },
            ],
          },
          {
            key: 'user-account-key',
            label: 'User Account', //! @activeMenuPath
            isAuthorized: checkExactOneResourceExist(auth.user?.resources || [], EResource.ACCOUNT), //! @isResourceEnableFor
            subitems: [
              {
                key: 'my-profile-key',
                label: 'My Profile',
                href: ROUTE.$settings('/settings/my-profile'),
                isAuthorized: checkExactOnePermissionExist(
                  auth.user?.resources || [],
                  EPermission.ACCOUNT_READ,
                ), //! @isPermissionEnableFor
              },
            ],
          },
          {
            key: 'advance-options-key',
            label: 'Advance Options',
            isAuthorized: auth.user?.role === ERole.SUPERADMIN, //! @isResourceEnableFor
            subitems: [
              {
                key: 'configure-sse-key',
                label: 'Configure SSE',
                href: '/sse',
              },
            ],
          },
        ],
      },
    ];
  });

  //**--- Handle menu active and navigation awareness
  const lookUpActiveMenu = (path: string) => {
    const currentMenu = (menu.value || []).find((m) => m?.href == path);
    if (!currentMenu) {
      activeMenu.value = null;
      return;
    }
    activeMenu.value = currentMenu;
  };

  //**-- Since not all menu are allowed to be used by user based on role & permission, we need to seek for at least one section menu
  const lookUpActiveMenuSection = () => {
    const activeMenuSection = (activeMenu.value?.submenu || []).find(
      (ms) => ms?.isAuthorized == true,
    );
    if (!activeMenuSection) return;
    const activeSubmenu = activeMenuSection?.subitems?.[0];
    if (!activeSubmenu) return;
    return activeSubmenu?.href;
  };

  //**-- Run when user click on each menu located at the most left-hand side bar
  const handleMenuClick = (href: string) => {
    lookUpActiveMenu(href);
    const activeMenuSection = (activeMenu.value?.submenu || []).find(
      (ms) => ms?.isAuthorized == true,
    );
    if (!activeMenuSection) return;
    const activeSubmenu = activeMenuSection?.subitems?.[0];
    if (!activeSubmenu) return;
    const defaultNavigatePath = lookUpActiveMenuSection();
    router.push(defaultNavigatePath || '');
  };

  //**-- Run only once when the page is mounted [Page refresh or loaded for the first time]
  const recoverActiveMenu = () => {
    lookUpActiveMenu(activeMenuPath.value);
    if (activeMenuPath.value != routePath.value) return;
    const defaultNavigatePath = lookUpActiveMenuSection();
    if (defaultNavigatePath) router.push(defaultNavigatePath || '');
  };

  watch(
    () => route.fullPath,
    () => {
      recoverActiveMenu();
    },
    { immediate: true }, //* Eager to trigger when mounted and router change
  );

  //! Expose to use external scope
  //? activeMenuPath is the part for the most left-hand side menu: it is define fixed, check above menu this key: @activeMenuPath
  //? routePath === route.fullPath, it is the same
  return { menu, activeMenu, activeMenuPath, routePath, handleMenuClick };
};
