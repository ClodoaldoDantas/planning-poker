'use client'

import { useAuth } from '@/contexts/AuthContext'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth()

  if (!user) {
    redirect('/')
  }

  return <>{children}</>
}
