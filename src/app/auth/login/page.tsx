"use client"

import { UserManager } from "oidc-client-ts"

const userManager = new UserManager({
  authority: "https://hydrogen.pinion.build/authen/application/o/pinion-cli",
  client_id: "R8MTFU93CxcZVnWIs25xvtIUQclXNWehhmBURCIq",
  redirect_uri: typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : "",
  scope: "openid email profile user_hint offline_access",
  response_type: "code",
})

export default function LoginPage() {
  const handlePinionLogin = async () => {
    try {
      await userManager.signinRedirect()
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Pinion
          </h2>
        </div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <button
              onClick={handlePinionLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in with Pinion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}