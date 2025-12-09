import { paymentsApi } from './client';
import type { OfferingDisplay } from '@/types/api';

// API returns capitalized field names, so we need to transform them
interface OfferingApiResponse {
  ID: string;
  Name: string;
  Description: string;
  DisplayPrice: string;
  Items?: Record<string, string>;
}

function transformOffering(apiOffering: OfferingApiResponse): OfferingDisplay {
  return {
    id: apiOffering.ID,
    name: apiOffering.Name,
    description: apiOffering.Description,
    displayPrice: apiOffering.DisplayPrice,
    items: apiOffering.Items,
  };
}

export const paymentsService = {
  offerings: {
    getAll: async () => {
      const apiOfferings = await paymentsApi.get<OfferingApiResponse[]>('/offerings', { requireAuth: false });
      return apiOfferings.map(transformOffering);
    },

    getById: async (offerId: string) => {
      const apiOffering = await paymentsApi.get<OfferingApiResponse>(`/offerings?offer_id=${offerId}`, { requireAuth: false });
      return transformOffering(apiOffering);
    },
  },
};
