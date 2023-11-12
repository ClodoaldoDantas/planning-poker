'use client'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { TaskList } from './task-list'
import { AddTask } from './add-task'

import styles from './styles.module.scss'
import { useRoom } from '@/contexts/RoomContext'

export function Planning() {
  const { room } = useRoom()

  return (
    <>
      {room ? (
        <div className={styles.roomHeader}>
          <h2 className={styles.roomHeaderTitle}>{room?.name}</h2>
          <AddTask />
        </div>
      ) : (
        <div className={styles.roomHeader}>
          <Skeleton height={48} width={200} />
          <Skeleton height={48} width={200} />
        </div>
      )}

      {room && <TaskList />}
    </>
  )
}
