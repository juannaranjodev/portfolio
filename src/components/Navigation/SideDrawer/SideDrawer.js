import React from 'react';

import styles from './SideDrawer.scss';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  const classes = [styles.SideDrawer, props.open ? styles.open : styles.close].join(' ');
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={classes}>
        <nav>
          <NavigationMenu />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;