import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={classNames(styles.button, styles[variant])} {...props} />
  )
}
