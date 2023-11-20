import { useEffect, useState } from 'react'
import { Room } from '@/types/room'

import { db } from '@/lib/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useAuth } from '@/contexts/AuthContext'

export function useRooms() {
  const [rooms, setRooms] = useState<Room[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useAuth()

  useEffect(() => {
    const getRooms = async () => {
      const roomsCollection = collection(db, 'rooms')
      const q = query(roomsCollection, where('authorId', '==', user?.id))

      const querySnapshot = await getDocs(q)
      const rooms: Room[] = []

      querySnapshot.forEach((doc) => {
        rooms.push({
          id: doc.id,
          authorId: doc.data().authorId,
          name: doc.data().name,
        })
      })

      setRooms(rooms)
      setIsLoading(false)
    }

    getRooms()
  }, [user?.id])

  return {
    rooms,
    isLoading,
  }
}
