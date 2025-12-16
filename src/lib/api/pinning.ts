import { pinningApi } from './client';
import type { PinResults, PinStatusResponse, Pin, PinFilters } from '@/types/api';

/**
 * Pinning Service API
 * Implements the IPFS Pinning Service API specification
 * https://ipfs.github.io/pinning-services-api-spec/
 */
export const pinningService = {
  pins: {
    /**
     * List pins with optional filtering
     * GET /pins
     */
    list: async (filters?: PinFilters): Promise<PinResults> => {
      const params = new URLSearchParams();

      if (filters?.cid) params.append('cid', filters.cid);
      if (filters?.name) params.append('name', filters.name);
      if (filters?.status) params.append('status', filters.status);
      if (filters?.before) params.append('before', filters.before);
      if (filters?.after) params.append('after', filters.after);
      if (filters?.limit) params.append('limit', filters.limit.toString());

      const query = params.toString();
      const url = query ? `/web/pins?${query}` : '/web/pins';

      return pinningApi.get<PinResults>(url);
    },

    /**
     * Get specific pin by request ID
     * GET /pins/{requestid}
     */
    get: async (requestId: string): Promise<PinStatusResponse> => {
      return pinningApi.get<PinStatusResponse>(`/web/pins/${requestId}`);
    },

    /**
     * Create a new pin request
     * POST /pins
     */
    create: async (pin: Pin): Promise<PinStatusResponse> => {
      return pinningApi.post<PinStatusResponse>('/web/pins', pin);
    },

    /**
     * Delete a pin
     * DELETE /pins/{requestid}
     */
    delete: async (requestId: string): Promise<void> => {
      return pinningApi.fetch<void>(`/web/pins/${requestId}`, {
        method: 'DELETE'
      });
    },

    /**
     * Replace a pin (delete old, create new)
     * POST /pins/{requestid}
     */
    replace: async (requestId: string, pin: Pin): Promise<PinStatusResponse> => {
      return pinningApi.post<PinStatusResponse>(`/web/pins/${requestId}`, pin);
    },
  },
};
