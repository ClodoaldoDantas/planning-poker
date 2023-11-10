'use client'

import * as RadixAvatar from '@radix-ui/react-avatar'
import styles from './styles.module.scss'

interface AvatarProps {
  src?: string
  alt: string
}

export function Avatar(props: AvatarProps) {
  const altArray = props.alt.split(' ').slice(0, 2)

  const altInitials = altArray
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase()

  return (
    <RadixAvatar.Root className={styles.avatarRoot}>
      <RadixAvatar.Image
        className={styles.avatarImage}
        src={props.src}
        alt={props.alt}
      />

      <RadixAvatar.Fallback className={styles.avatarFallback} delayMs={600}>
        {altInitials}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
