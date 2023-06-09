import React from 'react'
import styles from './styles.module.scss'

function BtnChanger() {
  return (
    <>
    <button className={styles.btnPast}>{'<'}</button>
    <button className={styles.btnNext}>{'>'}</button>
    </>
  )
}

export default BtnChanger;