import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationMenuItem.css';

const navigationMenuItem = (props) => {
  let classes = [styles.NavButton];
  if (props.active) {
    classes.push(styles.Active)
  }
  return (
    <li className={styles.NavigationMenuItem}>
      <NavLink
        className={classes.join(' ')}
        to={props.path}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationMenuItem;