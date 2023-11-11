'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { db } from '@/lib/firebase'
import { TaskList } from './task-list'
import { AddTask } from './add-task'

import styles from './styles.module.scss'

type Room = {
  id: string
  name: string
  authorId: string
}

type PlanningProps = {
  roomId: string
}

export function Planning({ roomId }: PlanningProps) {
  const [room, setRoom] = useState<Room | null>(null)

  const router = useRouter()

  useEffect(() => {
    const fetchRoom = async () => {
      const docRef = doc(db, 'rooms', roomId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const { name, authorId } = docSnap.data()

        setRoom({
          id: roomId,
          name,
          authorId,
        })
      } else {
        router.replace('/lobby?error=not-found')
      }
    }

    fetchRoom()
  }, [roomId, router])

  return (
    <>
      {room ? (
        <div className={styles.roomHeader}>
          <h2 className={styles.roomHeaderTitle}>{room?.name}</h2>
          <AddTask roomId={roomId} />
        </div>
      ) : (
        <div className={styles.roomHeader}>
          <Skeleton height={48} width={200} />
          <Skeleton height={48} width={200} />
        </div>
      )}

      {room && <TaskList roomId={roomId} />}
    </>
  )
}
