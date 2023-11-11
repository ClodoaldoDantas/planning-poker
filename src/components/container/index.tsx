import { ComponentProps } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

type ContainerProps = ComponentProps<'div'>

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {children}
    </div>
  )
}
