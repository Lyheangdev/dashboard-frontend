import { defineStore } from 'pinia';

interface IUser {
  first_name?: string;
  last_name?: string;
  email: string;
  bio?: string;
  profile_url?: string;
}

interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    user: null,
    isAuthenticated: false,
  }),
  getters: {
    fullName: (state): string => {
      if (!state?.user) return '';
      return `${state?.user?.first_name} ${state?.user?.last_name}`;
    },
  },
  actions: {
    setUser(user: IUser) {
      this.user = user;
      this.isAuthenticated = true;
    },
    clearnAuth() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
