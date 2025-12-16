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

export interface SubscriptionStatus {
  hasActiveSubscription: boolean;
  currentOffering?: OfferingDisplay;
  subscriptionId: string;
  status: string;
  isCustomPlan: boolean;
}

// Pinning Service Types
export type PinStatus = 'queued' | 'pinning' | 'pinned' | 'failed';

export interface Pin {
  cid: string;
  name?: string;
  origins?: string[];
  meta?: Record<string, string>;
}

export interface PinStatusResponse {
  requestid: string;
  status: PinStatus;
  created: string; // ISO 8601 timestamp
  pin: Pin;
  delegates: string[];
  info?: Record<string, string>;
}

export interface PinResults {
  count: number;
  results: PinStatusResponse[];
}

export interface PinFilters {
  cid?: string;
  name?: string;
  status?: PinStatus;
  before?: string; // ISO 8601
  after?: string;  // ISO 8601
  limit?: number;
}

// API Error Types
export interface ApiErrorResponse {
  error: string;
  message?: string;
}
