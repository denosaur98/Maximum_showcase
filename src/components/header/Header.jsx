import React from 'react'
import css from './Header.module.css'

export default function Header() {
  return(
    <div className={css.header}>
      <div className={css.logo}></div>
      <p className={css.line}>|</p>
      <p className={css.text}>Официальный дилер Максимум</p>
    </div>  
  )
}