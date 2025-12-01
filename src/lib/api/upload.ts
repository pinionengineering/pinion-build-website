import { uploadApi } from './client';
import type { GitHubEventsResponse } from '@/types/api';

export const uploadService = {
  github: {
    getEvents: (limit: number = 1) =>
      uploadApi.get<GitHubEventsResponse>(`/github/events?limit=${limit}`),
  },
};
