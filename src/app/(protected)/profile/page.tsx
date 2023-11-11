import Link from 'next/link'
import { ChevronRight, Heart, Tv2 } from 'lucide-react'
import { Center } from '@/components/center'
import { BackButton } from '@/components/back-button'
import { SignOutButton } from '@/components/sign-out-button'
import { ProfileHeader } from './profile-header'

import styles from './page.module.scss'

export default function ProfilePage() {
  return (
    <Center>
      <section className={styles.profilePage}>
        <BackButton href="/lobby">Voltar para o lobby</BackButton>

        <ProfileHeader />

        <nav className={styles.profilePageMenu}>
          <Link href="/profile">
            <Tv2 size={20} />
            <span>Acessar minhas salas</span>
            <ChevronRight className={styles.arrow} size={20} />
          </Link>

          <Link href="/profile">
            <Heart size={20} />
            <span>Acessar favoritos</span>
            <ChevronRight className={styles.arrow} size={20} />
          </Link>

          <SignOutButton />
        </nav>
      </section>
    </Center>
  )
}
