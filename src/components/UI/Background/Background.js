import React from 'react';

import styles from './Background.css';

const background = (props) => (
  <div className={[styles.Background, styles[props.time]].join(' ')}>
    <div className={props.time === 'day' ? styles.sun : styles.moon}></div>
    {props.stars ? props.stars : null}
    {props.children}
  </div>
);

export default background;