import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.scss';

const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
      <NavLink
        className={styles.NavigationItem__button}
        activeClassName={styles.active}
        to={props.path}
      >
        {props.children}
      </NavLink>
    </li>
);

export default navigationItem;