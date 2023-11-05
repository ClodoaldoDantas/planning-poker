import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { Profile } from '@/components/profile'
import { BackButton } from '@/components/back-button'

import styles from './page.module.scss'

export default function ProfilePage() {
  return (
    <Center>
      <section className={styles.profilePage}>
        <BackButton href="/lobby">Voltar para o lobby</BackButton>

        <Header>
          <Profile />
        </Header>

        <div>Tela de perfil</div>
      </section>
    </Center>
  )
}
