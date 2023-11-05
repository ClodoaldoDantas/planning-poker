import { LogIn } from 'lucide-react'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

import styles from './styles.module.scss'

export function JoinChannel() {
  return (
    <>
      <div className={styles.spacer}>ou entre em um canal</div>

      <form className={styles.form}>
        <Input type="text" placeholder="Digite o código do canal" />

        <Button type="submit">
          <LogIn size={24} />
          Entrar no canal
        </Button>
      </form>
    </>
  )
}
