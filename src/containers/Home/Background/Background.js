import React from 'react';

import styles from './Background.css';

const background = (props) => (
  <div className={[styles.Background, styles[props.time]].join(' ')}>
    {props.children}
  </div>
);

export default background;