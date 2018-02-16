import React from 'react';

import styles from './NavigationMenu.css';
import NavigationMenuItem from './NavigationMenuItem/NavigationMenuItem';

const navigationMenu = () => (
  <nav className={styles.NavigationMenu}>
    <ul>
      <NavigationMenuItem pageLink="/" active>
        Home
      </NavigationMenuItem>
      <NavigationMenuItem pageLink="/">
        About Me
      </NavigationMenuItem>
      <NavigationMenuItem pageLink="/">
        Contacts
      </NavigationMenuItem>
    </ul>
  </nav>
);

export default navigationMenu;