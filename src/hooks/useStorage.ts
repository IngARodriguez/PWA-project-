import { useState, useCallback } from 'react';
import { StorageService } from '@/services';

export function useStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const load = useCallback(async () => {
    const value = await StorageService.getJSON<T>(key);
    if (value !== null) {
      setStoredValue(value);
    }
    return value ?? initialValue;
  }, [key, initialValue]);

  const save = useCallback(
    async (value: T) => {
      setStoredValue(value);
      await StorageService.setJSON(key, value);
    },
    [key]
  );

  const remove = useCallback(async () => {
    setStoredValue(initialValue);
    await StorageService.remove(key);
  }, [key, initialValue]);

  return { value: storedValue, load, save, remove };
}
