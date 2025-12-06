import { uploadApi } from './client';
import type { GitHubEventsResponse } from '@/types/api';

export const uploadService = {
  github: {
    getEvents: (limit: number = 1) =>
      uploadApi.get<GitHubEventsResponse>(`/api/v1/github/events?limit=${limit}`),
  },
};
