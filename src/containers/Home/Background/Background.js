import React from 'react';

import styles from './Background.css';

const random = limit => Math.floor(Math.random() * limit);

const background = (props) => {
  let houses = [];
  let widthReminder = window.innerWidth;
  while (widthReminder > 0) {
    let houseWidth = random(10) + 30;
    let houseHeight = random(150) + random(50);
    let aerialHeight = random(houseHeight);
    let aerialTop = -random(aerialHeight / 3);
    houses.push(
      <div className={styles.house} style={{ width: houseWidth, height: houseHeight }}>
        <div className={styles.aerial} style={{
          width: `${random(4)}px`,
          height: aerialHeight,
          top: aerialTop,
          left: `${random(100)}%`
        }}></div>
      </div>);
    widthReminder -= houseWidth;
  }
  console.log(widthReminder);
  return (
    <div className={styles.Background}>
      <div className={styles.sunlight}></div>
      <div className={styles.city}>
        {houses}
      </div>
    </div>
  );
}

export default background;