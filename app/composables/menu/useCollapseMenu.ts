export const useCollapseMenu = () => {
  const isSubmenuCollapse = ref(false);
  const isHistoryCollapse = ref(false);

  const handleToggleCollapseSubmenu = () => {
    isSubmenuCollapse.value = !isSubmenuCollapse.value;
  };

  const handleToggleCollapseHistory = () => {
    isHistoryCollapse.value = !isHistoryCollapse.value;
  };

  //-- Injection collapse keys
  provide(COLLAPSE_KEY, isSubmenuCollapse); //-- for menu collapse
  provide(COLLAPSE_HISTORY_KEY, {
    isHistoryCollapse,
    handleToggleCollapseHistory,
  });

  // -- for history collapse

  return {
    isSubmenuCollapse,
    isHistoryCollapse,
    handleToggleCollapseSubmenu,
    handleToggleCollapseHistory,
  };
};
