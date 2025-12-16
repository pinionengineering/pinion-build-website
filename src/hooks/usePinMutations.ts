'use client';

import { useState } from 'react';
import { pinningService } from '@/lib/api/pinning';
import type { Pin, PinStatusResponse } from '@/types/api';

export function usePinMutations() {
  const [deleting, setDeleting] = useState(false);
  const [replacing, setReplacing] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deletePin = async (requestId: string): Promise<void> => {
    try {
      setDeleting(true);
      setError(null);
      await pinningService.pins.delete(requestId);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Delete failed');
      setError(error);
      throw error;
    } finally {
      setDeleting(false);
    }
  };

  const replacePin = async (
    requestId: string,
    pin: Pin
  ): Promise<PinStatusResponse> => {
    try {
      setReplacing(true);
      setError(null);
      return await pinningService.pins.replace(requestId, pin);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Replace failed');
      setError(error);
      throw error;
    } finally {
      setReplacing(false);
    }
  };

  return { deletePin, replacePin, deleting, replacing, error };
}
