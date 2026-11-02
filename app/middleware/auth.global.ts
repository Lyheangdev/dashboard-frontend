export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthStore();

  //-- prevent arbitrary navigation for unauthenticated user
  if (!isAuthenticated && to.path !== '/admin/login') {
    return navigateTo('/admin/login', { replace: true });
  }

  //-- prevent authenticated user to navigate to login page
  if (isAuthenticated && to.path === '/admin/login') {
    return navigateTo('/admin', { replace: true });
  }

  if (isAuthenticated && to.path === '/admin') {
    return navigateTo(ROUTE.$dashboard('/dashboard/summury'), { replace: true });
  }
});
