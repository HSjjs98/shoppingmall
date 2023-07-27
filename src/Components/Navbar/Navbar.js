import React from 'react';
import { Link } from 'react-router-dom';
import {FaPen} from 'react-icons/fa'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link to='./products'>Products</Link>
      <Link to='./cart'>My Cart</Link>
      <Link to='./products/new'><FaPen /></Link>
      <Link to='./'>Login</Link>
    </div>
  );
}

