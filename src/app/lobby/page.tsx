import { Bot } from 'lucide-react'
import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { Link } from '@/components/link'
import { JoinChannel } from './join-channel'

import styles from './page.module.scss'

export default function LobbyPage() {
  return (
    <Center>
      <section className={styles.lobbyPage}>
        <Header />

        <div className={styles.card}>
          <div className={styles.cardActions}>
            <Link href="/channels/new" variant="success">
              <Bot size={24} />
              Criar um novo canal
            </Link>
          </div>

          <JoinChannel />
        </div>
      </section>
    </Center>
  )
}
