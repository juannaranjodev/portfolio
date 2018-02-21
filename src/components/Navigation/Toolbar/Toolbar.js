import React from 'react';

import styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <Logo />
    <DrawerToggle clicked={props.drawerToggleClicked} open={props.open} close={props.closed}/>
    <nav className={styles.DesktopOnly}>
      <NavigationMenu />
    </nav>
  </header>
);

export default toolbar;