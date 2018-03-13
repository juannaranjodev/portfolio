import React from 'react';

import styles from './Background.css';
import Character from '../../../components/UI/Character/Character';

const random = limit => Math.floor(Math.random() * limit);

const background = (props) => {
  let houses = [];
  let widthReminder = window.innerWidth;
  let key = 0;
  while (widthReminder > 0) {
    let houseWidth = random(10) + 30;
    let houseHeight = random(150) + random(50);
    let aerialHeight = random(houseHeight);
    let aerialTop = -random(aerialHeight / 3);
    houses.push(
      <div key={key} className={styles.house} style={{ width: houseWidth, height: houseHeight }}>
        <div className={styles.aerial} style={{
          width: `${random(4)}px`,
          height: aerialHeight,
          top: aerialTop,
          left: `${random(100)}%`
        }}></div>
      </div>);
    widthReminder -= houseWidth;
    key++;
  }
  return (
    <div className={styles.Background}>
      <div className={styles.sunlight}></div>
      <div className={styles.city}>
        {houses}
      </div>
      <Character />
    </div>
  );
}

export default background;