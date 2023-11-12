import { ComponentProps, forwardRef } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type TextareaProps = ComponentProps<'textarea'> & {
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <div className={styles.container}>
        <textarea
          ref={ref}
          className={classNames(styles.textarea, {
            [styles.invalid]: !!props.error,
          })}
          {...props}
        />
        {props.error && <div className={styles.error}>{props.error}</div>}
      </div>
    )
  }
)
