import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { db } from '@/lib/firebase'
import { Vote } from '@/types/vote'

import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  onSnapshot,
} from 'firebase/firestore'

export function useVotes(taskId: string) {
  const { user } = useAuth()

  const [votes, setVotes] = useState<Vote[]>([])

  const addVote = async (card: string) => {
    try {
      const taskRef = doc(db, 'tasks', taskId)
      const votesSubCollection = collection(taskRef, 'votes')

      addDoc(votesSubCollection, {
        value: card,
        userId: user?.id,
        userName: user?.name,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const deleteVote = async () => {
    try {
      const taskRef = doc(db, 'tasks', taskId)
      const votesSubCollection = collection(taskRef, 'votes')

      const q = query(votesSubCollection, where('userId', '==', user?.id))
      const querySnapshot = await getDocs(q)

      const vote = querySnapshot.docs[0]
      if (!vote.exists) return

      await deleteDoc(doc(votesSubCollection, vote.id))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const taskRef = doc(db, 'tasks', taskId)
    const votesSubCollection = collection(taskRef, 'votes')

    const unsubscribe = onSnapshot(votesSubCollection, (querySnapshot) => {
      const votes: Vote[] = []

      querySnapshot.forEach((doc) => {
        const vote = {
          id: doc.id,
          value: doc.data().value,
          userName: doc.data().userName,
          userId: doc.data().userId,
        }

        votes.push(vote)
      })

      setVotes(votes)
    })

    return () => {
      unsubscribe()
    }
  }, [taskId, user?.id])

  return {
    addVote,
    deleteVote,
    votes,
  }
}
