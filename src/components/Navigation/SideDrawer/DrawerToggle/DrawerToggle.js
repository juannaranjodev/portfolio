import React from 'react';

import styles from './DrawerToggle.css';

const drawerToggle = (props) => {
  let attachedClasses = [
    styles.DrawerToggle,
    styles.Close
  ];
  if (props.open) {
    attachedClasses = [
      styles.DrawerToggle,
      styles.Open
    ];
  }
  return (
    <div
      onClick={props.clicked}
      className={attachedClasses.join(' ')}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default drawerToggle;