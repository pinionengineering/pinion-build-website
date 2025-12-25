'use client';

import { useAuth } from '@/app/contexts/AuthContext';
import { useGitHubEvents } from '@/hooks/useGitHubEvents';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import EventCard from './components/EventCard';

export default function GitHubEventsPage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error, refetch } = useGitHubEvents(limit, offset, isAuthenticated);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, authLoading, router]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-slate-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">GitHub Events</h1>
              <p className="text-slate-400">
                Recent webhook events from your GitHub repositories
              </p>
            </div>

            <button
              onClick={() => router.push('/profile')}
              className="bg-slate-700 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-600 transition-colors"
            >
              ← Back to Profile
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <label className="text-slate-300">
                Show:
                <select
                  value={limit}
                  onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setOffset(0);
                    setCurrentPage(1);
                  }}
                  className="ml-2 bg-slate-700 text-white rounded px-3 py-1 border border-slate-600"
                >
                  <option value={10}>10 events</option>
                  <option value={25}>25 events</option>
                  <option value={50}>50 events</option>
                  <option value={100}>100 events</option>
                </select>
              </label>
            </div>

            <button
              onClick={refetch}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <span className="ml-4 text-slate-400">Loading events...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-6">
            <h3 className="text-red-400 font-semibold mb-2">Error Loading Events</h3>
            <p className="text-red-300">{error.message}</p>
          </div>
        )}

        {/* Events List */}
        {!loading && !error && data && (
          <div>
            {data.count === 0 ? (
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 text-center">
                <p className="text-slate-400 mb-4">No GitHub events found.</p>
                <p className="text-slate-500 text-sm">
                  Events will appear here after you connect the Pinion GitHub App and push commits or create releases.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-slate-400 text-sm">
                    Showing {data.count} event{data.count !== 1 ? 's' : ''} (Page {currentPage})
                  </div>

                  {/* Pagination Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const newOffset = Math.max(0, offset - limit);
                        setOffset(newOffset);
                        setCurrentPage(Math.floor(newOffset / limit) + 1);
                      }}
                      disabled={offset === 0 || loading}
                      className="bg-slate-700 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => {
                        const newOffset = offset + limit;
                        setOffset(newOffset);
                        setCurrentPage(Math.floor(newOffset / limit) + 1);
                      }}
                      disabled={data.count < limit || loading}
                      className="bg-slate-700 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  {data.events.map((event) => (
                    <EventCard key={event.ID} event={event} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
