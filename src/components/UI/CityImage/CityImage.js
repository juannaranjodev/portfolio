import React from 'react';

import styles from './CityImage.css';
import Aux from '../../../hoc/Aux';

const random = limit => Math.floor(Math.random() * limit);

const cityImage = (props) => {

  let styleOfLight = styles.sun;
  if (props.time === 'night') {
    styleOfLight = styles.moon;
  }

  const createCity = () => {
    let houses = [];
    let widthReminder = window.innerWidth;
    while (widthReminder > 0) {
      let houseWidth = random(10) + 30;
      let houseHeight = random(150) + random(50);
      let aerialHeight = random(houseHeight);
      let aerialTop = -random(aerialHeight / 3);
      houses.push(
        <div key={houses.length} className={styles.house} style={{ width: houseWidth, height: houseHeight }}>
          <div className={styles.aerial} style={{
            width: `${random(4)}px`,
            height: aerialHeight,
            top: aerialTop,
            left: `${random(95)}%`
          }}></div>
        </div>);
      widthReminder -= houseWidth;
    }
    return houses;
  }

  return (
    <Aux>
      <div className={styleOfLight}></div>
      <div className={styles.city}>
        {createCity()}
      </div>
    </Aux>
  );
}

export default cityImage;