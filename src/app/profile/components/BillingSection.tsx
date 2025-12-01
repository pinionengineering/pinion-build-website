'use client';

import { useOfferings } from '@/hooks/useOfferings';

export default function BillingSection() {
  const { data: offerings, loading, error } = useOfferings();

  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Subscription & Billing</h2>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-slate-400">Loading subscription info...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
          <p className="text-red-400 text-sm">
            Failed to load subscription information. Please try again later.
          </p>
        </div>
      )}

      {!loading && !error && offerings && (
        <div>
          <p className="text-slate-300 mb-4">
            Choose a plan that fits your needs. All plans include IPFS pinning, gateway access, and GitHub integration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {offerings.map((offering) => (
              <div
                key={offering.id}
                className="bg-slate-700 rounded-lg p-4 border border-slate-600 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {offering.name}
                </h3>

                <p className="text-slate-300 text-sm mb-3">
                  {offering.description}
                </p>

                <div className="text-2xl font-bold text-blue-400 mb-3">
                  {offering.displayPrice}
                </div>

                {offering.items && Object.keys(offering.items).length > 0 && (
                  <ul className="text-sm text-slate-400 space-y-1 mb-4">
                    {Object.entries(offering.items).map(([key, value]) => (
                      <li key={key} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    window.location.href = `https://hydrogen.pinion.build/payments/web/checkout?offer_id=${offering.id}`;
                  }}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
            <p className="text-slate-300 text-sm">
              Need to manage your subscription or update billing information?
            </p>
            <a
              href="https://hydrogen.pinion.build/payments/web/portal"
              className="inline-block mt-3 text-blue-400 hover:text-blue-300 font-medium"
            >
              Access Billing Portal →
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
