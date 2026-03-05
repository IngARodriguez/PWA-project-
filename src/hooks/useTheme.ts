import { useEffect, useCallback } from 'react';
import { StatusBar, Style } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { useAppStore } from '@/store';
import { StorageService } from '@/services';
import { STORAGE_KEYS } from '@/utils/constants';

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const { theme, setTheme } = useAppStore();

  const applyTheme = useCallback(
    async (newTheme: Theme) => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = newTheme === 'dark' || (newTheme === 'system' && prefersDark);

      document.documentElement.classList.toggle('ion-palette-dark', isDark);

      if (Capacitor.isNativePlatform()) {
        await StatusBar.setStyle({ style: isDark ? Style.Dark : Style.Light });
      }

      setTheme(newTheme);
      await StorageService.set(STORAGE_KEYS.THEME, newTheme);
    },
    [setTheme]
  );

  useEffect(() => {
    StorageService.get(STORAGE_KEYS.THEME).then((savedTheme) => {
      if (savedTheme) {
        applyTheme(savedTheme as Theme);
      }
    });
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  }, [theme, applyTheme]);

  return { theme, setTheme: applyTheme, toggleTheme };
};
