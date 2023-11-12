import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'
import { Container } from '@/components/container'

import { CopyRoomButton } from './copy-room-button'
import { Planning } from './planning'
import styles from './page.module.scss'
import { RoomProvider } from '@/contexts/RoomContext'

export default function RoomPage({ params }: { params: { id: string } }) {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Logo size="sm" />

          <div className={styles.headerActions}>
            <CopyRoomButton code={params.id} />
            <Profile size="sm" />
          </div>
        </Container>
      </header>

      <main className={styles.main}>
        <Container>
          <RoomProvider roomId={params.id}>
            <Planning />
          </RoomProvider>
        </Container>
      </main>
    </>
  )
}
