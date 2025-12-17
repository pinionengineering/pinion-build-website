import { UserManager } from 'oidc-client-ts';
import { AUTH_CONFIG } from '@/config/app.config';

let userManager: UserManager | null = null;

function getUserManager() {
  if (!userManager && typeof window !== 'undefined') {
    userManager = new UserManager({
      authority: AUTH_CONFIG.authority,
      client_id: AUTH_CONFIG.clientId,
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: AUTH_CONFIG.scope,
      response_type: AUTH_CONFIG.responseType,
    });
  }
  return userManager;
}

/**
 * Attempts to refresh the access token using the refresh token.
 *
 * This uses the OIDC silent sign-in flow (signinSilent) which:
 * - Uses the existing refresh token (from offline_access scope)
 * - Gets a new access token with updated claims
 * - Doesn't require user interaction
 *
 * This is useful when:
 * - User just signed up and JWT has stale group claims (e.g., no "Pinning Service" group yet)
 * - Access token is expired but refresh token is still valid
 * - Need to get updated claims from the identity provider
 *
 * @returns Promise<boolean> - true if refresh succeeded and got valid token, false otherwise
 */
export async function refreshAccessToken(): Promise<boolean> {
  try {
    const manager = getUserManager();
    if (!manager) return false;

    // Use refresh token to get new access token
    const user = await manager.signinSilent();
    return !!user && !user.expired;
  } catch (error) {
    // Refresh can fail if:
    // - Refresh token expired (user needs to re-authenticate)
    // - Network error
    // - Identity provider unavailable
    console.warn('Token refresh failed:', error);
    return false;
  }
}
