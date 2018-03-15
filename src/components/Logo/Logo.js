import React from 'react';

import styles from './Logo.css';

const logo = () => (
  <div className={[styles.Logo].join(' ')}>
    <span className={styles.Logo__o}>Oleksii</span>
    <span className={styles.Logo__b}>Bespalko</span>
  </div>
);

export default logo;