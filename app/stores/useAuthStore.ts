import { defineStore } from 'pinia';

interface IUser {
  id?: number;
  full_name?: string;
  email?: string;
  bio?: string;
  profile_url?: string;
  role?: string;
  isBanned?: boolean;
  status?: number;
  permissions?: string[];
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
      return state?.user?.full_name || '';
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
