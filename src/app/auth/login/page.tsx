"use client"

import { useEffect } from "react"
import { UserManager } from "oidc-client-ts"
import { AUTH_CONFIG } from "@/config/app.config"

export default function LoginPage() {
  useEffect(() => {
    const initiateLogin = async () => {
      try {
        const userManager = new UserManager({
          authority: AUTH_CONFIG.authority,
          client_id: AUTH_CONFIG.clientId,
          redirect_uri: `${window.location.origin}/auth/callback`,
          scope: AUTH_CONFIG.scope,
          response_type: AUTH_CONFIG.responseType,
        });

        // Automatically start OAuth redirect
        await userManager.signinRedirect();
      } catch (error) {
        console.error("Login error:", error);
      }
    };

    initiateLogin();
  }, []);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-slate-300">Redirecting to login...</p>
      </div>
    </div>
  );
}