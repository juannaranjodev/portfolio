import React from 'react';

import NavigationMenu from '../NavigationMenu/NavigationMenu';
import styles from './SideDrawer.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const classes = [styles.SideDrawer, props.open ? styles.open : styles.close].join(' ');
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes}>
        <nav>
          <NavigationMenu />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;