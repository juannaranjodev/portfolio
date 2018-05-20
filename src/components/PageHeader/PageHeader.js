import React from 'react';

import styles from './PageHeader.scss';
import { devideIntoChars } from '../../utilities';
import { TimeContext } from '../../App/App';
import { Animated } from 'react-animated-css';

const pageHeader = props => (
  <TimeContext.Consumer>
    {time => (
      <Animated 
        animationIn="fadeInDownBig"
        animationInDelay={600}
        isVisible={true}
      >
        <h2 className={[styles.PageHeader, time].join(' ')}>
          {devideIntoChars(props.title, { className: 'letter' })}
        </h2>
      </Animated>
    )}
  </TimeContext.Consumer>
);

export default pageHeader;
