import React from 'react';

import styles from './NavigationMenu.css';
import NavigationMenuItem from './NavigationMenuItem/NavigationMenuItem';

const navigationMenu = () => (
  <ul className={styles.NavigationMenu}>
    <NavigationMenuItem pageLink="/" active>
      Home
    </NavigationMenuItem>
    <NavigationMenuItem pageLink="/">
      About Me
    </NavigationMenuItem>
    <NavigationMenuItem pageLink="/">
      Portfolio
    </NavigationMenuItem>
    <NavigationMenuItem pageLink="/">
      Contacts
    </NavigationMenuItem>
  </ul>
);

export default navigationMenu;