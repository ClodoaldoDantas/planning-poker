import { ReactNode } from 'react'
import styles from './styles.module.scss'
import { Logo } from '../logo'

type HeaderProps = {
  children?: ReactNode
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <p>Estimativas simples e divertidas.</p>
      </div>

      {props.children}
    </header>
  )
}
