import React from 'react';

import { Animated } from 'react-animated-css';
import styles from './Logo.scss';
import logoBackground from '../../assets/background-night-xxs.jpg';
import { devideIntoChars } from '../../utilities';

const logo = () => {
  const firstname = 'Oleksii';
  const lastname = 'Bespalko'
  return (
    <div className={styles.Logo}>
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div 
        className={styles.Logo__image}
        style={{ backgroundImage: `
          linear-gradient(90deg, rgba(67, 206, 162, .5), rgba(24, 90, 157, .5)), 
          url(${logoBackground})` }}  
      >
        <div style={{ transform: 'rotate(-45deg)' }}>O</div>
      </div>
      </Animated>
      <div className={styles.Logo__name}>
        <div className={styles.Logo__name__firstname}>
          {devideIntoChars(firstname, 'rollIn', 5)}
        </div>
        <div className={styles.Logo__name__lastname}>
          {devideIntoChars(lastname, 'fadeInRightBig', 15)}
        </div>
      </div>
    </div>
    
  );
};

export default logo;