import React from 'react';

import styles from './NavigationMenuItem.css';

const navigationMenuItem = (props) => (
  <li className={[styles.NavigationMenuItem, styles[props.active]].join(' ')}>
    <a 
      className={props.active ? styles.active : null}
      href={props.pageLink}>
      {props.children}
    </a>
  </li>
);

export default navigationMenuItem;