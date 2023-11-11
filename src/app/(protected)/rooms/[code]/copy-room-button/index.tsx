'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import styles from './styles.module.scss'

type CopyRoomButtonProps = {
  code: string
}

const TIMEOUT_MS = 700

export function CopyRoomButton({ code }: CopyRoomButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (hasCopied) {
      timeoutRef.current = setTimeout(() => {
        setHasCopied(false)
      }, TIMEOUT_MS)
    }

    return () => {
      if (!timeoutRef.current) return
      clearTimeout(timeoutRef.current)
    }
  }, [hasCopied])

  function handleCopyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
    setHasCopied(true)
  }

  return (
    <button
      onClick={handleCopyRoomCodeToClipboard}
      className={styles.copyButton}
    >
      <div className={styles.copyButtonIcon}>
        {hasCopied ? <Check size={20} /> : <Copy size={20} />}
      </div>

      <div className={styles.copyButtonText}>
        <span>Sala {code}</span>
      </div>
    </button>
  )
}
