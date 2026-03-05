import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'system';

interface AppState {
  theme: Theme;
  isOnline: boolean;
  isAppReady: boolean;
  globalLoading: boolean;

  setTheme: (theme: Theme) => void;
  setIsOnline: (isOnline: boolean) => void;
  setIsAppReady: (isReady: boolean) => void;
  setGlobalLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'system',
  isOnline: navigator.onLine,
  isAppReady: false,
  globalLoading: false,

  setTheme: (theme) => set({ theme }),
  setIsOnline: (isOnline) => set({ isOnline }),
  setIsAppReady: (isAppReady) => set({ isAppReady }),
  setGlobalLoading: (globalLoading) => set({ globalLoading }),
}));
