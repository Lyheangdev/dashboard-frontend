import { defineStore } from 'pinia';
import type { IUserStore } from '~/shared/types/type.user';

interface IAuthState {
  user: IUserStore | null;
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
    setUser(user: IUserStore) {
      this.user = user;
      this.isAuthenticated = true;
    },
    clearnAuth() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
