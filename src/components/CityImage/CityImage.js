import React from 'react';

import styles from './CityImage.css';

import {random} from '../../containers/App/App';

const cityImage = (props) => {

  let styleOfHouse = styles.house;
  let styleOfAerial = styles.aerial;
  if (props.time === 'night') {
    styleOfHouse = [styles.house, styles[props.time]].join(' ');
    styleOfAerial = [styles.aerial, styles[props.time]].join(' ');
  }

  const buildFlats = (houseWidth, houseHeight) => {
    let flats = [];
    let limit = houseWidth * houseHeight;
    let flatSize = houseWidth / (random(3) + 5);
    while (limit > 0) {
      flats.push(
        <span className={styles.flat} key={flats.length} style={{
          width: flatSize,
          height: flatSize,
          backgroundColor: `${['#fff', '#050505'][random(2)]}`
        }}></span>
      );
      limit -= flatSize * flatSize;
    }
    return flats;
  }

  const createCity = () => {
    const houses = [];
    let widthReminder = window.innerWidth;
    while (widthReminder > 0) {
      let houseWidth = random(10) + 30;
      let houseHeight = random(150) + random(50);
      let aerialHeight = random(houseHeight / 3);
      houses.push(
        <div key={houses.length} className={styleOfHouse} style={{ width: houseWidth, height: houseHeight }}>
          <div className={styleOfAerial} style={{
            width: `${random(3) + 1}px`,
            height: aerialHeight,
            top: -aerialHeight,
            left: `${random(95)}%`
          }}>
            {
              props.time === 'night' &&
              ((houseHeight >= 140 && aerialHeight >= 43) || 
              (houseHeight >= 180 && aerialHeight >= 14)) ?
              <div className={styles.signal} style={{animationDelay: `${Math.random() * 1}s`}}></div> : null
            }
          </div>
          {
            props.time === 'night' ? buildFlats(houseWidth, houseHeight) : null
          }
        </div>);
      widthReminder -= houseWidth;
    }
    return houses;
  }

  return (
    <div className={styles.city}>
      {createCity()}
    </div>
  );
}

export default cityImage;