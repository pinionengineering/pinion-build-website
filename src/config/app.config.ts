// Centralized application configuration
// This file contains all environment-specific settings bundled at build time

// API Configuration
export const API_CONFIG = {
  upload: {
    baseUrl: 'https://hydrogen.pinion.build/upload',
  },
  payments: {
    baseUrl: 'https://hydrogen.pinion.build/payments',
  },
  pinning: {
    baseUrl: 'https://hydrogen.pinion.build/pinning',
  },
} as const;

// OAuth/OIDC Configuration
export const AUTH_CONFIG = {
  authority: 'https://hydrogen.pinion.build/authen/application/o/pinion-cli',
  clientId: 'R8MTFU93CxcZVnWIs25xvtIUQclXNWehhmBURCIq',
  scope: 'openid email profile user_hint offline_access',
  responseType: 'code',
} as const;

// External Links
export const EXTERNAL_LINKS = {
  githubApp: 'https://github.com/apps/pinion-build',
} as const;

// Feature Flags (for future use)
export const FEATURES = {
  githubIntegration: true,
  billing: true,
} as const;
