'use client'

import { Profile } from '@/components/profile'
import styles from './styles.module.scss'
import { useAuth } from '@/contexts/AuthContext'

export function ProfileHeader() {
  const { user } = useAuth()

  return (
    <header className={styles.profilePageHeader}>
      <div className={styles.profilePageHeaderContent}>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>

      <Profile />
    </header>
  )
}
