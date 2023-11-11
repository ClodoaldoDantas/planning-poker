'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '@/lib/firebase'
import { Button } from '@/components/button'
import { TaskList } from '../task-list'

import styles from './styles.module.scss'

type Room = {
  id: string
  name: string
  tasks: any[]
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
        const { name, tasks } = docSnap.data()
        setRoom({ id: roomId, name, tasks })
      } else {
        router.replace('/lobby?error=not-found')
      }
    }

    fetchRoom()
  }, [roomId, router])

  if (!room) {
    return null
  }

  return (
    <>
      <div className={styles.roomHeader}>
        <h2 className={styles.roomHeaderTitle}>{room.name}</h2>

        <Button variant="success">
          <PlusCircle size={24} /> Adicionar Tarefa
        </Button>
      </div>

      <TaskList />
    </>
  )
}
