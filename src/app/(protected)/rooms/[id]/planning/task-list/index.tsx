import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import { TaskItem } from '../task-item'
import { useTasks } from '@/hooks/useTasks'

import emptyImage from '@/assets/empty.svg'
import styles from './styles.module.scss'

export function TaskList() {
  const { isLoading, tasks } = useTasks()

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
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
