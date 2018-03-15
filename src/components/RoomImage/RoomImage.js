import React from 'react';

import styles from './RoomImage.css';

const roomImage = (props) => {
  return (
    <div className={styles.RoomImage}>
      <div className={styles.wall}>
        <div className={styles.wall__side}></div>
        <div className={styles.wall__center}>
          <div className={styles.wall__center_top}></div>
          <div className={styles.windows}>
            <div className={styles.windows__window}></div>
            <div className={styles.windows__window}></div>
            <div className={styles.windows__window}></div>
          </div>
          <div className={styles.wall__center_bottom}></div>
        </div>
        <div className={styles.wall__side}></div>
      </div>  
      {props.children}
    </div>
  );
}

export default roomImage;