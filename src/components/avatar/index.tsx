'use client'

import * as RadixAvatar from '@radix-ui/react-avatar'
import styles from './styles.module.scss'
import classNames from 'classnames'

type AvatarProps = {
  src?: string
  size?: 'md' | 'sm'
  alt: string
}

export function Avatar({ src, alt, size = 'md' }: AvatarProps) {
  const altArray = alt.split(' ').slice(0, 2)

  const altInitials = altArray
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

  return (
    <RadixAvatar.Root
      className={classNames(styles.avatarRoot, {
        [styles.medium]: size === 'md',
        [styles.small]: size === 'sm',
      })}
    >
      <RadixAvatar.Image className={styles.avatarImage} src={src} alt={alt} />

      <RadixAvatar.Fallback className={styles.avatarFallback} delayMs={600}>
        {altInitials}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
