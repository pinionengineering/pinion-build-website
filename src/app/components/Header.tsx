'use client';

import { useState } from 'react';
import { UserManager } from 'oidc-client-ts';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogin = async () => {
    try {
      const userManager = new UserManager({
        authority: "https://hydrogen.pinion.build/authen/application/o/pinion-cli",
        client_id: "R8MTFU93CxcZVnWIs25xvtIUQclXNWehhmBURCIq",
        redirect_uri: `${window.location.origin}/auth/callback`,
        scope: "openid email profile user_hint offline_access",
        response_type: "code",
      });
      
      await userManager.signinRedirect();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <header className="bg-slate-800 shadow-2xl border-b border-slate-600 relative z-20" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-slate-200">
              Pinion
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
            <a
              href="/"
              className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-400"
            >
              Home
            </a>
            <a
              href="/developers"
              className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-400"
            >
              For Developers
            </a>
            <a
              href="/minions"
              className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-400"
            >
              Run a Minion
            </a>
            <a
              href="/docs"
              className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-400"
            >
              Documentation
            </a>
            <a
              href="/technology"
              className="text-slate-300 hover:text-white hover:bg-slate-700/50 px-3 py-2 rounded-md transition-all duration-200 border-b-2 border-transparent hover:border-blue-400"
            >
              Technology
            </a>
            <div className="border-l border-slate-600 pl-6 space-x-4">
              <button
                onClick={handleLogin}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                Login
              </button>
              <a
                href="mailto:beta@pinioneng.com?subject=Beta Access Request&body=Hi!,%0A%0AI would like to be part of the Pinion platform beta program. including three months of free storage and first-mover discounts.%0A%0AThank you!"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Sign Up
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-600 bg-slate-800">
          <nav className="px-4 pt-2 pb-3 space-y-1" role="navigation" aria-label="Mobile navigation">
            <a
              href="/"
              className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/developers"
              className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              For Developers
            </a>
            <a
              href="/minions"
              className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Run a Minion
            </a>
            <a
              href="/docs"
              className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </a>
            <a
              href="/technology"
              className="flex items-center px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-all duration-200 border-l-4 border-transparent hover:border-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </a>
            <div className="border-t border-slate-600 pt-2 mt-2">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogin();
                }}
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200 w-full text-left"
              >
                Login
              </button>
              <a
                href="mailto:beta@pinioneng.com?subject=Beta Access Request&body=Hi!,%0A%0AI would like to be part of the Pinion platform beta program. including three months of free storage and first-mover discounts.%0A%0AThank you!"
                className="block px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}