import React from 'react';

import styles from './NavigationMenu.css';
import NavigationMenuItem from './NavigationMenuItem/NavigationMenuItem';

const navigationMenu = () => (
  <ul className={styles.NavigationMenu}>
    <NavigationMenuItem path="/home">
      Home
    </NavigationMenuItem>
    <NavigationMenuItem path="/aboutme">
      About Me
    </NavigationMenuItem>
    <NavigationMenuItem path="/portfolio">
      Portfolio
    </NavigationMenuItem>
    <NavigationMenuItem path="/contacts">
      Contacts
    </NavigationMenuItem>
  </ul>
);

export default navigationMenu;