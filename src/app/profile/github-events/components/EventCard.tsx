'use client';

import type { WebhookEvent } from '@/types/api';

interface EventCardProps {
  event: WebhookEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const statusColor = event.success
    ? 'bg-green-900/30 border-green-700'
    : 'bg-red-900/30 border-red-700';

  const statusIcon = event.success ? (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ) : (
    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className={`bg-slate-800 rounded-lg p-6 border ${statusColor}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          {statusIcon}

          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-white font-semibold">{event.event_type}</h3>
              {event.event_action && (
                <>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400 text-sm">{event.event_action}</span>
                </>
              )}
            </div>

            <p className="text-slate-400 text-sm">{event.repo_full_name}</p>
          </div>
        </div>

        <div className="text-right text-sm">
          <p className="text-slate-500">
            {new Date(event.created_at).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Messages */}
      {event.messages && event.messages.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-slate-300 mb-2">Messages:</h4>
          <ul className="space-y-1">
            {event.messages.map((message, idx) => (
              <li key={idx} className="text-sm text-slate-400 flex items-start">
                <span className="mr-2">•</span>
                <span>{message}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Error */}
      {event.processing_error && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-red-400 mb-1">Error:</h4>
          <p className="text-sm text-red-300 font-mono bg-red-900/20 p-2 rounded">
            {event.processing_error}
          </p>
        </div>
      )}

      {/* Metadata */}
      <div className="flex flex-wrap gap-4 text-xs text-slate-500">
        <div>
          <span className="font-medium">Event ID:</span> {event.github_event_id}
        </div>
        {event.processed_at && (
          <div>
            <span className="font-medium">Processed:</span>{' '}
            {new Date(event.processed_at).toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
}
