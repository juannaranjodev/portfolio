import React from 'react';

import styles from './Toolbar.scss';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import SocialMedia from '../../SocialMedia/SocialMedia';

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <SocialMedia />
    <Logo />
    <DrawerToggle clicked={props.drawerToggleClicked} open={props.open} close={props.closed}/>
    <nav className={styles.desktopOnly}>
      <NavigationMenu />
    </nav>
  </header>
);

export default toolbar;