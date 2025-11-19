'use client'

import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate auth check
    setTimeout(() => {
      setUser(null)
      setIsLoading(false)
    }, 1000)
  }, [])

  return { user, isLoading }
}

export function useAnalytics() {
  const trackEvent = (event: string, data?: any) => {
    console.log('Analytics Event:', event, data)
  }

  return { trackEvent }
}
