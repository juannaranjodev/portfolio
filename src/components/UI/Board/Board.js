import React from 'react';

import styles from './Board.css';

const board = (props) => (
  <div className={styles.Board}>
    <div className={styles.Skrews}>
      <div className={styles.Skrews__row}>
        <div className={styles.Skrew}>+</div>
        <div className={styles.Skrew}>+</div>
      </div>
      <div className={styles.Skrews__row}>
        <div className={styles.Skrew}>+</div>
        <div className={styles.Skrew}>+</div>
      </div>
    </div>
    {props.children}
  </div>
);

export default board;