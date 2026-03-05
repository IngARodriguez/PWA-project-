import { Preferences } from '@capacitor/preferences';

export const StorageService = {
  async get(key: string): Promise<string | null> {
    const { value } = await Preferences.get({ key });
    return value;
  },

  async getJSON<T>(key: string): Promise<T | null> {
    const value = await this.get(key);
    if (!value) return null;
    try {
      return JSON.parse(value) as T;
    } catch {
      return null;
    }
  },

  async set(key: string, value: string): Promise<void> {
    await Preferences.set({ key, value });
  },

  async setJSON<T>(key: string, value: T): Promise<void> {
    await this.set(key, JSON.stringify(value));
  },

  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  },

  async clear(): Promise<void> {
    await Preferences.clear();
  },

  async keys(): Promise<string[]> {
    const { keys } = await Preferences.keys();
    return keys;
  },
};
