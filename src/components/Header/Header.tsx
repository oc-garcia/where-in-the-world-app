import React from 'react'
import styles from './Header.module.css'


type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.container}>
        <h1>Where in the World?</h1>
        <button>Toggle</button>
    </header>
  )
}