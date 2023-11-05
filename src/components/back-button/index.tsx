import { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import styles from './styles.module.scss'

type BackButtonProps = {
  href: string
  children: ReactNode
}

export function BackButton(props: BackButtonProps) {
  return (
    <Link className={styles.backButton} href={props.href}>
      <ChevronLeft size={20} />
      {props.children}
    </Link>
  )
}
