export default defineNuxtPlugin(async () => {
  type ISingleResponse<T> = {
    status: string;
    message: string;
    data: T;
  };

  type ISingleReponseError<T> = ISingleResponse<T> & {
    error: {
      code: string;
      details: null;
      message: string | null;
    };
  };

  interface IUser {
    id: number;
    full_name?: string;
    email?: string;
    bio?: string;
    profile_url?: string;
    role: string;
    isBanned: boolean;
    status: number;
    code: string;
    permissions: string[];
    created_at: string;
    updated_at: string;
  }
  const requestFetch = useRequestFetch();
  const { setUser, isAuthenticated } = useAuthStore();

  // acquire check with backend if current user is literally expired
  if (import.meta.server && !isAuthenticated) {
    try {
      const response = await requestFetch<ISingleResponse<IUser>>(
        'http://localhost:8000/api/v1/auth/readme',
        { credentials: 'include' },
      );
      
      setUser({
        id: response?.data?.id,
        email: response?.data?.email,
        bio: response?.data?.bio,
        full_name: response?.data?.full_name,
        profile_url: response?.data?.profile_url,
        isBanned: response?.data?.isBanned,
        status: response?.data?.status,
        role: response?.data?.role,
        permissions: response?.data?.permissions,
      });
    } catch (error) {}
  }
});
