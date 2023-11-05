'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../button'
import { useAuth } from '@/contexts/AuthContext'

export function SignInButton() {
  const router = useRouter()
  const { signInWithGoogle } = useAuth()

  async function handleSignIn() {
    await signInWithGoogle()

    router.push('/lobby')
  }

  return (
    <Button variant="secondary" onClick={handleSignIn}>
      Entre na sua conta google
    </Button>
  )
}
