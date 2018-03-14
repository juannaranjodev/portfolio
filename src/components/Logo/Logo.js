import React from 'react';

import styles from './Logo.css';

const logo = () => (
  <div className={[styles.Logo, 'textShadow'].join(' ')}>
    <span className={styles.Logo__o}>O</span>
    <span className={styles.Logo__b}>B</span>
  </div>
);

export default logo;