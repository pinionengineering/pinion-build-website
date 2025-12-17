'use client';

import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PinListSection from './components/PinListSection';
import UploadSection from './components/UploadSection';
import NoAccessDashboard from './components/NoAccessDashboard';

export default function DashboardPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Authorization state: null (unknown), true (authorized), false (unauthorized)
  // Start optimistically as null - assume user has access until proven otherwise
  const [authorizationState, setAuthorizationState] = useState<boolean | null>(null);

  // Callback for child components to signal authorization errors
  const handleAuthorizationError = useCallback(() => {
    setAuthorizationState(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-slate-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Router will redirect
  }

  // If authorization failed, show no-access dashboard
  if (authorizationState === false) {
    return <NoAccessDashboard />;
  }

  // Normal dashboard (authorization state is null or true)
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-slate-400">
            Manage your IPFS pins, upload files, and monitor your content.
          </p>
        </div>

        <div className="space-y-8">
          {/* Upload Section */}
          <UploadSection onAuthorizationError={handleAuthorizationError} />

          {/* Pin List/Browser Section */}
          <PinListSection onAuthorizationError={handleAuthorizationError} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
