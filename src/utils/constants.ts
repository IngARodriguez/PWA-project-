export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  ONBOARDING_COMPLETE: 'onboarding_complete',
} as const;

export const API_TIMEOUT = 30000;

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
} as const;
