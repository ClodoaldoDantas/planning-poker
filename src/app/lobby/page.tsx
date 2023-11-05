import { Bot } from 'lucide-react'
import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { Button } from '@/components/button'
import { JoinChannel } from './join-channel'

import styles from './page.module.scss'

export default function LobbyPage() {
  return (
    <Center>
      <section className={styles.lobbyPage}>
        <Header />

        <div className={styles.card}>
          <div className={styles.cardActions}>
            <Button variant="success">
              <Bot size={24} />
              Criar um novo canal
            </Button>
          </div>

          <JoinChannel />
        </div>
      </section>
    </Center>
  )
}
