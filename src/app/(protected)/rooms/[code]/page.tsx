import { PlusCircle } from 'lucide-react'

import { Logo } from '@/components/logo'
import { Profile } from '@/components/profile'
import { Container } from '@/components/container'
import { Button } from '@/components/button'
import { StoryList } from './story-list'

import styles from './page.module.scss'

export default function RoomPage({ params }: { params: { code: string } }) {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Logo size="sm" />
          <Profile size="sm" />
        </Container>
      </header>

      <main className={styles.main}>
        <Container>
          <div className={styles.pageHeader}>
            <h2 className={styles.title}>Ohio Planning</h2>

            <Button variant="success">
              <PlusCircle size={24} /> Adicionar Tarefa
            </Button>
          </div>

          <StoryList />
        </Container>
      </main>
    </>
  )
}
