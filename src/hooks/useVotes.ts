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
  updateDoc,
} from 'firebase/firestore'

export function useVotes(taskId: string) {
  const { user } = useAuth()

  const [votes, setVotes] = useState<Vote[]>([])

  const getVoteByUserId = async (userId?: string) => {
    const taskRef = doc(db, 'tasks', taskId)
    const votesCollection = collection(taskRef, 'votes')

    const q = query(votesCollection, where('userId', '==', userId))
    const querySnapshot = await getDocs(q)

    const vote = querySnapshot.docs[0]

    if (!vote.exists()) {
      return null
    }

    return {
      id: vote.id,
      collection: votesCollection,
    }
  }

  const addVote = async (card: string) => {
    try {
      const taskRef = doc(db, 'tasks', taskId)
      const votesCollection = collection(taskRef, 'votes')

      addDoc(votesCollection, {
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
      const vote = await getVoteByUserId(user?.id)

      if (!vote) {
        throw new Error('Vote not found')
      }

      await deleteDoc(doc(vote.collection, vote.id))
    } catch (error) {
      console.log(error)
    }
  }

  const updateVote = async (updatedValue: string) => {
    try {
      const vote = await getVoteByUserId(user?.id)

      if (!vote) {
        throw new Error('Vote not found')
      }

      await updateDoc(doc(vote.collection, vote.id), {
        value: updatedValue,
      })
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
    updateVote,
    votes,
  }
}
