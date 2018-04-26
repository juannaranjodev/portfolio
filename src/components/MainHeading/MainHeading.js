import React from 'react';

import styles from './MainHeading.scss';
import Button from '../UI/Button/Button';
import { Animated } from 'react-animated-css';
import { TimeContext } from '../../containers/App/App';

import { devideAndAnimate, devideIntoChars } from '../../utilities';

const mainHeading = (props) => {
  const headers = {
    name: 'Oleksii Bespalko',
    role: 'Front-end Developer',
    message: 'A simple guy, who wants to create really cool things'
  };

  return (
    <TimeContext.Consumer>
      {time => (
        <div className={[styles.MainHeading, styles[time === 'night' ? 'light' : 'dark']].join(' ')}>
          <h3 className={styles.MainHeading__role}>
            {devideAndAnimate(headers.role, 'tada', 20)}
          </h3>
          <h1>
            <Animated
              className={styles.MainHeading__name}
              animationIn="slideInLeft"
              isVisible={true}
            >

              {devideIntoChars(headers.name, { className: styles.letter })}
            </Animated>
          </h1>
          <h5 className={styles.MainHeading__message}>
            {headers.message}
          </h5>
          <Button
            type="router-link"
            href="/works"
            color="blue"
            size="large"
          >
            Projects
          </Button>
        </div>
      )}
    </TimeContext.Consumer>
  );
};

export default mainHeading;