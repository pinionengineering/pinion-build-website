import { paymentsApi } from './client';
import type { OfferingDisplay, SubscriptionStatus } from '@/types/api';

// API returns capitalized field names, so we need to transform them
interface OfferingApiResponse {
  ID: string;
  Name: string;
  Description: string;
  DisplayPrice: string;
  Items?: Record<string, string>;
}

interface SubscriptionStatusApiResponse {
  HasActiveSubscription: boolean;
  CurrentOffering?: OfferingApiResponse;
  SubscriptionID: string;
  Status: string;
  IsCustomPlan: boolean;
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

function transformSubscriptionStatus(apiStatus: SubscriptionStatusApiResponse): SubscriptionStatus {
  return {
    hasActiveSubscription: apiStatus.HasActiveSubscription,
    currentOffering: apiStatus.CurrentOffering ? transformOffering(apiStatus.CurrentOffering) : undefined,
    subscriptionId: apiStatus.SubscriptionID,
    status: apiStatus.Status,
    isCustomPlan: apiStatus.IsCustomPlan,
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

  subscriptionStatus: {
    get: async () => {
      const apiResponse = await paymentsApi.get<SubscriptionStatusApiResponse>(
        '/subscription-status',
        { requireAuth: true }
      );
      return transformSubscriptionStatus(apiResponse);
    },
  },
};
