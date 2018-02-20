import React from 'react';

import NavigationMenu from '../NavigationMenu/NavigationMenu';
import styles from './SideDrawer.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [
    styles.SideDrawer,
    styles.Close
  ];
  if (props.open) {
    attachedClasses = [
      styles.SideDrawer,
      styles.Open
    ];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationMenu />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;