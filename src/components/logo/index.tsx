import classNames from 'classnames'
import styles from './styles.module.scss'

type LogoProps = {
  size?: 'md' | 'sm'
}

export function Logo({ size = 'md' }: LogoProps) {
  return (
    <h1
      className={classNames(
        styles.logo,
        { [styles.small]: size === 'sm' },
        { [styles.medium]: size === 'md' }
      )}
    >
      🎲 Planning Poker
    </h1>
  )
}
