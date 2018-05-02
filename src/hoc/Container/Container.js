import React from 'react';

import styles from './Container.scss';

const container = (props) => (
  <div className={styles.Container}>{props.children}</div>
);

export default container;