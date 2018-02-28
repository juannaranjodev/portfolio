import React from 'react';

import styles from './Background.css';

const background = () => {

  return (
    <div className={styles.Background}>
      <div className={styles.Container}>
        <div className={styles.Head}>
          <div className={styles.Hair}>
            <div className={styles.TopHair}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.SideHairLeft}></div>
            <div className={styles.SideHairRight}></div>
          </div>
          <div className={styles.LeftEar}></div>
          <div className={styles.RightEar}></div>
        </div>
      </div>
    </div>
  );
}

export default background;