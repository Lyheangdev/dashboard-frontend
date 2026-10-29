type ROUTE_SETTING_TYPE =
  | '/settings/roles'
  | '/settings/permissions'
  | '/settings/users'
  | '/settings/link-access'
  | '/settings/config-role-permission';

export const ROUTE = {
  HOME: '/',
  ADMIN: '/admin',
  AUTH: '/auth',

  $settings: function (path: ROUTE_SETTING_TYPE) {
    return `${this.ADMIN}${path}`;
  },
} as const;
