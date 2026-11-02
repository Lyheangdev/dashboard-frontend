export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated && to.path !== '/admin/login') {
    return navigateTo('/admin/login');
  }

  if (isAuthenticated && to.path === '/admin/login') {
    return navigateTo('/admin');
  }
});
