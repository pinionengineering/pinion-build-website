import { paymentsApi } from './client';
import type { OfferingDisplay } from '@/types/api';

export const paymentsService = {
  offerings: {
    getAll: () =>
      paymentsApi.get<OfferingDisplay[]>('/offerings'),

    getById: (offerId: string) =>
      paymentsApi.get<OfferingDisplay>(`/offerings?offer_id=${offerId}`),
  },
};
