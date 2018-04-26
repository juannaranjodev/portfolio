import React from 'react';

import styles from './DrawerToggle.scss';

const drawerToggle = (props) => {
  const classes = [styles.DrawerToggle, props.open ? styles.open : styles.close].join(' ');
  return (
    <div
      onClick={props.clicked}
      className={classes}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default drawerToggle;