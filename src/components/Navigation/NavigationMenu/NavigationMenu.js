import React from 'react';

import styles from './NavigationMenu.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const navigationMenu = () => (
  <ul className={styles.NavigationMenu}>
    <NavigationItem path="/home">
      <FontAwesomeIcon icon="home" /> Home
    </NavigationItem>
    <NavigationItem path="/aboutme">
      <FontAwesomeIcon icon="user-secret" /> About me
    </NavigationItem>
    <NavigationItem path="/works">
      <FontAwesomeIcon icon="image" /> Works
    </NavigationItem>
    <NavigationItem path="/contacts">
      <FontAwesomeIcon icon="envelope" /> Contacts
    </NavigationItem>
  </ul>
);

export default navigationMenu;