import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.css';

export default () => {
  return (
    <nav className={styles.wrap}>
    <ul>
      <li><Link to="/">Random Advice</Link></li>
      <li><Link to="/randomcat">Random Cat Picture</Link></li>
    </ul>
  </nav>
  );
};
