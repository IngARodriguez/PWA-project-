import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ENV } from '@/config/env';
import { API_TIMEOUT, STORAGE_KEYS } from '@/utils/constants';
import { StorageService } from '@/services/storage.service';
import type { ApiError } from '@/types';

const apiClient = axios.create({
  baseURL: ENV.API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (config.headers?.['Skip-Auth']) {
      delete config.headers['Skip-Auth'];
      return config;
    }

    const token = await StorageService.get(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiError>) => {
    if (error.response?.status === 401) {
      await StorageService.remove(STORAGE_KEYS.AUTH_TOKEN);
      await StorageService.remove(STORAGE_KEYS.REFRESH_TOKEN);
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export { apiClient };
