import { Center } from '@/components/center'
import { Header } from '@/components/header'
import { CreateChannel } from './create-channel'
import { BackButton } from '@/components/back-button'

import styles from './page.module.scss'

export default function NewChannelPage() {
  return (
    <Center>
      <section className={styles.newChannelPage}>
        <BackButton href="/lobby">Voltar para o lobby</BackButton>
        <Header />
        <CreateChannel />
      </section>
    </Center>
  )
}
