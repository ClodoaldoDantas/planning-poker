import { useEffect, useState } from 'react'
import { Task } from '@/types/task'

import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useRoom } from '@/contexts/RoomContext'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { room } = useRoom()
  const roomId = room!.id

  useEffect(() => {
    const tasksCollectionRef = collection(db, 'tasks')
    const q = query(tasksCollectionRef, where('roomId', '==', roomId))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
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

  return {
    isLoading,
    tasks,
  }
}
