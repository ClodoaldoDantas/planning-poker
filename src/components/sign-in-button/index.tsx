'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../button'

export function SignInButton() {
  const router = useRouter()

  function handleSignIn() {
    router.push('/lobby')
  }

  return (
    <Button variant="secondary" onClick={handleSignIn}>
      Entre na sua conta google
    </Button>
  )
}
