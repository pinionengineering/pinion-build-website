import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Technology</h1>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">IPFS Infrastructure Platform</h2>
              
              <p className="text-gray-600 mb-6">
                Pinion is built on cutting-edge distributed systems technology to provide reliable, scalable, and trustless IPFS infrastructure for modern applications.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Core Technologies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">IPFS Protocol</h4>
                  <p className="text-gray-600">
                    Built on the InterPlanetary File System protocol for content-addressed, peer-to-peer hypermedia distribution.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Content Addressing</h4>
                  <p className="text-gray-600">
                    Uses cryptographic hashes (CIDs) to ensure data integrity and enable trustless verification of content.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Distributed Storage</h4>
                  <p className="text-gray-600">
                    Data is replicated across multiple nodes for high availability and resilience against failures.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Gateway Network</h4>
                  <p className="text-gray-600">
                    Global network of IPFS gateways providing fast HTTP access to pinned content worldwide.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Platform Architecture</h3>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Standard Pinning Service Features</h4>
                <p className="text-blue-800 mb-4">
                  Industry-standard IPFS pinning and gateway services that work exactly as expected, providing reliable compatibility with existing IPFS tooling and workflows.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-base font-semibold text-blue-900 mb-2">Pinning Service</h5>
                    <p className="text-sm text-blue-800 mb-2">RESTful API compatible with IPFS Pinning Service specification.</p>
                    <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                      <li>Pin request queuing and status tracking</li>
                      <li>Metadata management and search</li>
                      <li>Webhook notifications for status updates</li>
                      <li>Rate limiting and quota management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-base font-semibold text-blue-900 mb-2">Gateway Service</h5>
                    <p className="text-sm text-blue-800 mb-2">High-performance HTTP gateways with intelligent caching.</p>
                    <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                      <li>Multi-tier caching strategy</li>
                      <li>Range request support</li>
                      <li>Content-type negotiation</li>
                      <li>Geographic distribution</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Pinion Tech</h4>
              <p className="text-gray-600 mb-6">
                Our innovative technologies that go beyond standard pinning services, providing next-generation IPFS infrastructure capabilities.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <h5 className="text-lg font-semibold text-green-900 mb-3">Upload Service</h5>
                <p className="text-green-800 mb-3">
                  The missing write service for IPFS - providing the writable counterpart to the familiar IPFS gateway service. High-performance upload endpoint supporting both individual files and CAR archives.
                </p>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Multi-root CAR file processing</li>
                  <li>Automatic pin creation and tracking</li>
                  <li>Pub/Sub messaging for real-time updates</li>
                  <li>Content deduplication</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                <h5 className="text-lg font-semibold text-orange-900 mb-3">Distributed Datastore</h5>
                <p className="text-orange-800 mb-3">
                  Advanced clustering technology that enables small, high-availability clusters of IPFS nodes to share data seamlessly and withstand node failures without data loss. Content-level deduplication across the cluster significantly reduces storage costs by storing each unique piece of data only once.
                </p>
                <ul className="list-disc list-inside text-orange-800 space-y-1">
                  <li>Automatic data replication across cluster nodes</li>
                  <li>Consensus-based cluster state management</li>
                  <li>Graceful handling of node failures and recovery</li>
                  <li>Load balancing and intelligent request routing</li>
                  <li>Real-time cluster health monitoring</li>
                  <li>Zero-downtime node maintenance and upgrades</li>
                  <li>Content-level deduplication to minimize storage costs</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 rounded-lg p-6 mb-6">
                <h5 className="text-lg font-semibold text-indigo-900 mb-3">Minion Network</h5>
                <p className="text-indigo-800 mb-3">
                  <strong>The future of decentralized pinning.</strong> Unlike highly centralized pinning services, Pinion's Minion Network enables users to participate directly in the operation of the pinning service, keeping the dream of peer-to-peer organization alive. Minions are modified IPFS nodes that pin content and provide regular cryptographic proofs to the network, creating a truly distributed infrastructure.
                </p>
                <ul className="list-disc list-inside text-indigo-800 space-y-1">
                  <li>Community-operated nodes with verifiable storage proofs</li>
                  <li>Cryptographic verification of pin availability and integrity</li>
                  <li>Incentive mechanisms for network participants</li>
                  <li>Decentralized consensus on storage reliability</li>
                  <li>Geographic distribution through volunteer operators</li>
                  <li>Transparent network health and participation metrics</li>
                  <li>Reduced single points of failure compared to centralized services</li>
                </ul>
                <div className="mt-4 p-3 bg-indigo-100 rounded-md">
                  <p className="text-sm text-indigo-900">
                    <strong>Why this matters:</strong> While other pinning services operate as centralized silos, Pinion maintains IPFS's core philosophy of decentralization. The Minion Network creates economic incentives for distributed participation while ensuring enterprise-grade reliability through cryptographic proofs and consensus mechanisms.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">GitHub Integration</h5>
                <p className="text-gray-800 mb-3">
                  Seamless CI/CD integration that enables automatic deployment of dApps and static sites directly from GitHub Actions to IPFS, bridging traditional development workflows with decentralized hosting.
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  <li>Direct GitHub Actions workflow integration</li>
                  <li>Automatic build artifact pinning to IPFS</li>
                  <li>Content-addressable hosting for dApp frontends</li>
                  <li>Multi-root CAR support for complex builds</li>
                  <li>Real-time deployment status tracking</li>
                  <li>Zero-configuration setup for common frameworks</li>
                  <li>Immutable deployment history and rollback capability</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-lg p-6 mb-6">
                <h5 className="text-lg font-semibold text-pink-900 mb-3">Mobile App</h5>
                <p className="text-pink-800 mb-3">
                  Consumer-friendly mobile application that makes IPFS accessible to everyone, enabling seamless file sharing and storage without technical complexity. Brings the power of decentralized storage to your pocket.
                </p>
                <ul className="list-disc list-inside text-pink-800 space-y-1">
                  <li>Direct file upload and download from mobile devices</li>
                  <li>Pin management and storage dashboard</li>
                  <li>Peer-to-peer file sharing with friends</li>
                  <li>QR code generation for instant content sharing</li>
                  <li>Shareable IPFS links with user-friendly previews</li>
                  <li>Offline content access and synchronization</li>
                  <li>Cross-platform support (iOS and Android)</li>
                  <li>Integration with device photo gallery and file system</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Performance & Reliability</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">&lt;100ms</div>
                  <div className="text-sm text-gray-600">Gateway Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Global</div>
                  <div className="text-sm text-gray-600">Edge Network</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Security & Compliance</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Cryptographic Integrity:</strong> All content is verified using SHA-256 hashes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>API Authentication:</strong> Bearer token authentication with scope-based permissions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Data Privacy:</strong> Content is immutable and censorship-resistant</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Enterprise Security:</strong> SOC 2 compliance and audit logs</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Integration Ecosystem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Developer Tools</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>GitHub Actions integration</li>
                    <li>CI/CD pipeline support</li>
                    <li>CLI tools and SDKs</li>
                    <li>Webhook notifications</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Platform Compatibility</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>IPFS Pinning Service API standard</li>
                    <li>CAR file format support</li>
                    <li>UnixFS directory structures</li>
                    <li>IPNS mutable namespace</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Built for the Decentralized Web</h4>
                <p className="text-gray-300">
                  Pinion bridges the gap between traditional web infrastructure and the decentralized web, 
                  providing enterprise-grade reliability while maintaining the core principles of IPFS: 
                  content addressing, cryptographic verification, and distributed storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}