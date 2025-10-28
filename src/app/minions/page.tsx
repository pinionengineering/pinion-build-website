import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Minions() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Decorative gears */}
      <div className="absolute top-20 right-20 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" className="text-blue-400">
          <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {Array.from({length: 8}).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45} 60 60)`}>
                <rect x="57" y="15" width="6" height="12"/>
              </g>
            ))}
            <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
          </g>
        </svg>
      </div>
      
      <div className="absolute bottom-40 left-10 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-400">
          <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {Array.from({length: 6}).map((_, i) => (
              <g key={i} transform={`rotate(${i * 60} 40 40)`}>
                <rect x="38" y="10" width="4" height="8"/>
              </g>
            ))}
            <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          </g>
        </svg>
      </div>

      <Header />

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8" role="main">
        <article className="relative z-10">
          {/* Hero Section */}
          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mb-8 transform -rotate-1 relative" aria-labelledby="hero-heading" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-8">
                <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                  Run a Pinion Minion
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
                  Earn Revenue from Your Hardware
                </h2>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                  Deploy a Pinion Minion to contribute IPFS storage and bandwidth to our global network. 
                  Simple setup, automated operations, reliable income.
                </p>
              </div>
            </div>
          </section>

          {/* What is a Pinion Minion */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg mb-8 transform rotate-1 relative border border-blue-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500 border-l border-b border-blue-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-8">What is a Pinion Minion?</h2>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <p className="text-xl text-blue-100 mb-4">
                  A Pinion Minion is a specialized IPFS node that responds to commands from our network API. 
                  When developers need to store content, we instruct your minion to pin it. 
                  You provide the storage space and bandwidth—we handle all the coordination.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Receive Commands</h3>
                  <p className="text-blue-100 text-sm">Your minion receives pin/unpin instructions via our secure API</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Store Data</h3>
                  <p className="text-blue-100 text-sm">Pin IPFS content to your local storage and serve it to the network</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h4v-2H4V6h16v8h-4v2h4a2 2 0 002-2V6a2 2 0 00-2-2H4zm4 10v-1a2 2 0 012-2h2a2 2 0 012 2v1h2a1 1 0 110 2H6a1 1 0 110-2h2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Earn Revenue</h3>
                  <p className="text-blue-100 text-sm">Get paid monthly for each piece of content you store</p>
                </div>
              </div>
            </div>
          </section>

          {/* Revenue Model */}
          <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-lg mb-8 transform -rotate-1 relative border border-green-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 border-l border-b border-green-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-8">How You Earn Money</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">Revenue Sharing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>When developers pay us for storage</span>
                      <span className="font-bold">$100/month</span>
                    </div>
                    <div className="border-t border-white/20 pt-2">
                      <div className="flex justify-between items-center">
                        <span>You receive (revenue share)</span>
                        <span className="font-bold text-green-200">$70/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Pinion receives (coordination)</span>
                        <span className="font-bold">$30/month</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-green-100 text-sm mt-4">
                    * Example numbers. Actual revenue sharing percentages disclosed during onboarding.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">Your Costs</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Network Traffic</h4>
                        <p className="text-green-100 text-sm">You pay for all bandwidth costs (uploads/downloads)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Hardware & Power</h4>
                        <p className="text-green-100 text-sm">Your existing server costs (electricity, hardware maintenance)</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">No Setup Fees</h4>
                        <p className="text-green-100 text-sm">Pinion software is free. No licensing or setup costs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Perfect for:</h3>
                <p className="text-green-100">
                  Data centers, VPS providers, homelab enthusiasts, and anyone with unused server capacity and affordable bandwidth.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Requirements */}
          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mb-8 transform rotate-1 relative" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Technical Requirements</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Minimum Hardware</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>2 CPU cores</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>4GB RAM</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>500GB+ available storage</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Stable internet connection</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span>Linux or Docker support</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Network Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Open outbound ports 4001, 8080</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Public IP or port forwarding</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Unmetered or high bandwidth limits</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>99%+ uptime preferred</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Low latency to major cities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-slate-200 border border-slate-400 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Setup Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                    <p className="text-sm text-slate-600">Apply for minion operator program</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                    <p className="text-sm text-slate-600">Receive credentials and installation guide</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                    <p className="text-sm text-slate-600">Deploy minion software via Docker</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                    <p className="text-sm text-slate-600">Start earning from stored content</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scale with Your Hardware */}
          <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-lg mb-8 transform rotate-1 relative border border-indigo-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-indigo-500 border-l border-b border-indigo-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Got Serious Hardware?</h2>
              <p className="text-xl text-center mb-8 text-indigo-100 max-w-3xl mx-auto">
                If you have racks of servers, unused datacenter capacity, or significant infrastructure, 
                we help you maximize your ROI. Turn idle hardware into steady revenue streams.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">Scale Your Operation</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Run minions across entire server racks</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Utilize spare bandwidth and storage</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Automated deployment and management</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Revenue scales with your capacity</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 text-center">Your Control</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Start and stop minions instantly</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Allocate only spare resources</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>No long-term commitments</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Keep your primary workloads priority</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Perfect for:</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">Datacenter Operators</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Cloud Providers</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Hosting Companies</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Enterprise IT</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Colo Facilities</span>
                </div>
                <p className="text-indigo-100 mt-4">
                  Don't let valuable hardware sit idle. Turn excess capacity into steady income while maintaining full control.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-lg mb-8 transform -rotate-1 relative border border-purple-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-purple-500 border-l border-b border-purple-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Ready to Deploy a Minion?</h2>
              <p className="text-xl text-center mb-8 text-purple-100 max-w-2xl mx-auto">
                Join our network of operators earning revenue from decentralized storage. 
                Simple setup, automated operations, reliable monthly income.
              </p>
              
              <div className="text-center">
                <a
                  href="mailto:beta@pinioneng.com?subject=Minion Operator Application&body=Hi!,%0A%0AI'm interested in running a Pinion Minion. Please send me information about:%0A%0A- Revenue sharing terms%0A- Technical requirements%0A- Setup process%0A- Expected earnings%0A%0AMy setup:%0A- Hardware: [Describe your server/hardware]%0A- Bandwidth: [Your internet connection details]%0A- Location: [Your general location]%0A%0AThank you!"
                  className="inline-block bg-white text-purple-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-purple-50 transition-colors shadow-lg mr-4"
                >
                  Apply to Run a Minion
                </a>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-purple-100 text-sm">
                  Questions? Our team will help you determine if your setup is a good fit and estimate your potential earnings.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}