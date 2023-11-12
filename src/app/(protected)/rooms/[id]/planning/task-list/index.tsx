'use client'

import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import { useEffect, useState } from 'react'
import { ClipboardCheck } from 'lucide-react'

import { collection, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import emptyImage from '@/assets/empty.svg'
import styles from './styles.module.scss'

type Task = {
  id: string
  title: string
  description: string
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
          description: doc.data().description,
          votes: doc.data().votes,
          completed: doc.data().completed,
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
    return (
      <div className={styles.wrapper}>
        <Skeleton height={360} width={800} />
      </div>
    )
  }

  return (
    <div className={`${styles.wrapper} ${styles.grid}`}>
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

          <div className={styles.cardBody}>
            <p>{task.description}</p>
          </div>
        </section>
      ))}
    </div>
  )
}