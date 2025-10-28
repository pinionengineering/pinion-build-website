import HeroLine from './components/HeroLine';
import BetaCountdown from './components/BetaCountdown';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
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
      
      <div className="absolute top-1/2 right-10 opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-blue-400">
          <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            {Array.from({length: 10}).map((_, i) => (
              <g key={i} transform={`rotate(${i * 36} 30 30)`}>
                <rect x="29" y="8" width="2" height="6"/>
              </g>
            ))}
            <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          </g>
        </svg>
      </div>
      <Header />

      <main className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8" role="main">
        <article className="relative z-10">
          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mb-8 transform -rotate-1 relative" aria-labelledby="hero-heading" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            {/* Paper corner fold */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <HeroLine />
            </div>
          </section>

          <aside className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-8 rounded-lg shadow-2xl transform rotate-1 relative border border-blue-600" aria-labelledby="beta-announcement" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            {/* Paper corner fold */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-blue-600 border-l border-b border-blue-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <BetaCountdown />
          </aside>

          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mt-8 transform rotate-1 relative" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            {/* Paper corner fold */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center">
                <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                  The complete IPFS infrastructure platform bridging traditional and decentralized web. From enterprise pinning services and GitHub CI/CD integration to consumer mobile apps and community-operated minion networks - Pinion makes decentralized storage accessible, reliable, and scalable for everyone.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-slate-100 border border-slate-300 shadow-2xl rounded-lg mt-8 transform -rotate-1 relative" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            {/* Paper corner fold */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-200 border-l border-b border-slate-300 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Why Developers Choose Pinion</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Never lose data</h3>
                    <p className="text-slate-600">Distributed storage and cluster-level redundancy keep your content online, even if nodes fail.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Save time and money</h3>
                    <p className="text-slate-600">Automatic content deduplication reduces storage costs and simplifies management.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Keep it decentralized</h3>
                    <p className="text-slate-600">Minion Network ensures verifiable, peer-to-peer storage without relying on centralized silos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Deploy instantly</h3>
                    <p className="text-slate-600">GitHub Actions integration pins build artifacts and dApp frontends automatically.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Access anywhere</h3>
                    <p className="text-slate-600">High-performance global gateways and mobile apps make content available worldwide in milliseconds.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Trust and security built-in</h3>
                    <p className="text-slate-600">Cryptographic content verification, immutable storage, and SOC 2 compliance.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-200 border border-slate-400 rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-slate-800 mb-2">Problem solved:</p>
                <p className="text-slate-700">
                  Developers and teams no longer have to choose between decentralization, reliability, and ease of use—Pinion delivers all three.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-lg mt-8 transform rotate-1 relative border border-green-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 border-l border-b border-green-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Are you a developer, builder, maker, or doer?</h2>
              <p className="text-xl text-center mb-8 text-green-100 max-w-3xl mx-auto">
                Stop worrying about storage infrastructure. Pin your content to IPFS with enterprise-grade reliability, 
                automatic redundancy, and global performance. Focus on building—let Pinion handle the rest.
              </p>
              <div className="text-center">
                <a
                  href="/developers"
                  className="inline-block bg-white text-green-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-green-50 transition-colors shadow-lg"
                >
                  Start Pinning Now →
                </a>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-lg mt-8 transform -rotate-1 relative border border-blue-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-blue-500 border-l border-b border-blue-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Are you a wrangler of machines?</h2>
              <p className="text-xl text-center mb-8 text-blue-100 max-w-3xl mx-auto">
                Provide storage to the network and get paid for it. Run a Pinion minion to contribute IPFS storage 
                and bandwidth to our global network. Simple setup, automated operations, reliable income.
              </p>
              <div className="text-center">
                <a
                  href="/minions"
                  className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Deploy a Minion →
                </a>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-purple-600 to-violet-700 text-white rounded-lg mt-8 transform rotate-1 relative border border-purple-500" style={{boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'}}>
            <div className="absolute top-0 right-0 w-6 h-6 bg-purple-500 border-l border-b border-purple-400 transform rotate-45 translate-x-3 -translate-y-3"></div>
            <div className="px-8 py-10">
              <h2 className="text-3xl font-bold text-center mb-6">Do you have a datacenter?</h2>
              <p className="text-xl text-center mb-8 text-purple-100 max-w-3xl mx-auto">
                Maximize your rackspace ROI. Partner with Pinion to turn idle capacity into revenue streams. 
                We provide the software, you provide the space—together we build the future of decentralized storage.
              </p>
              <div className="text-center">
                <a
                  href="mailto:beta@pinioneng.com?subject=Beta Access Request&body=Hi!,%0A%0AI would like to be part of the Pinion platform beta program. including three months of free storage and first-mover discounts.%0A%0AThank you!"
                  className="inline-block bg-white text-purple-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-purple-50 transition-colors shadow-lg"
                >
                  Partner with Us →
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
