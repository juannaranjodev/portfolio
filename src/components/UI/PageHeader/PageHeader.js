import React from 'react';

import styles from './PageHeader.css';

const pageHeader = (props) => (
  <h2 className={styles.PageHeader}>{props.title}</h2>
);

export default pageHeader;