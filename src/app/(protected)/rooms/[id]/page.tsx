import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'
import { Container } from '@/components/container'

import { CopyRoomButton } from './copy-room-button'
import { Planning } from './planning'
import styles from './page.module.scss'

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
          <Planning roomId={params.id} />
        </Container>
      </main>
    </>
  )
}
