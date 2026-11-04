type ROUTE_SETTING_TYPE =
  | '/settings'
  | '/settings/roles'
  | '/settings/permissions'
  | '/settings/users'
  | '/settings/link-access'
  | '/settings/config-role-permission'
  | '/settings/my-profile';

type ROUTE_DASHBOARD_TYPE = '/dashboard' | '/dashboard/summury';
type ROUTE_YIELD_TYPE = '/yield' | '/yield/input';
type ROUTE_LOG_TYPE = '/log' | '/log/operation-log' | '/log/error-log';
type ROUTE_MISCELLANEOUS_TYPE =
  | '/miscellaneous'
  | '/miscellaneous/line'
  | '/miscellaneous/line/create'
  | '/miscellaneous/project-line'
  | '/miscellaneous/project-line/create'
  | '/miscellaneous/project'
  | '/miscellaneous/project/create'
  | '/miscellaneous/customer'
  | '/miscellaneous/customer/create'
  | '/miscellaneous/workorder'
  | '/miscellaneous/workorder/create'
  | '/miscellaneous/line-owner'
  | '/miscellaneous/line-owner/create'
  | '/miscellaneous/joborder'
  | '/miscellaneous/joborder/create';

export const ROUTE = {
  HOME: '/',
  ADMIN: '/admin',
  AUTH: '/auth',

  $dashboard: function (path: ROUTE_DASHBOARD_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $yield: function (path: ROUTE_YIELD_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $log: function (path: ROUTE_LOG_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $miscellaneous: function (path: ROUTE_MISCELLANEOUS_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $settings: function (path: ROUTE_SETTING_TYPE) {
    return `${this.ADMIN}${path}`;
  },
} as const;
