import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      <Link to="/" className={css.logo}></Link>
      <p className={css.line}>|</p>
      <p className={css.text}>Официальный дилер Максимум</p>
    </div>
  );
}