import { ComponentProps, forwardRef } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type InputProps = ComponentProps<'input'> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={styles.container}>
      <input
        ref={ref}
        type="text"
        className={classNames(styles.input, {
          [styles.invalid]: !!props.error,
        })}
        {...props}
      />
      {props.error && <div className={styles.error}>{props.error}</div>}
    </div>
  )
})
