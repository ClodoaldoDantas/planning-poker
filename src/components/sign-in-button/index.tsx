'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../button'
import { useAuth } from '@/contexts/AuthContext'

import logoGoogle from '@/assets/google.svg'
import styles from './styles.module.scss'

export function SignInButton() {
  const router = useRouter()
  const { signInWithGoogle } = useAuth()

  async function handleSignIn() {
    await signInWithGoogle()

    router.push('/lobby')
  }

  return (
    <Button variant="secondary" onClick={handleSignIn}>
      <Image src={logoGoogle} alt="" className={styles.logo} />
      Entre na sua conta google
    </Button>
  )
}
