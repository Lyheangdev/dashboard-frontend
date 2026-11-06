export default defineNuxtRouteMiddleware((to) => {
  //-- remove trailing slash
  const path = to.path.replace(/\/+$/, '') || '/';
  if (path !== to.path) {
    return navigateTo(
      {
        path,
        query: to.query,
        hash: to.hash,
      },
      {
        replace: true,
        redirectCode: 301,
      },
    );
  }
});
