'use client';

import { useOfferings } from '@/hooks/useOfferings';

export default function BillingSection() {
  const { data: offerings, loading, error } = useOfferings();

  return (
    <section className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Subscription & Billing</h2>
        <p className="text-slate-400">
          Choose a plan that fits your needs. All plans include IPFS pinning, gateway access, and GitHub integration.
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-slate-300 font-medium">Loading plans...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-5">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-red-400 font-semibold mb-1">Failed to Load Plans</h3>
              <p className="text-red-300 text-sm">
                Unable to fetch subscription information. Please refresh the page or try again later.
              </p>
            </div>
          </div>
        </div>
      )}

      {!loading && !error && offerings && (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {offerings.map((offering, index) => {
              // Highlight the middle plan (Pinnacle) as recommended
              const isRecommended = index === 1;

              return (
                <div
                  key={offering.id}
                  className={`relative bg-gradient-to-b from-slate-700 to-slate-800 rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    isRecommended
                      ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'border-slate-600 hover:border-blue-400'
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      POPULAR
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {offering.name}
                    </h3>
                    <p className="text-slate-400 text-sm min-h-[2.5rem]">
                      {offering.description}
                    </p>
                  </div>

                  <div className="text-center mb-6 py-4 border-y border-slate-600">
                    <div className="text-4xl font-bold text-blue-400">
                      {offering.displayPrice}
                    </div>
                  </div>

                  {offering.items && Object.keys(offering.items).length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {Object.entries(offering.items).map(([key, value]) => (
                        <li key={key} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <span className="text-slate-300 text-sm font-medium block">
                              {key}
                            </span>
                            <span className="text-slate-400 text-xs">
                              {value}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      isRecommended
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-600 hover:bg-blue-600 text-white'
                    }`}
                    onClick={() => {
                      window.location.href = `https://hydrogen.pinion.build/payments/web/checkout?offer_id=${offering.id}`;
                    }}
                  >
                    Select {offering.name}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-6 border border-slate-600">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <div>
                  <h3 className="text-white font-semibold mb-1">Manage Your Subscription</h3>
                  <p className="text-slate-400 text-sm">
                    Update billing information, view invoices, or change your plan
                  </p>
                </div>
              </div>
              <a
                href="https://hydrogen.pinion.build/payments/web/portal"
                className="ml-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap"
              >
                Billing Portal
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
