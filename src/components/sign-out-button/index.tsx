'use client'

import { useAuth } from '@/contexts/AuthContext'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SignOutButton() {
  const { signOutApp } = useAuth()
  const router = useRouter()

  async function handleSignOut() {
    await signOutApp()
    router.push('/')
  }

  return (
    <button onClick={handleSignOut} type="button">
      <LogOut size={20} />
      Sair da Conta
    </button>
  )
}
