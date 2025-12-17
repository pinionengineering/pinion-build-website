'use client';

import { useState } from 'react';
import { API_CONFIG } from '@/config/app.config';
import type { PinStatusResponse } from '@/types/api';
import { UserManager } from 'oidc-client-ts';
import { AUTH_CONFIG } from '@/config/app.config';

interface UploadOptions {
  name?: string;
  format?: 'car';
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

async function getAuthToken(): Promise<string | null> {
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

export function useUploadFile() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  const upload = async (
    file: File,
    options?: UploadOptions
  ): Promise<PinStatusResponse | PinStatusResponse[]> => {
    try {
      setUploading(true);
      setProgress(0);
      setError(null);

      // Build URL with query params
      const params = new URLSearchParams();
      if (options?.name) params.append('name', options.name);
      if (options?.format) params.append('format', options.format);
      const query = params.toString();
      const url = query ? `/api/v1/?${query}` : '/api/v1/';

      // Determine content type
      const contentType = file.name.endsWith('.car')
        ? 'application/vnd.ipld.car'
        : 'application/octet-stream';

      // Get auth token
      const token = await getAuthToken();
      if (!token) {
        throw new Error('Authentication required');
      }

      // Upload via fetch
      const response = await fetch(`${API_CONFIG.upload.baseUrl}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': contentType,
          'Authorization': `Bearer ${token}`,
        },
        body: file,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Upload failed: ${response.statusText} - ${errorText}`);
      }

      const result = await response.json();
      setProgress(100);
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Upload failed');
      setError(error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  return { upload, uploading, progress, error };
}
