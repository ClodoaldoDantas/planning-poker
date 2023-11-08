import { Center } from '../center'
import styles from './styles.module.scss'

export function Loading() {
  return (
    <Center>
      <span className={styles.spinner}></span>
    </Center>
  )
}
