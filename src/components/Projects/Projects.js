import React from 'react';

import styles from './Projects.css';
import Project from './Project/Project';

const projects = (props) => (
  <div className={styles.Projects}>
    <Project />
  </div>
);

export default projects;