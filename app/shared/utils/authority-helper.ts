import type { EMenu, EResource } from './authorities';

//--- Check exactly one menu exist
export const checkExactOneMenuExist = (menus: string[], menuCondition: EMenu) => {
  const menusSet = new Set(menus);
  return menusSet.has(menuCondition);
};

//--- Check some menu
export const checkSomeMenusExist = (menus: string[], menuConditions: Array<EMenu>) => {
  const isSomeMenuMatched = (menus || []).some((m) => menuConditions.includes(m as never));
  return isSomeMenuMatched;
};

//--- Check every menu
export const checkAllMenusExist = (menus: string[], menuConditions: Array<EMenu>) => {
  const isSomeMenuMatched = (menus || []).every((m) => menuConditions.includes(m as never));
  return isSomeMenuMatched;
};

//--- Check some resource
export const checkSomeResourceExist = (
  resources: string[],
  resourceConditions: Array<EResource>,
) => {
  const isSomeResourceMatched = (resources || []).some((r) =>
    resourceConditions.includes(r as never),
  );
  return isSomeResourceMatched;
};
