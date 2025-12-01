// API Response Type Definitions

// GitHub Integration Types
export interface WebhookEvent {
  ID: string;
  installation_id: string;
  user_hint: string;
  event_type: string;
  event_action: string;
  github_event_id: string;
  repo_full_name: string;
  payload_hash: string;
  processed_at?: string;
  processing_error?: string;
  messages?: string[];
  success: boolean;
  created_at: string;
}

export interface GitHubEventsResponse {
  events: WebhookEvent[];
  count: number;
}

// Payments Types
export interface OfferingDisplay {
  id: string;
  name: string;
  description: string;
  displayPrice: string;
  items?: Record<string, string>;
}

// API Error Types
export interface ApiErrorResponse {
  error: string;
  message?: string;
}
