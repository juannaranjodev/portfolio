import React from 'react';

import styles from './MainHeading.css';

const mainHeading = (props) => (
  <div className={styles.MainHeading}>
    <h3 className={styles.Role}>{props.role}</h3>
    <h1 className={styles.Name}>{props.name}</h1>
    <h5 className={styles.Message}>{props.message}</h5>
  </div>
);

export default mainHeading;