'use client';

import { useState, useEffect } from 'react';
import { usePins } from '@/hooks/usePins';
import FilterControls from './FilterControls';
import PinTable from './PinTable';
import type { PinFilters } from '@/types/api';
import { ApiError } from '@/lib/api/client';

interface PinListSectionProps {
  onAuthorizationError?: () => void;
}

export default function PinListSection({ onAuthorizationError }: PinListSectionProps) {
  const [filters, setFilters] = useState<PinFilters>({ limit: 50 });
  const { data, loading, error, refetch } = usePins(filters);

  // Check if error is a 401 authorization error
  useEffect(() => {
    if (error) {
      // Check if it's an ApiError with authorization flag or contains 401 in message
      const isAuthError =
        (error instanceof ApiError && error.isAuthorizationError) ||
        error.message.includes('401') ||
        error.message.includes('Unauthorized');

      if (isAuthError) {
        onAuthorizationError?.();
      }
    }
  }, [error, onAuthorizationError]);

  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Your Pins</h2>
        <p className="text-slate-400">
          View and manage all your IPFS pins. Total: {data?.count || 0}
        </p>
      </div>

      <FilterControls filters={filters} onFiltersChange={setFilters} />

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-slate-300">Loading pins...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-6">
          <p className="text-red-400">{error.message}</p>
        </div>
      )}

      {!loading && !error && data && data.results.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="w-16 h-16 text-slate-600 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <p className="text-slate-400 text-lg mb-2">No pins found</p>
          <p className="text-slate-500 text-sm">
            Upload files above to get started
          </p>
        </div>
      )}

      {!loading && !error && data && data.results.length > 0 && (
        <PinTable pins={data.results} onRefresh={refetch} />
      )}
    </section>
  );
}
