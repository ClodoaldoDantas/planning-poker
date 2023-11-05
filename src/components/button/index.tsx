import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'success'
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles.button, styles[variant])}
      {...props}
    />
  )
}
