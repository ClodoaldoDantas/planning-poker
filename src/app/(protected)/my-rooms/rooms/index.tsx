'use client'

import Skeleton from 'react-loading-skeleton'
import { LogIn } from 'lucide-react'

import { useRooms } from '@/hooks/useRooms'
import { Link } from '@/components/link'

import styles from './styles.module.scss'

export function Rooms() {
  const { rooms, isLoading } = useRooms()

  if (isLoading) {
    return (
      <div className={`${styles.grid} ${styles.spacing}`}>
        <Skeleton height={32} width={425} />
        <Skeleton height={32} width={425} />
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {rooms.map((room) => (
        <div className={styles.room} key={room.id}>
          <span>{room.name}</span>

          <Link href={`/rooms/${room.id}`}>
            <LogIn size={18} />
            Entrar
          </Link>
        </div>
      ))}
    </div>
  )
}
