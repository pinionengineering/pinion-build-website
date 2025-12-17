import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Pinion Documentation</h1>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Beta Documentation:</strong> Pinion is in active development. This documentation reflects our current APIs and is updated regularly. Join our <a href="mailto:beta@pinion.build" className="underline hover:text-blue-900">beta program</a> to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Start Guide</h2>
              <p className="text-gray-600 mb-6">Get started with Pinion in three simple steps:</p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Get Your API Token</h3>
                    <p className="text-gray-600">
                      Sign in to your <a href="/dashboard" className="text-blue-600 hover:text-blue-800 font-medium">Dashboard</a> and navigate to your profile settings to create an API token. Keep it secure!
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Choose Your Tool</h3>
                    <p className="text-gray-600">
                      Use <code className="bg-white px-2 py-1 rounded border text-sm">curl</code> for quick tests, or install an IPFS pinning service client library for your language of choice.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Make Your First Pin</h3>
                    <p className="text-gray-600 mb-2">Try pinning content with a simple curl command:</p>
                    <div className="bg-gray-900 text-gray-100 p-3 rounded-md font-mono text-sm overflow-x-auto">
                      <pre>{`curl -X POST https://api.pinion.io/pins \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"cid": "bafybeigdyrzt...", "name": "my-first-pin"}'`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <div>
                  <a href="#pinning-service" className="text-blue-600 hover:text-blue-800 font-medium">
                    Pinning Service
                  </a>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><a href="#pinning-overview" className="text-gray-600 hover:text-blue-600">Overview</a></li>
                    <li><a href="#pinning-authentication" className="text-gray-600 hover:text-blue-600">Authentication</a></li>
                    <li><a href="#pinning-endpoints" className="text-gray-600 hover:text-blue-600">Endpoints</a></li>
                    <li><a href="#pinning-status-codes" className="text-gray-600 hover:text-blue-600">Status Codes</a></li>
                    <li><a href="#pinning-data-model" className="text-gray-600 hover:text-blue-600">Data Model</a></li>
                    <li><a href="#pinning-examples" className="text-gray-600 hover:text-blue-600">Examples</a></li>
                    <li><a href="#pinning-webhooks" className="text-gray-600 hover:text-blue-600">Webhooks</a></li>
                    <li><a href="#pinning-rate-limits" className="text-gray-600 hover:text-blue-600">Rate Limits</a></li>
                    <li><a href="#pinning-errors" className="text-gray-600 hover:text-blue-600">Errors</a></li>
                  </ul>
                </div>
                <div>
                  <a href="#gateway-api" className="text-blue-600 hover:text-blue-800 font-medium">
                    Gateway API
                  </a>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><a href="#gateway-overview" className="text-gray-600 hover:text-blue-600">Overview</a></li>
                    <li><a href="#gateway-authentication" className="text-gray-600 hover:text-blue-600">Authentication</a></li>
                    <li><a href="#gateway-endpoints" className="text-gray-600 hover:text-blue-600">Endpoints</a></li>
                    <li><a href="#gateway-content-type" className="text-gray-600 hover:text-blue-600">Content-Type Negotiation</a></li>
                    <li><a href="#gateway-caching" className="text-gray-600 hover:text-blue-600">Caching</a></li>
                    <li><a href="#gateway-examples" className="text-gray-600 hover:text-blue-600">Examples</a></li>
                    <li><a href="#gateway-rate-limits" className="text-gray-600 hover:text-blue-600">Rate Limits</a></li>
                  </ul>
                </div>
                <div>
                  <a href="#upload-service" className="text-blue-600 hover:text-blue-800 font-medium">
                    Upload Service
                  </a>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><a href="#upload-overview" className="text-gray-600 hover:text-blue-600">Overview</a></li>
                    <li><a href="#upload-endpoint" className="text-gray-600 hover:text-blue-600">Endpoint</a></li>
                    <li><a href="#upload-request" className="text-gray-600 hover:text-blue-600">Request</a></li>
                    <li><a href="#upload-response" className="text-gray-600 hover:text-blue-600">Response</a></li>
                    <li><a href="#upload-behavior" className="text-gray-600 hover:text-blue-600">Behavior</a></li>
                  </ul>
                </div>
                <div>
                  <a href="#github-integration" className="text-blue-600 hover:text-blue-800 font-medium">
                    GitHub Integration
                  </a>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><a href="#github-overview" className="text-gray-600 hover:text-blue-600">Overview</a></li>
                    <li><a href="#github-features" className="text-gray-600 hover:text-blue-600">Features</a></li>
                    <li><a href="#github-prerequisites" className="text-gray-600 hover:text-blue-600">Prerequisites</a></li>
                    <li><a href="#github-workflow" className="text-gray-600 hover:text-blue-600">Example Workflow</a></li>
                    <li><a href="#github-hosting" className="text-gray-600 hover:text-blue-600">Hosting dApp Frontends</a></li>
                    <li><a href="#github-monitoring" className="text-gray-600 hover:text-blue-600">Monitoring</a></li>
                  </ul>
                </div>
              </nav>
            </div>
            
            <div className="prose max-w-none">
              <h2 id="pinning-service" className="text-2xl font-semibold text-gray-900 mb-4">Pinning Service</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IPFS Pinning Service API Documentation</h3>
              
              <h4 id="pinning-overview" className="text-lg font-medium text-gray-900 mt-4 mb-2">Overview</h4>
              <p className="text-gray-600 mb-4">
                The Pinning Service API allows you to manage and persist content on IPFS by "pinning" CID objects.
                Pinning ensures that specific data remains available and is not garbage-collected by IPFS nodes.
              </p>
              <p className="text-gray-600 mb-4">
                This API is compatible with the <a href="#" className="text-blue-600 hover:text-blue-800">IPFS Pinning Service API specification v1.0.0</a>.
              </p>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Base URL</h4>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                https://api.pinion.io
              </div>
              
              <h4 id="pinning-authentication" className="text-lg font-medium text-gray-900 mt-6 mb-2">Authentication</h4>
              <p className="text-gray-600 mb-4">
                All endpoints require authentication using a Bearer token.
              </p>
              <div className="bg-gray-100 p-3 rounded-md">
                <strong>Example</strong>
                <pre className="mt-2 font-mono text-sm">Authorization: Bearer &lt;API_TOKEN&gt;</pre>
              </div>
              <p className="text-gray-600 mt-4 mb-6">
                To create or manage API tokens, visit your <a href="#" className="text-blue-600 hover:text-blue-800">Account Settings</a>.
              </p>
              
              <h4 id="pinning-endpoints" className="text-lg font-medium text-gray-900 mt-6 mb-2">Endpoints</h4>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">List Pins</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /pins
              </div>
              <p className="text-gray-600 mb-3">Retrieve a list of pinned or pinning requests.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Query Parameters</h6>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Name</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">cid</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Filter by specific CID (exact match or comma-separated list)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">name</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Filter by user-defined pin name</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">status</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Filter by pin status (queued, pinning, pinned, failed)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">limit</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">integer</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Maximum number of results to return</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">before</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Return results created before this ISO 8601 timestamp</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">after</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Return results created after this ISO 8601 timestamp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "count": 1,
  "results": [
    {
      "requestid": "a7b3f77e-...-4fae",
      "status": "pinned",
      "created": "2025-10-27T00:00:00Z",
      "pin": {
        "cid": "bafybeigdyrztp...",
        "name": "my-photo",
        "origins": ["/ip4/203.0.113.1/tcp/4001/p2p/QmExample"],
        "meta": {"source": "user-upload"}
      },
      "delegates": ["/ip4/203.0.113.2/tcp/4001/p2p/QmDelegateNode"]
    }
  ]
}`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Add a Pin</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                POST /pins
              </div>
              <p className="text-gray-600 mb-3">Create a new pin request.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Request Body</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                <pre>{`{
  "cid": "bafybeigdyrztp...",
  "name": "project-backup",
  "origins": ["/ip4/203.0.113.10/tcp/4001/p2p/QmOrigin"],
  "meta": {"environment": "production"}
}`}</pre>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "requestid": "8f3e4dc1-...-9ef1",
  "status": "queued",
  "pin": {
    "cid": "bafybeigdyrztp...",
    "name": "project-backup",
    "origins": ["/ip4/203.0.113.10/tcp/4001/p2p/QmOrigin"],
    "meta": {"environment": "production"}
  },
  "delegates": [],
  "created": "2025-10-27T00:00:00Z"
}`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Get Pin by ID</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /pins/{`{requestid}`}
              </div>
              <p className="text-gray-600 mb-3">Retrieve metadata and status for a specific pin request.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "requestid": "8f3e4dc1-...-9ef1",
  "status": "pinned",
  "pin": {
    "cid": "bafybeigdyrztp...",
    "name": "project-backup",
    "origins": [],
    "meta": {"environment": "production"}
  },
  "delegates": [
    "/ip4/198.51.100.22/tcp/4001/p2p/QmDelegateNode"
  ],
  "created": "2025-10-27T00:00:00Z"
}`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Replace a Pin</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                POST /pins/{`{requestid}`}
              </div>
              <p className="text-gray-600 mb-3">Replace the pin for a given request ID with a new CID or metadata.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Request Body</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                <pre>{`{
  "cid": "bafybeicx...",
  "name": "project-backup-v2"
}`}</pre>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "requestid": "8f3e4dc1-...-9ef1",
  "status": "queued",
  "pin": {
    "cid": "bafybeicx...",
    "name": "project-backup-v2"
  },
  "created": "2025-10-27T00:00:00Z"
}`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Remove a Pin</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                DELETE /pins/{`{requestid}`}
              </div>
              <p className="text-gray-600 mb-3">Remove the pin request. This unpins the corresponding CID from the service's nodes.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                204 No Content
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Status Codes</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Code</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">200</td><td className="border border-gray-300 px-3 py-2 text-sm">OK</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">201</td><td className="border border-gray-300 px-3 py-2 text-sm">Created</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">204</td><td className="border border-gray-300 px-3 py-2 text-sm">No Content</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">400</td><td className="border border-gray-300 px-3 py-2 text-sm">Bad Request</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">401</td><td className="border border-gray-300 px-3 py-2 text-sm">Unauthorized</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">404</td><td className="border border-gray-300 px-3 py-2 text-sm">Not Found</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">500</td><td className="border border-gray-300 px-3 py-2 text-sm">Internal Server Error</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Data Model</h4>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Pin Object</h5>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Field</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">cid</td><td className="border border-gray-300 px-3 py-2 text-sm">string</td><td className="border border-gray-300 px-3 py-2 text-sm">The IPFS content identifier</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">name</td><td className="border border-gray-300 px-3 py-2 text-sm">string</td><td className="border border-gray-300 px-3 py-2 text-sm">Optional name for the pin</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">origins</td><td className="border border-gray-300 px-3 py-2 text-sm">array[string]</td><td className="border border-gray-300 px-3 py-2 text-sm">Multiaddresses where content was originally found</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">meta</td><td className="border border-gray-300 px-3 py-2 text-sm">object</td><td className="border border-gray-300 px-3 py-2 text-sm">Arbitrary key-value metadata provided by the user</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">PinStatus Object</h5>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Field</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">requestid</td><td className="border border-gray-300 px-3 py-2 text-sm">string</td><td className="border border-gray-300 px-3 py-2 text-sm">Unique identifier for the pin request</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">status</td><td className="border border-gray-300 px-3 py-2 text-sm">string</td><td className="border border-gray-300 px-3 py-2 text-sm">One of queued, pinning, pinned, failed</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">created</td><td className="border border-gray-300 px-3 py-2 text-sm">string</td><td className="border border-gray-300 px-3 py-2 text-sm">ISO 8601 timestamp when pin request was created</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">pin</td><td className="border border-gray-300 px-3 py-2 text-sm">object</td><td className="border border-gray-300 px-3 py-2 text-sm">The pin object</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">delegates</td><td className="border border-gray-300 px-3 py-2 text-sm">array[string]</td><td className="border border-gray-300 px-3 py-2 text-sm">Multiaddresses of nodes storing this content</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Examples</h4>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Pin a File with curl</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                <pre>{`curl -X POST https://api.pinion.io/pins \\
  -H "Authorization: Bearer $PINION_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
        "cid": "bafybeigdyrztp...",
        "name": "my-data"
      }'`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">List All Pinned CIDs</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`curl -H "Authorization: Bearer $PINION_TOKEN" \\
     https://api.pinion.io/pins?status=pinned`}</pre>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Webhooks (Optional Feature)</h4>
              <p className="text-gray-600 mb-3">
                If configured, the service can notify your endpoint whenever pin status changes.
              </p>
              <p className="text-gray-600 mb-3">POST to your webhook URL with payload:</p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "requestid": "8f3e4dc1-...-9ef1",
  "status": "pinned",
  "cid": "bafybeigdyrztp..."
}`}</pre>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Rate Limits</h4>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Tier</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Requests per Minute</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Free</td><td className="border border-gray-300 px-3 py-2 text-sm">60</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Pro</td><td className="border border-gray-300 px-3 py-2 text-sm">600</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Enterprise</td><td className="border border-gray-300 px-3 py-2 text-sm">Custom</td></tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-600 mb-3">When the rate limit is exceeded, the service returns:</p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "error": "rate_limit_exceeded",
  "message": "Too many requests, please wait before retrying."
}`}</pre>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Errors</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Error Code</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">invalid_cid</td><td className="border border-gray-300 px-3 py-2 text-sm">The CID format is invalid</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">pin_not_found</td><td className="border border-gray-300 px-3 py-2 text-sm">The specified pin does not exist</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">quota_exceeded</td><td className="border border-gray-300 px-3 py-2 text-sm">Storage quota has been reached</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">unauthorized</td><td className="border border-gray-300 px-3 py-2 text-sm">Invalid or missing token</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Gateway API</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">IPFS Gateway API Documentation</h3>
              
              <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Overview</h4>
              <p className="text-gray-600 mb-4">
                The IPFS Gateway API provides HTTP access to content stored on the InterPlanetary File System (IPFS).
                It allows clients to retrieve content by its CID or path and supports both raw data streaming and browser-friendly delivery.
              </p>
              <p className="text-gray-600 mb-4">
                The API follows the <a href="#" className="text-blue-600 hover:text-blue-800">IPFS Gateway specification</a> and supports immutable (/ipfs/) and mutable (/ipns/) namespaces.
              </p>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Base URL</h4>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                https://gateway.pinion.io
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Authentication</h4>
              <p className="text-gray-600 mb-4">
                Public gateways may not require authentication.
                For private or usage-limited gateways, authenticate using a Bearer token:
              </p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                Authorization: Bearer &lt;API_TOKEN&gt;
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Endpoints</h4>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Retrieve by CID</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /ipfs/{`{cid}`}
              </div>
              <p className="text-gray-600 mb-3">Fetch immutable content identified by the CID.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Example</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                <pre>{`GET /ipfs/bafybeigdyrztp... HTTP/1.1
Host: gateway.pinion.io
Accept: */*`}</pre>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <p className="text-gray-600 mb-3">
                Returns the raw file or block associated with the CID.
                Content-Type depends on the data (e.g. application/octet-stream, text/html, application/json, etc.)
              </p>
              
              <div className="bg-gray-100 p-3 rounded-md">
                <strong>Example Response</strong>
                <pre className="mt-2 font-mono text-sm">{`HTTP/1.1 200 OK
Content-Type: text/plain
Content-Length: 14

Hello, IPFS!`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Retrieve by Path</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /ipfs/{`{cid}`}/{`{path}`}
              </div>
              <p className="text-gray-600 mb-3">Retrieve a specific file or subdirectory inside a DAG or UnixFS directory.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Example</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /ipfs/bafybeigdyrztp.../images/logo.png
              </div>
              
              <p className="text-gray-600 mb-6">Returns the content of logo.png as stored within the directory DAG.</p>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Mutable Namespace (IPNS)</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /ipns/{`{peerid_or_domain}`}
              </div>
              <p className="text-gray-600 mb-3">Resolve mutable content published via IPNS.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Example</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                GET /ipns/k51qzi5uqu5dhiw1m07xv3t...
              </div>
              <p className="text-gray-600 mb-6">Resolves to the latest content published under that key.</p>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Metadata Only</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                HEAD /ipfs/{`{cid}`}
              </div>
              <p className="text-gray-600 mb-3">Retrieve only headers and metadata about a CID, without downloading the body.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Example</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                curl -I https://gateway.pinion.io/ipfs/bafybeigdyrztp...
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`HTTP/1.1 200 OK
Content-Type: application/octet-stream
X-Ipfs-Path: /ipfs/bafybeigdyrztp...
X-Ipfs-Size: 12345`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Range Requests</h5>
              <p className="text-gray-600 mb-3">Supports HTTP Range requests for partial retrieval.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Example</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                <pre>{`GET /ipfs/bafybeigdyrztp... HTTP/1.1
Range: bytes=0-1023`}</pre>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/4096`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Directory Listings</h5>
              <p className="text-gray-600 mb-3">When the CID references a directory DAG, the gateway returns an HTML or JSON directory listing.</p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Example</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                curl https://gateway.pinion.io/ipfs/bafybeigdyrztp...
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response (HTML)</h6>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                <pre>{`<!DOCTYPE html>
<html>
  <head><title>Index of /ipfs/bafybeigdyrztp...</title></head>
  <body>
    <h1>Index of /ipfs/bafybeigdyrztp...</h1>
    <ul>
      <li><a href="file.txt">file.txt</a></li>
      <li><a href="images/">images/</a></li>
    </ul>
  </body>
</html>`}</pre>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Response (JSON)</h6>
              <p className="text-gray-600 mb-3">Add header Accept: application/json:</p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "type": "directory",
  "cid": "bafybeigdyrztp...",
  "entries": [
    {"Name": "file.txt", "CID": "bafybeib...", "Size": 1024, "Type": "file"},
    {"Name": "images", "CID": "bafybeid...", "Type": "directory"}
  ]
}`}</pre>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Content-Type Negotiation</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Accept Header</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Response Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">application/json</td><td className="border border-gray-300 px-3 py-2 text-sm">JSON DAG node</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">text/html</td><td className="border border-gray-300 px-3 py-2 text-sm">Rendered HTML directory listing</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">application/octet-stream</td><td className="border border-gray-300 px-3 py-2 text-sm">Raw block or file content</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Pinning via Gateway (Optional Feature)</h4>
              <p className="text-gray-600 mb-3">
                If the gateway is linked with your Pinning Service account, you may request on-demand pinning via query parameter:
              </p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3">
                <pre>{`GET /ipfs/bafybeigdyrztp...?pin=true
Authorization: Bearer <API_TOKEN>`}</pre>
              </div>
              <p className="text-gray-600 mb-3">Response headers will include:</p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                X-Pinion-Pin-Status: pinned
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Status Codes</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Code</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">200</td><td className="border border-gray-300 px-3 py-2 text-sm">OK</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">202</td><td className="border border-gray-300 px-3 py-2 text-sm">Accepted (content is being fetched or pinned)</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">206</td><td className="border border-gray-300 px-3 py-2 text-sm">Partial Content</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">400</td><td className="border border-gray-300 px-3 py-2 text-sm">Bad Request</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">401</td><td className="border border-gray-300 px-3 py-2 text-sm">Unauthorized</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">403</td><td className="border border-gray-300 px-3 py-2 text-sm">Forbidden</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">404</td><td className="border border-gray-300 px-3 py-2 text-sm">Not Found</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">500</td><td className="border border-gray-300 px-3 py-2 text-sm">Internal Server Error</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">504</td><td className="border border-gray-300 px-3 py-2 text-sm">Gateway Timeout (upstream content unavailable)</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Response Headers</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Header</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">X-Ipfs-Path</td><td className="border border-gray-300 px-3 py-2 text-sm">The resolved IPFS path</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">X-Ipfs-Roots</td><td className="border border-gray-300 px-3 py-2 text-sm">Root CID(s) of the DAG</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">X-Ipfs-Size</td><td className="border border-gray-300 px-3 py-2 text-sm">Size of the object in bytes (if known)</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">X-Pinion-Cache</td><td className="border border-gray-300 px-3 py-2 text-sm">HIT or MISS if the gateway caches responses</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">X-Content-Type-Options</td><td className="border border-gray-300 px-3 py-2 text-sm">Typically set to nosniff</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Caching</h4>
              <p className="text-gray-600 mb-4">
                Pinion Gateway caches content on first access.
                Subsequent requests for the same CID are served directly from cache if available.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Tier</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Cache Duration</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Free</td><td className="border border-gray-300 px-3 py-2 text-sm">24 hours</td><td className="border border-gray-300 px-3 py-2 text-sm">May be evicted early under load</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Pro</td><td className="border border-gray-300 px-3 py-2 text-sm">7 days</td><td className="border border-gray-300 px-3 py-2 text-sm">Cached across all edge regions</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Enterprise</td><td className="border border-gray-300 px-3 py-2 text-sm">Custom</td><td className="border border-gray-300 px-3 py-2 text-sm">Includes private caching and origin replication</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Errors</h4>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Error Code</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">invalid_cid</td><td className="border border-gray-300 px-3 py-2 text-sm">The CID format is invalid</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">not_found</td><td className="border border-gray-300 px-3 py-2 text-sm">The requested content could not be resolved</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">timeout</td><td className="border border-gray-300 px-3 py-2 text-sm">Upstream node did not respond in time</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">forbidden</td><td className="border border-gray-300 px-3 py-2 text-sm">Access to private gateway content denied</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm font-mono">internal_error</td><td className="border border-gray-300 px-3 py-2 text-sm">Unexpected backend failure</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Examples</h4>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Retrieve File</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                curl https://gateway.pinion.io/ipfs/bafybeigdyrztp...
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Retrieve as JSON DAG</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                <pre>{`curl -H "Accept: application/json" \\
     https://gateway.pinion.io/ipfs/bafybeigdyrztp...`}</pre>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Retrieve via IPNS</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                curl https://gateway.pinion.io/ipns/example.com
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Partial Download</h5>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                curl -r 0-4095 https://gateway.pinion.io/ipfs/bafybeigdyrztp...
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Rate Limits</h4>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Tier</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Requests per Minute</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Max Response Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Free</td><td className="border border-gray-300 px-3 py-2 text-sm">60</td><td className="border border-gray-300 px-3 py-2 text-sm">50 MB</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Pro</td><td className="border border-gray-300 px-3 py-2 text-sm">600</td><td className="border border-gray-300 px-3 py-2 text-sm">500 MB</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-sm">Enterprise</td><td className="border border-gray-300 px-3 py-2 text-sm">Custom</td><td className="border border-gray-300 px-3 py-2 text-sm">Unlimited</td></tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-600 mb-3">When rate limit exceeded:</p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`{
  "error": "rate_limit_exceeded",
  "message": "Too many requests, please wait before retrying."
}`}</pre>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-12">Upload Service</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pinion Upload API v1</h3>
              
              <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Overview</h4>
              <p className="text-gray-600 mb-4">
                The Pinion Upload API allows clients to upload files or CAR (Content Addressable Archive) files, pin them to IPFS, and receive pin status updates. Each upload request may produce one or multiple pins, each with a unique status.
              </p>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Base URL</h4>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                http://pinion.build/upload/api/v1/
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Endpoint: POST /</h4>
              <p className="text-gray-600 mb-4">
                Uploads a file or CAR archive for pinning.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Request</h5>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Headers</h6>
              <p className="text-gray-600 mb-3">
                <strong>Content-Type (required):</strong>
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                <li>For a CAR file: <code className="bg-gray-100 px-1 rounded">application/vnd.ipld.car</code></li>
                <li>For regular files: any other valid MIME type (e.g., <code className="bg-gray-100 px-1 rounded">application/octet-stream</code>)</li>
              </ul>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Query Parameters</h6>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Parameter</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Type</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Required</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">format</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">optional</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">If set to car, the server treats the body as a CAR file regardless of Content-Type.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">name</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">string</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">optional</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">A human-readable name for the pin. If multiple roots are produced, names will be automatically suffixed.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Body</h6>
              <p className="text-gray-600 mb-4">
                The raw file data to pin. Either a single file or a CAR archive, depending on Content-Type or format.
              </p>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Authentication</h6>
              <p className="text-gray-600 mb-4">
                Requests must be authenticated. The server identifies the user via context, typically through cookies or an Authorization header (see your account service integration). Unauthorized requests will return 401 Unauthorized.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Response</h5>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Successful Response (200 OK)</h6>
              <p className="text-gray-600 mb-3">Returns the status of the pinned content.</p>
              
              <p className="text-gray-600 mb-2"><strong>Single root pinned:</strong></p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                <pre>{`{
  "requestid": "uuid-string",
  "status": "PINNING",
  "created": "2025-10-27T01:23:45.678Z",
  "pin": {
    "cid": "bafybeib...",
    "name": "myfile"
  }
}`}</pre>
              </div>
              
              <p className="text-gray-600 mb-2"><strong>Multiple roots pinned:</strong></p>
              <p className="text-gray-600 mb-2">Returns an array of pin statuses:</p>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-6">
                <pre>{`[
  {
    "requestid": "uuid-string-1",
    "status": "PINNING",
    "created": "2025-10-27T01:23:45.678Z",
    "pin": {
      "cid": "bafybeib1...",
      "name": "myfile-root-0"
    }
  },
  {
    "requestid": "uuid-string-2",
    "status": "PINNING",
    "created": "2025-10-27T01:23:45.678Z",
    "pin": {
      "cid": "bafybeib2...",
      "name": "myfile-root-1"
    }
  }
]`}</pre>
              </div>
              
              <h6 className="text-sm font-medium text-gray-900 mb-2">Error Responses</h6>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Status Code</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Condition</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm">401 Unauthorized</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">User authentication failed.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm">500 Internal Server Error</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Failed to process the upload, store pin status, or send pin messages. The response body may include server error details.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Behavior</h5>
              <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                <li>The server processes the uploaded data and extracts one or more root CIDs.</li>
                <li>Each root receives a unique requestid and initial status of PINNING.</li>
                <li>Pin statuses are stored in the internal datastore (docstore) for tracking.</li>
                <li>Each pin status is encoded and published to a Pub/Sub topic to notify other services.</li>
                <li>The API returns all pin statuses in the response.</li>
              </ul>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Notes</h5>
              <ul className="list-disc list-inside text-gray-600 mb-6 ml-4">
                <li>If multiple roots are generated from a single upload, the server automatically appends <code className="bg-gray-100 px-1 rounded">-root-N</code> to the provided name for clarity.</li>
                <li>The requestid can be used to query pin status from downstream services or dashboards.</li>
                <li>All timestamps are returned in ISO 8601 UTC format.</li>
              </ul>

              <h2 id="github-integration" className="text-2xl font-semibold text-gray-900 mb-4 mt-12">GitHub Integration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">GitHub Integration with Pinion</h3>
              
              <h4 id="github-overview" className="text-lg font-medium text-gray-900 mt-4 mb-2">Overview</h4>
              <p className="text-gray-600 mb-4">
                Pinion's GitHub integration allows developers to automatically upload build artifacts and host decentralized application (dApp) frontends on IPFS directly from GitHub Actions or workflows. This enables seamless CI/CD for static sites, frontends, and other assets, while ensuring persistence and availability via Pinion's pinning service.
              </p>
              
              <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Base Pinion API URL</h4>
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                http://pinion.build/upload/api/v1/
              </div>
              
              <h4 id="github-features" className="text-lg font-medium text-gray-900 mt-6 mb-2">Features</h4>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Automatic artifact pinning</h5>
              <p className="text-gray-600 mb-4">
                Upload build outputs (e.g., dist/, build/) from GitHub workflows directly to Pinion.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">dApp frontend hosting</h5>
              <p className="text-gray-600 mb-4">
                Pinion hosts pinned frontend files and provides a content-addressable URL for accessing the application.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Multi-root support</h5>
              <p className="text-gray-600 mb-4">
                Handles multi-file builds (like Webpack or Vite outputs) by pinning each root CID separately.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-4 mb-2">Status tracking</h5>
              <p className="text-gray-600 mb-4">
                Each upload produces pin status messages for monitoring via Pinion's dashboard or webhooks.
              </p>
              
              <h4 id="github-prerequisites" className="text-lg font-medium text-gray-900 mt-6 mb-2">Prerequisites</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                <li>A Pinion account with an API token or credentials.</li>
                <li>A GitHub repository for your project.</li>
                <li>Optional: GitHub Secrets configured with your Pinion API token.</li>
              </ul>
              
              <h4 id="github-workflow" className="text-lg font-medium text-gray-900 mt-6 mb-2">Example Workflow: Upload Build Artifacts</h4>
              <p className="text-gray-600 mb-3">Create a <code className="bg-gray-100 px-1 rounded">.github/workflows/pinion-upload.yml</code> in your repository:</p>
              
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                <pre>{`name: Pinion Upload

on:
  push:
    branches:
      - main

jobs:
  upload:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Build project
        run: |
          npm install
          npm run build  # Outputs files to ./dist

      - name: Upload artifacts to Pinion
        uses: actions/http-client@v1
        with:
          url: http://pinion.build/upload/api/v1/
          method: POST
          headers: |
            Content-Type: application/octet-stream
            Authorization: Bearer \${{ secrets.PINION_API_TOKEN }}
          body: ./dist  # Path to your build output`}</pre>
              </div>
              
              <p className="text-gray-600 mb-4">
                <strong>Note:</strong> Replace <code className="bg-gray-100 px-1 rounded">./dist</code> with the folder containing your frontend build artifacts.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Parameters</h5>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Parameter</th>
                      <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">Content-Type</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">application/octet-stream for normal files or application/vnd.ipld.car for CAR archives.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">Authorization</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Bearer &lt;PINION_API_TOKEN&gt; for authentication.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 text-sm font-mono">name (query)</td>
                      <td className="border border-gray-300 px-3 py-2 text-sm">Optional human-readable name for the pinned build.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h4 id="github-hosting" className="text-lg font-medium text-gray-900 mt-6 mb-2">Hosting dApp Frontends</h4>
              <p className="text-gray-600 mb-3">After pinning, Pinion provides a content-addressable URL for your frontend:</p>
              
              <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                https://pinion.build/ipfs/&lt;root-cid&gt;/
              </div>
              
              <p className="text-gray-600 mb-4">
                <code className="bg-gray-100 px-1 rounded">&lt;root-cid&gt;</code> corresponds to the root CID returned in the pin status JSON.
              </p>
              <p className="text-gray-600 mb-4">
                Each time you push a new build, a new root CID is generated. Use your workflow to update references automatically.
              </p>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Handling Multiple Roots</h5>
              <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                <li>If your build produces multiple roots, Pinion will append <code className="bg-gray-100 px-1 rounded">-root-N</code> to each pin name for clarity.</li>
                <li>Your workflow should capture each root CID to generate URLs for hosted assets.</li>
              </ul>
              
              <h4 id="github-monitoring" className="text-lg font-medium text-gray-900 mt-6 mb-2">Monitoring Pin Status</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4 ml-4">
                <li>Each upload returns a JSON object (or array for multiple roots) with requestid, status, and pin.cid.</li>
                <li>Use the requestid to track pin progress or trigger downstream workflows.</li>
              </ul>
              
              <h5 className="text-base font-medium text-gray-900 mt-6 mb-2">Recommended Workflow Enhancements</h5>
              <ul className="list-disc list-inside text-gray-600 mb-6 ml-4">
                <li><strong>CAR upload:</strong> For large builds, package your files as a CAR file to ensure deterministic pinning.</li>
                <li><strong>Caching:</strong> Store previous root CIDs in workflow artifacts to skip re-uploading unchanged files.</li>
                <li><strong>Notifications:</strong> Subscribe to Pinion Pub/Sub messages for automated deployment triggers.</li>
              </ul>
              
              <p className="text-gray-600 mb-6">
                This integration enables fully automated, GitHub-native deployment of dApps and pinned assets with IPFS persistence, reducing manual upload overhead and simplifying CI/CD pipelines.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}