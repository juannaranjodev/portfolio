import React from 'react';

import styles from './NavigationMenuItem.css';

const navigationMenuItem = (props) => {
  let classes = [styles.NavButton];
  if (props.active) {
    classes.push(styles.Active)
  }
  return (
    <li className={styles.NavigationMenuItem}>
      <a
        className={classes.join(' ')}
        href={props.pageLink}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationMenuItem;