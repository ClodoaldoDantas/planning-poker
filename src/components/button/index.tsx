import { ComponentProps, forwardRef } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'success' | 'dark'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={classNames(styles.button, styles[variant])}
      {...props}
    />
  )
)
