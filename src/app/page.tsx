import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { Button } from '@/components/button'

import styles from './page.module.scss'

export default function SignInPage() {
  return (
    <Center>
      <section className={styles.signIn}>
        <Header />
        <Button variant="secondary">Entre na sua conta google</Button>
      </section>
    </Center>
  )
}
