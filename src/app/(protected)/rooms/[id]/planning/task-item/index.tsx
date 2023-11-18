import classNames from 'classnames'
import { useState } from 'react'
import { ClipboardCheck } from 'lucide-react'
import { Task } from '@/types/task'

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useAuth } from '@/contexts/AuthContext'

import styles from './styles.module.scss'

const tShirts = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '?', '☕']

export function TaskItem({ task }: { task: Task }) {
  const [activeCard, setActiveCard] = useState<string | null>(null)
  const { user } = useAuth()

  async function addVote(card: string) {
    try {
      const taskRef = doc(db, 'tasks', task.id)
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

  async function deleteVote() {
    try {
      const taskRef = doc(db, 'tasks', task.id)
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

  async function handleSelectCard(card: string) {
    if (card === activeCard) {
      setActiveCard(null)
      await deleteVote()
    } else {
      setActiveCard(card)
      await addVote(card)
    }
  }

  return (
    <section key={task.id} className={styles.card}>
      <header className={styles.cardHeader}>
        <div>
          <ClipboardCheck size={24} />
          <h3>{task.title}</h3>
        </div>
      </header>

      <div className={styles.cardBody}>
        <p>{task.description}</p>

        <ul className={styles.cardList}>
          {tShirts.map((item) => (
            <li className={styles.cardListItem} key={item}>
              <button
                type="button"
                onClick={() => handleSelectCard(item)}
                className={classNames({ [styles.active]: activeCard === item })}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
