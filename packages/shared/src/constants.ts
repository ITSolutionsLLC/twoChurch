// Application constants

export const APP_NAME = 'twoChurch';
export const APP_VERSION = '1.0.0';

export const API_ENDPOINTS = {
  BASE_URL: process.env.API_BASE_URL || 'http://localhost:3001/api',
  AUTH: '/auth',
  USERS: '/users',
  MEMBERS: '/members',
  EVENTS: '/events',
  DONATIONS: '/donations',
  GROUPS: '/groups',
  SERMONS: '/sermons',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  MEMBERS: '/members',
  EVENTS: '/events',
  DONATIONS: '/donations',
  GROUPS: '/groups',
  SERMONS: '/sermons',
  PROFILE: '/profile',
  SETTINGS: '/settings',
};

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

export const DATE_FORMATS = {
  FULL: 'MMMM dd, yyyy',
  SHORT: 'MM/dd/yyyy',
  TIME: 'hh:mm a',
  DATETIME: 'MMMM dd, yyyy hh:mm a',
};

export const CURRENCIES = {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
};

export const DEFAULT_CURRENCY = CURRENCIES.USD;
