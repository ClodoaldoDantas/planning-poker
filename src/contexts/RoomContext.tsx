'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useRouter } from 'next/navigation'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

type Room = {
  id: string
  name: string
  authorId: string
}

type RoomContextData = {
  room: Room | null
}

type RoomProviderProps = {
  roomId: string
  children: ReactNode
}

const RoomContext = createContext({} as RoomContextData)

export function RoomProvider({ roomId, children }: RoomProviderProps) {
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
    <RoomContext.Provider value={{ room }}>{children}</RoomContext.Provider>
  )
}

export const useRoom = () => useContext(RoomContext)
