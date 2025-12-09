'use client';

import { useState, useEffect, useCallback } from 'react';
import { paymentsService } from '@/lib/api/payments';
import type { SubscriptionStatus } from '@/types/api';
import type { ApiState } from '@/types/hooks';

export function useSubscriptionStatus(enabled: boolean = true): ApiState<SubscriptionStatus | null> {
  const [data, setData] = useState<SubscriptionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchSubscriptionStatus = useCallback(async () => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const status = await paymentsService.subscriptionStatus.get();

      // If no active subscription, set data to null
      if (!status.hasActiveSubscription) {
        setData(null);
      } else {
        setData(status);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch subscription status'));
      setData(null);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    fetchSubscriptionStatus();
  }, [fetchSubscriptionStatus]);

  return {
    data,
    loading,
    error,
    refetch: fetchSubscriptionStatus,
  };
}
