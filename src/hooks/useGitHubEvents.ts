'use client';

import { useState, useEffect, useCallback } from 'react';
import { uploadService } from '@/lib/api/upload';
import type { GitHubEventsResponse } from '@/types/api';
import type { ApiState } from '@/types/hooks';

export function useGitHubEvents(
  limit: number = 50,
  offset: number = 0,
  enabled: boolean = true
): ApiState<GitHubEventsResponse> {
  const [data, setData] = useState<GitHubEventsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchEvents = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await uploadService.github.getEvents(limit, offset);
      setData(response);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch events'));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [limit, offset, enabled]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return {
    data,
    loading,
    error,
    refetch: fetchEvents,
  };
}
