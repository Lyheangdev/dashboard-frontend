import type { IAuthUser } from '~/shared/types/type.user';

export default defineNuxtPlugin(async () => {
  const runtimeConfig = useRuntimeConfig();
  const requestFetch = useRequestFetch();

  const { setUser, isAuthenticated } = useAuthStore();

  //-- Acquire to check with backend if current user is literally expired
  if (import.meta.server && !isAuthenticated) {
    try {
      const response = await requestFetch<IApiSingleResponse<IAuthUser>>(
        `${runtimeConfig.public.apiBase}/auth/readme`,
        { credentials: 'include' },
      );

      setUser({
        id: response?.data?.id,
        email: response?.data?.email,
        bio: response?.data?.bio,
        full_name: response?.data?.full_name,
        code: response?.data?.code,
        profile_url: response?.data?.profile_url,
        isBanned: response?.data?.isBanned,
        status: response?.data?.status,
        role: response?.data?.role,
        permissions: response?.data?.permissions,
        views: response?.data?.views,
        resources: response?.data?.resources,
        created_at: response?.data?.created_at,
      });
    } catch (error) {}
  }
});
