import type { EMenu, EPermission, EResource } from './authorities';

//*--- Check if exact one menu matched
export const checkExactOneMenuExist = (menus: string[], menuCondition: EMenu) => {
  return new Set(menus).has(menuCondition);
};

//*--- Check if some menu matched
export const checkSomeMenusExist = (menus: string[], menuConditions: Array<EMenu>) => {
  return (menus || []).some((m) => new Set(menuConditions).has(m as never));
};

//*--- Check if every menu matched
export const checkAllMenusExist = (menus: string[], menuConditions: Array<EMenu>) => {
  return (menus || []).every((m) => new Set(menuConditions).has(m as never));
};

//*--- Check if exact one resource matched
export const checkExactOneResourceExist = (resources: string[], resourceCondition: EResource) => {
  return new Set(resources).has(resourceCondition);
};

//*-- Check if some resources matched
export const checkSomeResourceExist = (
  resources: string[],
  resourceConditions: Array<EResource>,
) => {
  return (resources || []).some((r) => new Set(resourceConditions).has(r as never));
};

//*-- Check if exact one permission matched
export const checkExactOnePermissionExist = (
  permissions: string[],
  permissionCondition: EPermission,
) => {
  return new Set(permissions).has(permissionCondition);
};

//*-- Check if some permissions matched
export const checkSomePermissionExist = (
  permissions: string[],
  permissionCondition: EPermission[],
) => {
  return permissions.some((p) => new Set(permissionCondition).has(p as never));
};
