import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>🎲 Planning Poker</h1>
      <p>Estimativas simples e divertidas.</p>
    </header>
  )
}
