import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { Auth } from '@/components/auth'

import styles from './page.module.scss'

export default function SignInPage() {
  return (
    <Center>
      <section className={styles.signInPage}>
        <Header />
        <Auth />
      </section>
    </Center>
  )
}
