'use client'

import { useState } from 'react'
import { Bot, LogIn } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../input'

import styles from './styles.module.scss'

export function Auth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return isAuthenticated ? (
    <div className={styles.card}>
      <Button variant="success">
        <Bot size={24} />
        Criar uma novo canal
      </Button>

      <div className={styles.spacer}>ou entre em um canal</div>

      <form className={styles.form}>
        <Input type="text" placeholder="Digite o código do canal" />
        <Button type="submit">
          <LogIn size={24} />
          Entrar no canal
        </Button>
      </form>
    </div>
  ) : (
    <Button variant="secondary" onClick={handleSignIn}>
      Entre na sua conta google
    </Button>
  )
}
