import React from 'react';

import styles from './ProjectPreview.css';

const projectPreview = (props) => (
  <figure className={styles.Project} id={props.id}>
    <img className={styles.Project__img} src={props.img} alt={props.title} />
    <figcaption className={[styles.Project__title, 'textShadow'].join(' ')}>{props.title}</figcaption>
  </figure>
);

export default projectPreview;