type ROUTE_SETTINGS_TYPE =
  | '/settings'
  | '/settings/roles'
  | '/settings/permissions'
  | '/settings/users'
  | '/settings/users/create'
  | '/settings/link-access'
  | '/settings/config-role-permission'
  | '/settings/my-profile';

type ROUTE_DASHBOARD_TYPE = '/dashboard' | '/dashboard/summary';
type ROUTE_YIELD_TYPE = '/yield' | '/yield/input';
type ROUTE_LOG_TYPE = '/log' | '/log/operation-log' | '/log/error-log';
type ROUTE_RESOURCES_TYPE =
  | '/resources'
  | '/resources/line'
  | '/resources/line/create'
  | '/resources/project-line'
  | '/resources/project-line/create'
  | '/resources/project'
  | '/resources/project/create'
  | '/resources/customer'
  | '/resources/customer/create'
  | '/resources/workorder'
  | '/resources/workorder/create'
  | '/resources/line-owner'
  | '/resources/line-owner/create'
  | '/resources/joborder'
  | '/resources/joborder/create'
  | '/resources/process'
  | '/resources/process/create';

export const ROUTE = {
  HOME: '/',
  ADMIN: '/admin',
  AUTH: '/auth',

  $dashboard: function (path: ROUTE_DASHBOARD_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $yield: function (path: ROUTE_YIELD_TYPE, param?: string) {
    const buildPath = param ? `${this.ADMIN}${path}/${param}` : `${this.ADMIN}${path}`;
    return `${buildPath}`;
  },

  $log: function (path: ROUTE_LOG_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $resources: function (path: ROUTE_RESOURCES_TYPE) {
    return `${this.ADMIN}${path}`;
  },

  $settings: function (path: ROUTE_SETTINGS_TYPE) {
    return `${this.ADMIN}${path}`;
  },
} as const;

//* -- Assembly main menu for fast loop up
export const ROUTE_MENU = [
  ROUTE.$dashboard('/dashboard'),
  ROUTE.$yield('/yield'),
  ROUTE.$log('/log'),
  ROUTE.$resources('/resources'),
  ROUTE.$settings('/settings'),
];
