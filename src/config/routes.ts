export const ROUTES = {
  ROOT: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  TABS: {
    ROOT: '/tabs',
    HOME: '/tabs/home',
    NOTIFICATIONS: '/tabs/notifications',
    PROFILE: '/tabs/profile',
    SETTINGS: '/tabs/settings',
  },
} as const;
