import { Bot, Pointer } from 'lucide-react'
import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { Link } from '@/components/link'
import { Profile } from '@/components/profile'
import { JoinRoom } from './join-room'

import styles from './page.module.scss'

export default function LobbyPage() {
  return (
    <Center>
      <section className={styles.lobbyPage}>
        <Header>
          <Profile />
        </Header>

        <div className={styles.card}>
          <div className={styles.cardActions}>
            <Link href="/rooms/new" variant="success">
              <Bot size={24} />
              Criar um nova sala
            </Link>

            <Link href="/my-rooms" variant="dark">
              <Pointer size={24} />
              Acessar minhas salas
            </Link>
          </div>

          <JoinRoom />
        </div>
      </section>
    </Center>
  )
}
