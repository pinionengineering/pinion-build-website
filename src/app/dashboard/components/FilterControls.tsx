'use client';

import { useState } from 'react';
import type { PinFilters, PinStatus } from '@/types/api';

interface FilterControlsProps {
  filters: PinFilters;
  onFiltersChange: (filters: PinFilters) => void;
}

export default function FilterControls({ filters, onFiltersChange }: FilterControlsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (status: PinStatus | '') => {
    onFiltersChange({
      ...filters,
      status: status || undefined,
    });
  };

  const handleSearch = () => {
    onFiltersChange({
      ...filters,
      name: searchTerm || undefined,
    });
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    onFiltersChange({ limit: 50 });
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Search Bar */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Search
        </button>
      </div>

      {/* Status Filter and Clear */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-slate-400 text-sm">Status:</label>
          <select
            value={filters.status || ''}
            onChange={(e) => handleStatusChange(e.target.value as PinStatus | '')}
            className="bg-slate-900 border border-slate-600 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">All</option>
            <option value="queued">Queued</option>
            <option value="pinning">Pinning</option>
            <option value="pinned">Pinned</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        <button
          onClick={handleClearFilters}
          className="text-slate-400 hover:text-white text-sm underline"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
