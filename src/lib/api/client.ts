import { API_CONFIG } from '@/config/app.config';
import { clearAuthOnError } from './auth-handler';
import { UserManager } from 'oidc-client-ts';
import { AUTH_CONFIG } from '@/config/app.config';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

interface FetchOptions extends RequestInit {
  requireAuth?: boolean;
}

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

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async getAuthToken(): Promise<string | null> {
    // Get fresh token from UserManager (handles automatic refresh)
    if (typeof window === 'undefined') return null;

    try {
      const manager = getUserManager();
      if (!manager) return null;

      const user = await manager.getUser();
      if (!user || user.expired) {
        return null;
      }

      return user.access_token;
    } catch {
      return null;
    }
  }

  async fetch<T>(
    path: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const { requireAuth = true, headers = {}, ...fetchOptions } = options;

    // Build headers
    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers as Record<string, string>,
    };

    // Add auth if required
    if (requireAuth) {
      const token = await this.getAuthToken();
      if (!token) {
        throw new ApiError('Authentication required', 401);
      }
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    // Make request
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url, {
      ...fetchOptions,
      headers: requestHeaders,
    });

    // Handle errors
    if (!response.ok) {
      const errorBody = await response.text();
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;

      try {
        const errorJson = JSON.parse(errorBody);
        errorMessage = errorJson.error || errorJson.message || errorMessage;
      } catch {
        // Use default error message
      }

      // If 401, clear auth state
      if (response.status === 401) {
        clearAuthOnError();
      }

      throw new ApiError(errorMessage, response.status, errorBody);
    }

    // Parse response
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return response.json();
    }

    return response.text() as any;
  }

  // Convenience methods
  async get<T>(path: string, options?: FetchOptions): Promise<T> {
    return this.fetch<T>(path, { ...options, method: 'GET' });
  }

  async post<T>(path: string, body?: any, options?: FetchOptions): Promise<T> {
    return this.fetch<T>(path, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }
}

// Export configured clients
export const uploadApi = new ApiClient(API_CONFIG.upload.baseUrl);
export const paymentsApi = new ApiClient(API_CONFIG.payments.baseUrl);
