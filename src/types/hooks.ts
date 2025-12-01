// Hook Type Definitions

export interface UseApiOptions {
  enabled?: boolean;
  refetchInterval?: number;
}

export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}
