'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ClipboardCheck } from 'lucide-react'

import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import emptyImage from '@/assets/empty.svg'
import styles from './styles.module.scss'

type Task = {
  id: string
  title: string
  votes: any
  completed: boolean
  created_at: Date
}

type TaskListProps = {
  roomId: string
}

export function TaskList({ roomId }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const roomRef = doc(db, 'rooms', roomId)
    const tasksCollection = collection(roomRef, 'tasks')

    const unsubscribe = onSnapshot(tasksCollection, (querySnapshot) => {
      const tasks: Task[] = []

      querySnapshot.forEach((doc) => {
        tasks.push({
          id: doc.id,
          title: doc.data().title,
          votes: doc.data().votes,
          completed: doc.data().completed,
          created_at: doc.data().created_at.toDate(),
        } as Task)
      })

      setTasks(tasks)
      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [roomId])

  if (isLoading) {
    return null
  }

  return (
    <div className={styles.grid}>
      {tasks.length === 0 && (
        <div className={styles.emptyCard}>
          <Image src={emptyImage} alt="" />
          <p>Nenhuma tarefa encontrada</p>
        </div>
      )}

      {tasks.map((task) => (
        <section key={task.id} className={styles.card}>
          <header className={styles.cardHeader}>
            <div>
              <ClipboardCheck size={24} />
              <h3>{task.title}</h3>
            </div>
          </header>
        </section>
      ))}
    </div>
  )
}
