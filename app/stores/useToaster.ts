import { defineStore } from 'pinia';

interface IToaster {
  isOpen?: boolean;
  title?: string;
  description?: string;
  duration?: number;
  type?: 'success' | 'error';
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center' | 'center';
}

export const useToaster = defineStore('toaster', {
  state: (): IToaster => ({
    isOpen: false,
    title: '',
    description: '',
    duration: 3,
    type: 'success',
    position: 'top-right',
  }),
  actions: {
    open(data: IToaster) {
      if (this.isOpen == data.isOpen) return;
      this.isOpen = data.isOpen;
      this.title = data.title;
      this.description = data.description;
      this.duration = data.duration || 3;
      this.type = data.type || 'success';
      this.position = data.position || 'top-right';
    },
    close() {
      this.isOpen = false;
      this.title = '';
      this.description = '';
      this.duration = 3;
      this.type = 'success';
      this.position = 'top-right';
    },
  },
});
