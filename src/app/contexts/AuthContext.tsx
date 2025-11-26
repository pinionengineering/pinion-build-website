"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { UserManager } from "oidc-client-ts"

interface AuthUser {
  accessToken: string
  refreshToken?: string
  profile: {
    sub: string
    name?: string
    email?: string
    picture?: string
  }
}

interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

let userManager: UserManager | null = null

function getUserManager() {
  if (!userManager && typeof window !== "undefined") {
    userManager = new UserManager({
      authority: "https://hydrogen.pinion.build/authen/application/o/pinion-cli",
      client_id: "R8MTFU93CxcZVnWIs25xvtIUQclXNWehhmBURCIq",
      redirect_uri: `${window.location.origin}/auth/callback`,
      scope: "openid email profile user_hint offline_access",
      response_type: "code",
    })
  }
  return userManager
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
      try {
        const manager = getUserManager()
        if (!manager) {
          setIsLoading(false)
          return
        }

        const oidcUser = await manager.getUser()
        if (oidcUser && !oidcUser.expired) {
          setUser({
            accessToken: oidcUser.access_token,
            refreshToken: oidcUser.refresh_token,
            profile: oidcUser.profile
          })
        } else {
          const storedUser = localStorage.getItem("user")
          if (storedUser) {
            try {
              const parsedUser = JSON.parse(storedUser)
              setUser(parsedUser)
            } catch (error) {
              console.error("Failed to parse stored user:", error)
              localStorage.removeItem("user")
            }
          }
        }
      } catch (error) {
        console.error("Failed to load user:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async () => {
    try {
      const manager = getUserManager()
      if (!manager) throw new Error("UserManager not initialized")
      await manager.signinRedirect()
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  const logout = async () => {
    try {
      const manager = getUserManager()
      if (manager) {
        await manager.removeUser()
      }
      localStorage.removeItem("user")
      setUser(null)
      window.location.href = "/"
    } catch (error) {
      console.error("Logout error:", error)
      throw error
    }
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}