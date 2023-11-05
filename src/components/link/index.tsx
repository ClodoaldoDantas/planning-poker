import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { ReactNode } from 'react'

type LinkProps = {
  href: string
  variant?: 'primary' | 'secondary' | 'success' | 'dark'
  children: ReactNode
}

export function Link({ variant = 'primary', href, children }: LinkProps) {
  return (
    <NextLink className={classNames(styles.link, styles[variant])} href={href}>
      {children}
    </NextLink>
  )
}
