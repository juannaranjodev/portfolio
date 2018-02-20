import React from 'react';

import NavigationMenu from '../NavigationMenu/NavigationMenu';
import styles from './SideDrawer.css';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
  return (
    <Aux>
      <div className={styles.SideDrawer}>
        <nav>
          <NavigationMenu />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;