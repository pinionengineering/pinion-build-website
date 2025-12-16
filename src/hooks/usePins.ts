'use client';

import { useState, useEffect, useCallback } from 'react';
import { pinningService } from '@/lib/api/pinning';
import type { PinResults, PinFilters } from '@/types/api';
import type { ApiState } from '@/types/hooks';

export function usePins(
  filters?: PinFilters,
  enabled: boolean = true
): ApiState<PinResults> {
  const [data, setData] = useState<PinResults | null>({ count: 0, results: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPins = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await pinningService.pins.list(filters);
      setData(results);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch pins'));
      setData({ count: 0, results: [] });
    } finally {
      setLoading(false);
    }
  }, [enabled, JSON.stringify(filters)]);

  useEffect(() => {
    fetchPins();
  }, [fetchPins]);

  return { data, loading, error, refetch: fetchPins };
}
