import { ReactNode } from 'react'
import styles from './styles.module.scss'

type CenterProps = {
  className?: string
  children: ReactNode
}

export function Center(props: CenterProps) {
  return <main className={styles.center}>{props.children}</main>
}
