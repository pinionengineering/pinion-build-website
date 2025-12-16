'use client';

import type { PinStatus } from '@/types/api';

interface PinStatusBadgeProps {
  status: PinStatus;
  size?: 'sm' | 'md' | 'lg';
}

const statusConfig = {
  queued: {
    label: 'Queued',
    className: 'bg-yellow-900/30 text-yellow-400 border-yellow-700',
    icon: '⏳',
  },
  pinning: {
    label: 'Pinning',
    className: 'bg-blue-900/30 text-blue-400 border-blue-700',
    icon: '🔄',
  },
  pinned: {
    label: 'Pinned',
    className: 'bg-green-900/30 text-green-400 border-green-700',
    icon: '✓',
  },
  failed: {
    label: 'Failed',
    className: 'bg-red-900/30 text-red-400 border-red-700',
    icon: '✗',
  },
};

const sizeClasses = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
};

export default function PinStatusBadge({ status, size = 'md' }: PinStatusBadgeProps) {
  const config = statusConfig[status];
  const sizeClass = sizeClasses[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${config.className} ${sizeClass}`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
}
