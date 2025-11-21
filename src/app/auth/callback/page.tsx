"use client"

import { useEffect, useState } from "react"
import { UserManager } from "oidc-client-ts"

let userManager: UserManager | null = null;

function getUserManager() {
  if (!userManager && typeof window !== "undefined") {
    userManager = new UserManager({
      authority: "https://hydrogen.pinion.build/authen",
      client_id: "R8MTFU93CxcZVnWIs25xvtIUQclXNWehhmBURCIq",
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: "openid email profile user_hint offline_access",
      response_type: "code",
    });
  }
  return userManager;
}

export default function CallbackPage() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const manager = getUserManager();
        if (!manager) throw new Error("UserManager not initialized");
        
        const user = await manager.signinRedirectCallback()
        console.log("User authenticated:", user)
        
        // Store user info in localStorage for now
        localStorage.setItem("user", JSON.stringify({
          accessToken: user.access_token,
          refreshToken: user.refresh_token,
          profile: user.profile
        }))
        
        // Redirect to home page
        window.location.href = "/"
      } catch (err) {
        console.error("Authentication callback error:", err)
        setError(err instanceof Error ? err.message : "Authentication failed")
      } finally {
        setLoading(false)
      }
    }

    handleCallback()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Completing authentication...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Authentication failed: {error}</p>
          <a
            href="/auth/login"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Try again
          </a>
        </div>
      </div>
    )
  }

  return null
}