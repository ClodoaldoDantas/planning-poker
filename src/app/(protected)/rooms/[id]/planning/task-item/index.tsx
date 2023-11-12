import classNames from 'classnames'
import { useState } from 'react'
import { ClipboardCheck } from 'lucide-react'
import { Task } from '@/types/task'

import styles from './styles.module.scss'

const tShirts = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '?', '☕']

export function TaskItem({ task }: { task: Task }) {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  async function handleSelectCard(card: string) {
    if (card === activeCard) {
      setActiveCard(null)
    } else {
      setActiveCard(card)
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
