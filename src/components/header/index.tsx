import { ReactNode } from 'react'
import styles from './styles.module.scss'

type HeaderProps = {
  children?: ReactNode
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1>🎲 Planning Poker</h1>
        <p>Estimativas simples e divertidas.</p>
      </div>

      {props.children}
    </header>
  )
}
