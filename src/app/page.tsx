import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { SignInButton } from '@/components/sign-in-button'

import styles from './page.module.scss'

export default function SignInPage() {
  return (
    <Center>
      <section className={styles.signInPage}>
        <Header />
        <SignInButton />
      </section>
    </Center>
  )
}
