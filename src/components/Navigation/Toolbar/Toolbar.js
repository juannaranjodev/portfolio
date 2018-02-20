import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <Logo />
    <nav className={styles.DesktopOnly}>
      <NavigationMenu />
    </nav>
  </header>
);

export default toolbar;