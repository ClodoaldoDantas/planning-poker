import { ClipboardCheck } from 'lucide-react'
import { Task } from '@/types/task'

import styles from './styles.module.scss'

export function TaskItem({ task }: { task: Task }) {
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
      </div>
    </section>
  )
}
