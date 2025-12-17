'use client';

import { useAuth } from '@/app/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function NoAccessDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoToProfile = () => {
    router.push('/profile');
  };

  // Get user's first name from profile
  const firstName = user?.profile?.name?.split(' ')[0] || 'there';

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-lg shadow-xl border border-slate-700 p-8 sm:p-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-blue-900/30 p-4">
              <svg
                className="h-12 w-12 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Almost There, {firstName}!
          </h1>

          {/* Main message */}
          <p className="text-lg text-slate-300 text-center mb-8">
            Your account is active, but you'll need to select a plan to use Pinion's services.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleGoToProfile}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-800 transition-colors"
            >
              Go to Profile & Plans
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-slate-800 text-slate-400">Or</span>
            </div>
          </div>

          {/* Secondary actions */}
          <div className="bg-slate-900/50 rounded-lg p-6 mb-6">
            <h3 className="text-sm font-medium text-slate-300 mb-3">Just signed up?</h3>
            <p className="text-sm text-slate-400 mb-4">
              It may take a moment for your plan to activate. We've attempted to refresh your
              access token, but if you just completed signup, try refreshing this page.
            </p>
            <button
              onClick={handleRefresh}
              className="inline-flex items-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-800 transition-colors"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Refresh Page
            </button>
          </div>

          {/* User info */}
          {user?.profile?.email && (
            <div className="text-center text-sm text-slate-400 mb-4">
              Logged in as <span className="text-slate-300 font-medium">{user.profile.email}</span>
            </div>
          )}

          {/* Logout link */}
          <div className="text-center">
            <button
              onClick={logout}
              className="text-sm text-slate-400 hover:text-slate-300 underline transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
