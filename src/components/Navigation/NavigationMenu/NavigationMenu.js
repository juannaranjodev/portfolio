import React from 'react';

import styles from './NavigationMenu.scss';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationMenu = () => (
  <ul className={styles.NavigationMenu}>
    <NavigationItem path="/home">
      Home
    </NavigationItem>
    <NavigationItem path="/aboutme">
      About Me
    </NavigationItem>
    <NavigationItem path="/works">
      Works
    </NavigationItem>
    <NavigationItem path="/contacts">
      Contacts
    </NavigationItem>
  </ul>
);

export default navigationMenu;