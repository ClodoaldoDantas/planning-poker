import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { CreateRoom } from './create-room'
import { BackButton } from '@/components/back-button'
import { Profile } from '@/components/profile'

import styles from './page.module.scss'

export default function NewRoomPage() {
  return (
    <Center>
      <section className={styles.newChannelPage}>
        <BackButton />

        <Header>
          <Profile />
        </Header>

        <CreateRoom />
      </section>
    </Center>
  )
}
