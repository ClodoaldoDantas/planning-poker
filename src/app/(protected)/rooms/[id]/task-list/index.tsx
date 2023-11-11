'use client'

// import { ClipboardCheck } from 'lucide-react'

import Image from 'next/image'
import emptyImage from '@/assets/empty.svg'

import styles from './styles.module.scss'

export function TaskList() {
  return (
    <div className={styles.grid}>
      <div className={styles.emptyCard}>
        <Image src={emptyImage} alt="" />
        <p>Nenhuma tarefa encontrada</p>
      </div>

      {/* <section className={styles.card}>
        <header className={styles.cardHeader}>
          <div>
            <ClipboardCheck size={24} />
            <h3>Criar nova landing page</h3>
          </div>
        </header>
      </section> */}

      {/* <section className={styles.card}>
        <header className={styles.cardHeader}>
          <div>
            <ClipboardCheck size={24} />
            <h3>Criar uma nova seção de conteúdo</h3>
          </div>
        </header>
      </section> */}
    </div>
  )
}
