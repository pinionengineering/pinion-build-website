export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pinion</h3>
            <p className="text-gray-400">
              Modern IPFS infrastructure for developers who need reliable, scalable, and trustless data storage.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="text-gray-400 not-italic">
              <div className="mb-2">
                <a href="mailto:admin@pinioneng.com" className="hover:text-white transition-colors duration-200">
                  admin@pinioneng.com
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © <time dateTime="2025">2025</time> Pinion Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}