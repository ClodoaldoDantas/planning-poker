import { Center } from '@/components/center'
import { Profile } from '@/components/profile'
import { BackButton } from '@/components/back-button'

import styles from './page.module.scss'
import Link from 'next/link'
import { ChevronRight, Heart, LogOut, Tv2 } from 'lucide-react'

export default function ProfilePage() {
  return (
    <Center>
      <section className={styles.profilePage}>
        <BackButton href="/lobby">Voltar para o lobby</BackButton>

        <header className={styles.profilePageHeader}>
          <div className={styles.profilePageHeaderContent}>
            <h2>Taylor Owens</h2>
            <p>taylor@example.com</p>
          </div>

          <Profile />
        </header>

        <nav className={styles.profilePageMenu}>
          <Link href="/profile">
            <Tv2 size={20} />
            <span>Acessar meus canais</span>
            <ChevronRight className={styles.arrow} size={20} />
          </Link>

          <Link href="/profile">
            <Heart size={20} />
            <span>Acessar favoritos</span>
            <ChevronRight className={styles.arrow} size={20} />
          </Link>

          <button type="button">
            <LogOut size={20} />
            Sair da Conta
          </button>
        </nav>
      </section>
    </Center>
  )
}
