import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'
import { Container } from '@/components/container'
import { Planning } from './planning'

import styles from './page.module.scss'

export default function RoomPage({ params }: { params: { code: string } }) {
  return (
    <>
      <header className={styles.header}>
        <Container className={styles.container}>
          <Logo size="sm" />
          <Profile size="sm" />
        </Container>
      </header>

      <main>
        <Planning />
      </main>
    </>
  )
}
