'use client'

import { useAuth } from '@/contexts/AuthContext'
import { Avatar } from '../avatar'

import styles from './styles.module.scss'

export function ProfileInfo() {
  const { user } = useAuth()

  if (!user) {
    return null
  }

  return (
    <header className={styles.profilePageInfo}>
      <div className={styles.profilePageInfoContent}>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>

      <Avatar src={user.avatar} alt={user.name} size="md" />
    </header>
  )
}
