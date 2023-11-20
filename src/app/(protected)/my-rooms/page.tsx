import { BackButton } from '@/components/back-button'
import { Center } from '@/components/center'
import { ProfileInfo } from '@/components/profile-info'
import { Rooms } from './rooms'

import styles from './page.module.scss'

export default function MyRoomsPage() {
  return (
    <Center>
      <section className={styles.myRoomsPage}>
        <BackButton />
        <ProfileInfo />
        <Rooms />
      </section>
    </Center>
  )
}
