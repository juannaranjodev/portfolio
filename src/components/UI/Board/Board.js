import React from 'react';

import styles from './Board.css';

const board = (props) => (
  <div className={styles.Board}>
    <div className={styles.skrews}>
      <div className={styles.skrews__line}>
        <div className={styles.skrews__line__skrew}>+</div>
        <div className={styles.skrews__line__skrew}>+</div>
      </div>
      <div className={styles.skrews__line}>
        <div className={styles.skrews__line__skrew}>+</div>
        <div className={styles.skrews__line__skrew}>+</div>
      </div>
    </div>
    {props.children}
  </div>
);

export default board;