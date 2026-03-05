import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Capacitor } from '@capacitor/core';

export const NotificationService = {
  async requestPermission(): Promise<boolean> {
    if (!Capacitor.isNativePlatform()) return false;

    const permission = await PushNotifications.requestPermissions();
    if (permission.receive === 'granted') {
      await PushNotifications.register();
      return true;
    }
    return false;
  },

  async addListeners(callbacks: {
    onRegistration?: (token: string) => void;
    onNotification?: (notification: unknown) => void;
    onError?: (error: unknown) => void;
  }): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;

    if (callbacks.onRegistration) {
      await PushNotifications.addListener('registration', (token) => {
        callbacks.onRegistration?.(token.value);
      });
    }

    if (callbacks.onNotification) {
      await PushNotifications.addListener('pushNotificationReceived', (notification) => {
        callbacks.onNotification?.(notification);
      });
    }

    if (callbacks.onError) {
      await PushNotifications.addListener('registrationError', (error) => {
        callbacks.onError?.(error);
      });
    }
  },

  async scheduleLocal(options: {
    title: string;
    body: string;
    id?: number;
    schedule?: { at: Date };
  }): Promise<void> {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: options.title,
          body: options.body,
          id: options.id ?? Date.now(),
          schedule: options.schedule,
        },
      ],
    });
  },

  async removeAllListeners(): Promise<void> {
    if (!Capacitor.isNativePlatform()) return;
    await PushNotifications.removeAllListeners();
  },
};
