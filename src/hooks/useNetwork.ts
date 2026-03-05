import { useEffect } from 'react';
import { Network } from '@capacitor/network';
import { Capacitor } from '@capacitor/core';
import { useAppStore } from '@/store';

export const useNetwork = () => {
  const { isOnline, setIsOnline } = useAppStore();

  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      const handler = Network.addListener('networkStatusChange', (status) => {
        setIsOnline(status.connected);
      });
      Network.getStatus().then((status) => setIsOnline(status.connected));
      return () => {
        handler.then((h) => h.remove());
      };
    } else {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, [setIsOnline]);

  return { isOnline };
};
