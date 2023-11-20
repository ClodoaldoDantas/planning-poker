import Link from 'next/link'
import { ChevronRight, Home, Tv2 } from 'lucide-react'

import { Center } from '@/components/center'
import { BackButton } from '@/components/back-button'
import { SignOutButton } from '@/components/sign-out-button'
import { ProfileInfo } from '@/components/profile-info'

import styles from './page.module.scss'

export default function ProfilePage() {
  return (
    <Center>
      <section className={styles.profilePage}>
        <BackButton />

        <ProfileInfo />

        <nav className={styles.profilePageMenu}>
          <Link href="/lobby">
            <Home size={20} />
            <span>Ir para o lobby</span>
            <ChevronRight className={styles.arrow} size={20} />
          </Link>

          <Link href="/my-rooms">
            <Tv2 size={20} />
            <span>Acessar minhas salas</span>
            <ChevronRight className={styles.arrow} size={20} />
          </Link>

          <SignOutButton />
        </nav>
      </section>
    </Center>
  )
}
