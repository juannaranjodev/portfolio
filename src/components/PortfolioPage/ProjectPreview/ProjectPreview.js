import React from 'react';

import styles from './ProjectPreview.css';

const projectPreview = (props) => {
  let width = null;
  if (props.width) {
    width = props.width;
  }
  return (
    <figure className={styles.Project} id={props.id} style={{ width }}>
      <img className={styles.Project__img} src={props.img} alt={props.title} />
      <figcaption className={[styles.Project__title, 'textShadow'].join(' ')}>{props.title}</figcaption>
    </figure>
  );
}


export default projectPreview;