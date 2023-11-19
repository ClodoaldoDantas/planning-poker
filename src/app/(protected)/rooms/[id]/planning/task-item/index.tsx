import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { BarChart4, ClipboardCheck, Users } from 'lucide-react'
import { Task } from '@/types/task'

import { useAuth } from '@/contexts/AuthContext'
import { useVotes } from '@/hooks/useVotes'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

import { Button } from '@/components/button'
import { VoteResult } from '../vote-result'
import { tShirts } from '@/utils/pointing-scale'

import styles from './styles.module.scss'

export function TaskItem({ task }: { task: Task }) {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  const { votes, addVote, deleteVote, updateVote } = useVotes(task.id)
  const { user } = useAuth()

  async function handleCompleteTask() {
    const taskRef = doc(db, 'tasks', task.id)

    await updateDoc(taskRef, {
      completed: true,
    })
  }

  async function handleRedoVotes() {
    const taskRef = doc(db, 'tasks', task.id)

    await updateDoc(taskRef, {
      completed: false,
    })
  }

  async function handleSelectCard(card: string) {
    if (activeCard === null) {
      setActiveCard(card)
      await addVote(card)
    }

    if (card === activeCard) {
      setActiveCard(null)
      await deleteVote()
    }

    if (card !== activeCard) {
      setActiveCard(card)
      await updateVote(card)
    }
  }

  useEffect(() => {
    const userHasAlreadyVoted = votes.find((vote) => vote.userId === user?.id)

    if (userHasAlreadyVoted) {
      setActiveCard(userHasAlreadyVoted.value)
    }
  }, [votes, user?.id])

  return (
    <section key={task.id} className={styles.card}>
      <header className={styles.cardHeader}>
        <div>
          <ClipboardCheck size={24} />
          <h3>{task.title}</h3>
        </div>
      </header>

      {task.completed ? (
        <div className={styles.cardBody}>
          {votes.length > 0 && (
            <VoteResult votes={votes} onRedoVotes={handleRedoVotes} />
          )}
        </div>
      ) : (
        <div className={styles.cardBody}>
          <p>{task.description}</p>

          <ul className={styles.cardList}>
            {tShirts.map((item) => (
              <li className={styles.cardListItem} key={item}>
                <button
                  type="button"
                  onClick={() => handleSelectCard(item)}
                  className={classNames({
                    [styles.active]: activeCard === item,
                  })}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {votes.length > 0 && (
            <>
              <div className={styles.votes}>
                <Users size={24} />
                <span>{votes.map((vote) => vote.userName).join(', ')}</span>
              </div>

              <Button
                onClick={handleCompleteTask}
                className={styles.showResult}
                variant="success"
              >
                <BarChart4 size={20} />
                Mostrar resultado
              </Button>
            </>
          )}
        </div>
      )}
    </section>
  )
}
