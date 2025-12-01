'use client';

import { useState, useEffect, useCallback } from 'react';
import { paymentsService } from '@/lib/api/payments';
import type { OfferingDisplay } from '@/types/api';
import type { ApiState } from '@/types/hooks';

export function useOfferings(enabled: boolean = true): ApiState<OfferingDisplay[]> {
  const [data, setData] = useState<OfferingDisplay[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchOfferings = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const offerings = await paymentsService.offerings.getAll();
      setData(offerings);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch offerings'));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    fetchOfferings();
  }, [fetchOfferings]);

  return {
    data,
    loading,
    error,
    refetch: fetchOfferings,
  };
}
