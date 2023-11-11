'use client'

import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.scss'

export function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className={styles.backButton}>
      <ChevronLeft size={20} />
      Voltar para a tela anterior
    </button>
  )
}
