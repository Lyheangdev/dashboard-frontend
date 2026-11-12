import type { InjectionKey } from 'vue';

export const COLLAPSE_KEY = Symbol('COLLAPSE_KEY');
export const COLLAPSE_HISTORY_KEY: InjectionKey<ICollapseHistory> = Symbol('COLLAPSE_HISTORY_KEY');
