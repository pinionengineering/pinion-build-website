'use client';

import { useState, useEffect, useCallback } from 'react';
import { uploadService } from '@/lib/api/upload';
import type { ApiState } from '@/types/hooks';

export function useGitHubConnection(enabled: boolean = true): ApiState<boolean> & {
  hasConnection: boolean;
} {
  const [hasConnection, setHasConnection] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const checkConnection = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await uploadService.github.getEvents(1);

      // If we got events back, user has GitHub connected
      setHasConnection(response.count > 0);
    } catch (err) {
      // Handle specific error cases
      if (err instanceof Error) {
        // 401 means not authenticated - that's fine, just not connected
        if ('statusCode' in err && (err as any).statusCode === 401) {
          setHasConnection(false);
          setError(null);
        } else {
          setError(err);
        }
      } else {
        setError(new Error('Unknown error checking GitHub connection'));
      }
      setHasConnection(false);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    checkConnection();
  }, [checkConnection]);

  return {
    data: hasConnection,
    hasConnection,
    loading,
    error,
    refetch: checkConnection,
  };
}
