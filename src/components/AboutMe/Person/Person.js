import React from 'react';

import styles from './Person.css';

const person = () => (
  <div className={styles.Container}>
    <div className={styles.Table}>
      <div className={styles.Laptop}>
        <div className={styles.Laptop__sticker}>JS</div>
      </div>
      <div className={styles.Table__top}></div>
      <div className={styles.Table__bottom}>
        <div className={styles.Table__leg}></div>
        <div className={styles.Table__leg}></div>
      </div>
    </div>
  </div>
);

export default person;