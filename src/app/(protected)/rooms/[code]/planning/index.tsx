'use client'

import { Container } from '@/components/container'
import { ListChecks, ChevronRight, ClipboardCheck } from 'lucide-react'

// import Image from 'next/image'
// import emptyImage from '@/assets/empty.svg'

import styles from './styles.module.scss'

export function Planning() {
  return (
    <Container className={styles.grid}>
      <aside className={styles.card}>
        <header className={styles.cardHeader}>
          <div>
            <ListChecks size={24} />
            <h2>Histórias</h2>
          </div>
        </header>

        {/* <div className={styles.storyListEmpty}>
              <AlertCircle size={20} />
              <span>Nenhuma história encontrada.</span>
            </div> */}

        <nav className={styles.storyList}>
          <button className={styles.active} type="button">
            <ChevronRight size={20} /> Criar nova landing page
          </button>

          <button type="button">
            <ChevronRight size={20} /> Mudar o banner principal
          </button>

          <button type="button">
            <ChevronRight size={20} /> Adicionar nova seção de conteúdo
          </button>

          <button type="button">
            <ChevronRight size={20} /> Melhorar a acessibilidade da página
          </button>
        </nav>
      </aside>

      {/* <div className={styles.emptyCard}>
            <Image src={emptyImage} alt="" />
            <p>Nenhuma tarefa selecionada</p>
          </div> */}

      <section className={styles.card}>
        <header className={styles.cardHeader}>
          <div>
            <ClipboardCheck size={24} />
            <h2>Criar nova landing page</h2>
          </div>
        </header>
      </section>
    </Container>
  )
}
