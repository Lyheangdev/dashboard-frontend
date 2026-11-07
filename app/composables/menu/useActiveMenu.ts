export const useActiveMenuPath = () => {
  const route = useRoute();

  const activeMenuPath = computed(() => {
    return ROUTE_MENU.find((mp) => route.path.startsWith(mp)) || '';
  });

  return {
    activeMenuPath,
    routePath: computed(() => route.fullPath),
  };
};
