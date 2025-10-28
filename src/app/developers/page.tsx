import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Developers() {
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
          <circle cx="60" cy="60" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 45} 60 60)`}>
                <rect x="57" y="15" width="6" height="12" />
              </g>
            ))}
            <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <div className="absolute bottom-40 left-10 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" className="text-blue-400">
          <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
          <g stroke="currentColor" strokeWidth="2" fill="none">
            {Array.from({ length: 6 }).map((_, i) => (
              <g key={i} transform={`rotate(${i * 60} 40 40)`}>
                <rect x="38" y="10" width="4" height="8" />
              </g>
            ))}
            <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          </g>
        </svg>
      </div>

      <Header />

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8" role="main">
        <article className="relative z-10">
          {/* Hero Section */}
          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mb-8 transform -rotate-1 relative" aria-labelledby="hero-heading" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-8">
                <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 leading-tight">
                  Pinion Pinning Services
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
                  Built for Developers
                </h2>
                <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                  Stop worrying about storage infrastructure. Pin your content to IPFS with enterprise-grade reliability,
                  automatic redundancy, and global performance. Focus on building—let Pinion handle the rest.
                </p>
              </div>
            </div>
          </section>

          {/* What You Get */}
          <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-lg mb-8 transform rotate-1 relative border border-green-500" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 border-l border-b border-green-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-8">Complete IPFS Infrastructure Suite</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Pinning API</h3>
                  </div>
                  <p className="text-green-100">
                    Store your content permanently on IPFS with enterprise redundancy and automatic replication across our global network.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Gateway API</h3>
                  </div>
                  <p className="text-green-100">
                    Serve your IPFS content through high-performance global gateways with millisecond response times worldwide.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Bitswap Network</h3>
                  </div>
                  <p className="text-green-100">
                    Connect to the global IPFS network via optimized bitswap for fast content discovery and peer-to-peer distribution.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Censorship Resistance</h3>
                  </div>
                  <p className="text-green-100">
                    Content distributed across thousands of nodes worldwide ensures availability even if individual nodes go offline or are blocked.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Global CDN</h3>
                  </div>
                  <p className="text-green-100">
                    IPFS acts as a natural CDN—content cached at nodes closest to your users delivers faster load times automatically.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Missing Write Gateways */}
          <section className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white rounded-lg mb-8 transform -rotate-1 relative border border-yellow-500" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-500 border-l border-b border-yellow-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">IPFS Write Gateways</h2>
              <p className="text-xl text-center mb-8 text-yellow-100 max-w-3xl mx-auto">
                IPFS is great at reading data, but getting your content onto the network has always been the missing piece. 
                Pinion fills that gap with write gateways and integrations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Upload Gateway</h3>
                  </div>
                  <p className="text-yellow-100">
                    Simple REST API for uploading files directly to IPFS with automatic content addressing, pinning, and instant availability.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">GitHub Integration</h3>
                  </div>
                  <p className="text-yellow-100">
                    Automatically upload build artifacts and dApp frontends with GitHub Actions. Deploy to IPFS on every commit without manual intervention.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">The Missing Piece</h3>
                <p className="text-yellow-100">
                  While IPFS excels at distributed reading through gateways, writing data has traditionally required running your own node. 
                  Pinion's write gateways let you publish to IPFS as easily as consuming from it.
                </p>
              </div>
            </div>
          </section>

          {/* Developer Tools */}
          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mb-8 transform -rotate-1 relative" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Developer-First Tooling</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Web Dashboard</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Monitor your pins, track usage, manage API keys, and analyze performance metrics through our intuitive web interface.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Mobile App</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Manage your IPFS content on the go. Upload files, monitor pins, and receive alerts directly from your mobile device.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Model */}
          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg mb-8 transform rotate-1 relative border border-blue-500" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500 border-l border-b border-blue-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Simple Monthly Pricing</h2>
              <p className="text-xl text-center mb-8 text-blue-100 max-w-2xl mx-auto">
                Pay one monthly fee and get access to all APIs, tools, and integrations. No usage limits, no surprise charges.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2">Beta Pricing</h3>
                <p className="text-blue-100 mb-4">
                  Join our beta program for 3 months of free storage and first-mover discounts on launch pricing.
                </p>
                <div className="text-center">
                  <a
                    href="mailto:beta@pinioneng.com?subject=Developer Beta Access&body=Hi!,%0A%0AI'm interested in the Pinion developer beta program. Please send me information about API access, pricing, and setup.%0A%0AThank you!"
                    className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Get Beta Access
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Already using IPFS */}
          <section className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-lg mb-8 transform -rotate-1 relative border border-purple-500" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-purple-500 border-l border-b border-purple-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Already using IPFS?</h2>
              <p className="text-xl text-center mb-8 text-purple-100 max-w-3xl mx-auto">
                Pinion works seamlessly with your existing IPFS tools and workflow. No need to change how you work—just add reliable remote pinning.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Use with ipfs/kubo command line:</h3>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># Add Pinion as a remote pinning service</div>
                  <div className="text-green-400">$ ipfs pin remote service add pinion https://api.pinion.build YOUR_API_KEY</div>
                  <div className="text-gray-400 mt-4 mb-2"># Pin content to Pinion</div>
                  <div className="text-green-400">$ ipfs pin remote add --service=pinion QmHash</div>
                  <div className="text-gray-400 mt-4 mb-2"># List your remote pins</div>
                  <div className="text-green-400">$ ipfs pin remote ls --service=pinion</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Works with existing tools</h4>
                  <p className="text-purple-100 text-sm">ipfs-cli, js-ipfs, go-ipfs, Brave browser, and any IPFS client</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Standard IPFS APIs</h4>
                  <p className="text-purple-100 text-sm">Compatible with IPFS Pinning Service API specification</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Keep your workflow</h4>
                  <p className="text-purple-100 text-sm">No migration needed—add Pinion alongside your current setup</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold mb-2">✅ Enterprise reliability</h4>
                  <p className="text-purple-100 text-sm">99.9% uptime with global redundancy and monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* Works with all your tools */}
          <section className="bg-gradient-to-br from-orange-600 to-red-700 text-white rounded-lg mb-8 transform rotate-1 relative border border-orange-500" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-orange-500 border-l border-b border-orange-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Works with all your existing tools</h2>
              <p className="text-xl text-center mb-8 text-orange-100 max-w-3xl mx-auto">
                No IPFS experience required. Use any tool you already know—curl, wget, fetch, or your favorite HTTP client. 
                It's just a simple REST API.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Upload files with curl:</h3>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># Upload any file to IPFS instantly</div>
                  <div className="text-green-400">$ curl -X POST https://upload.pinion.build/api/v1/add \</div>
                  <div className="text-green-400 ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                  <div className="text-green-400 ml-4">-F "file=@my-document.pdf"</div>
                  <div className="text-gray-400 mt-4 mb-2"># Response:</div>
                  <div className="text-blue-300">{`{`}</div>
                  <div className="text-blue-300 ml-2">"requestid": "uuid-string",</div>
                  <div className="text-blue-300 ml-2">"status": "PINNING",</div>
                  <div className="text-blue-300 ml-2">"created": "2025-10-27T01:23:45.678Z",</div>
                  <div className="text-blue-300 ml-2">"pin": {`{`}</div>
                  <div className="text-blue-300 ml-4">"cid": "bafybeib...",</div>
                  <div className="text-blue-300 ml-4">"name": "my-document.pdf"</div>
                  <div className="text-blue-300 ml-2">{`}`}</div>
                  <div className="text-blue-300">{`}`}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Standard HTTP</h4>
                  <p className="text-orange-100 text-sm">Just REST APIs. No special libraries or protocols to learn.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Instant Upload</h4>
                  <p className="text-orange-100 text-sm">Files are available on IPFS within seconds of upload.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Any File Type</h4>
                  <p className="text-orange-100 text-sm">Images, videos, documents, websites—upload anything.</p>
                </div>
              </div>

              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Works in any language:</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">JavaScript fetch()</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Python requests</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Go http.Client</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">curl/wget</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Postman</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Any HTTP client</span>
                </div>
              </div>
            </div>
          </section>

          {/* GitHub Integration Demo */}
          <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-lg mb-8 transform rotate-1 relative border border-emerald-500" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-emerald-500 border-l border-b border-emerald-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Deploy to IPFS with Git Push</h2>
              <p className="text-xl text-center mb-8 text-emerald-100 max-w-3xl mx-auto">
                Set up once, deploy forever. After adding our GitHub Action, every push automatically builds and deploys your app to IPFS.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Your normal workflow:</h3>
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># Make changes to your project</div>
                  <div className="text-green-400">$ git add .</div>
                  <div className="text-green-400">$ git commit -m "Update homepage design"</div>
                  <div className="text-green-400">$ git push origin main</div>
                  <div className="text-gray-400 mt-4 mb-2"># Pinion automatically:</div>
                  <div className="text-blue-300"># ✓ Builds your project (npm run build)</div>
                  <div className="text-blue-300"># ✓ Uploads build to IPFS</div>
                  <div className="text-blue-300"># ✓ Pins content for reliability</div>
                  <div className="text-blue-300"># ✓ Returns IPFS URL for your app</div>
                  <div className="text-gray-400 mt-4 mb-2"># Your app is live at:</div>
                  <div className="text-yellow-300">https://gateway.pinion.build/ipfs/bafybeib...</div>
                  <div className="text-gray-400 mt-2 mb-2"># Or use your own domain:</div>
                  <div className="text-yellow-300">https://myapp.com</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Zero Config</h4>
                  <p className="text-emerald-100 text-sm">Add one GitHub Action file. No servers, no deployment scripts.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Instant Deployment</h4>
                  <p className="text-emerald-100 text-sm">From git push to live IPFS URL in under 2 minutes.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.029 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-2">Custom Domains</h4>
                  <p className="text-emerald-100 text-sm">Point your own domain to IPFS content for professional deployment.</p>
                </div>
              </div>

              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Perfect for:</h3>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-white/20 px-3 py-1 rounded-full">React Apps</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Vue.js Projects</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Static Sites</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">dApp Frontends</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Documentation</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full">Any Build Output</span>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Pinion */}
          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mb-8 transform -rotate-1 relative" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)' }}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Why Choose Pinion Over Other Services?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Complete toolchain included</h3>
                    <p className="text-slate-600">Unlike competitors who only provide APIs, we include mobile apps, web dashboard, and GitHub Actions out of the box.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Decentralized by design</h3>
                    <p className="text-slate-600">Our Minion Network ensures true decentralization while maintaining reliability and performance.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Transparent pricing</h3>
                    <p className="text-slate-600">Simple monthly subscription with no hidden fees, usage caps, or surprise charges. Budget with confidence.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Developer experience first</h3>
                    <p className="text-slate-600">Built by developers for developers. Clean APIs, comprehensive docs, and tools that just work.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
