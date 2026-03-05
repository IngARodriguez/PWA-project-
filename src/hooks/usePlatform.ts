import { useMemo } from 'react';
import { Capacitor } from '@capacitor/core';
import { isPlatform } from '@ionic/react';

export const usePlatform = () => {
  return useMemo(() => ({
    isNative: Capacitor.isNativePlatform(),
    isWeb: !Capacitor.isNativePlatform(),
    isIos: isPlatform('ios'),
    isAndroid: isPlatform('android'),
    isMobile: isPlatform('mobile'),
    isDesktop: isPlatform('desktop'),
    platform: Capacitor.getPlatform() as 'ios' | 'android' | 'web',
  }), []);
};
