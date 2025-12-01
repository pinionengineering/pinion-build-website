'use client';

import { useGitHubConnection } from '@/hooks/useGitHubConnection';
import { EXTERNAL_LINKS } from '@/config/app.config';
import Link from 'next/link';

export default function GitHubSection() {
  const { hasConnection, loading, error } = useGitHubConnection();

  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">GitHub Integration</h2>
          <p className="text-sm text-slate-400 mt-1">
            Automatically pin your GitHub repositories and releases to IPFS
          </p>
        </div>

        {/* GitHub Logo */}
        <svg className="w-10 h-10 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-slate-400">Checking connection...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-4">
          <p className="text-red-400 text-sm">
            Failed to check GitHub connection. Please try again later.
          </p>
        </div>
      )}

      {!loading && !error && (
        <div>
          {hasConnection ? (
            <div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-400 font-medium">Connected</span>
              </div>

              <p className="text-slate-300 mb-4">
                Your GitHub account is connected. View recent webhook events to debug your integration.
              </p>

              <div className="flex space-x-3">
                <Link
                  href="/profile/github-events"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Events
                </Link>

                <a
                  href={EXTERNAL_LINKS.githubApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-600 transition-colors"
                >
                  Manage App Settings
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-slate-500 rounded-full mr-2"></div>
                <span className="text-slate-400 font-medium">Not Connected</span>
              </div>

              <p className="text-slate-300 mb-4">
                Connect your GitHub account to automatically pin repositories and releases to IPFS.
              </p>

              <a
                href={EXTERNAL_LINKS.githubApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium"
              >
                Connect GitHub
              </a>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
