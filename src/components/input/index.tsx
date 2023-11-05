import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type InputProps = ComponentProps<'input'>

export function Input(props: InputProps) {
  return <input type="text" className={styles.input} {...props} />
}
