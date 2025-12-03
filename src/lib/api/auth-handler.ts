// Global authentication error handler
// This module provides a way for the API client to trigger auth state updates

type AuthClearCallback = () => void;

let authClearCallback: AuthClearCallback | null = null;

export function setAuthClearCallback(callback: AuthClearCallback) {
  authClearCallback = callback;
}

export function clearAuthOnError() {
  if (authClearCallback) {
    authClearCallback();
  }
}
