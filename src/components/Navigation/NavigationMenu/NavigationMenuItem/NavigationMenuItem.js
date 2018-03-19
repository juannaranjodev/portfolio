import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationMenuItem.css';

const navigationMenuItem = (props) => (
    <li className={styles.NavigationMenuItem}>
      <NavLink
        className={styles.nav__button}
        activeClassName={styles.active}
        to={props.path}>
        {props.children}
      </NavLink>
    </li>
);

export default navigationMenuItem;