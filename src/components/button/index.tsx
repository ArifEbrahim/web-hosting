import React from "react"
import styles from './button.module.css'

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps): React.ReactElement {
  return(
    <button className={styles.button}>{props.children}</button>
  )
}