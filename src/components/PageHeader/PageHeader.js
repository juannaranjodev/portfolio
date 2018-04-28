import React from 'react';

import styles from './PageHeader.scss';
import { devideIntoChars } from '../../utilities';
import { TimeContext } from '../../containers/App/App';

const pageHeader = (props) => (
  <TimeContext.Consumer>
    {time => (
      <h2 className={[styles.PageHeader, time === 'night' ? 'light' : 'dark'].join(' ')}>
        {devideIntoChars(props.title, { className: 'letter' })}
      </h2>
    )}
  </TimeContext.Consumer>
);

export default pageHeader;