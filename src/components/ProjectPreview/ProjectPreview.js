import React from 'react';

import styles from './ProjectPreview.css';
import { random } from '../../containers/App/App';

const projectPreview = (props) => {
  let width = null;
  if (props.width) {
    width = props.width;
  }
  const animatedClasses = ['fromTop', 'fromBottom', 'fromLeft', 'fromRight'];
  return (
    <figure className={[styles.Project, styles[animatedClasses[random(animatedClasses.length)]]].join(' ')} id={props.id} style={{ width }}>
      <img className={styles.Project__img} src={props.img} alt={props.title} />
      <figcaption className={[styles.Project__title, 'textShadow'].join(' ')}>{props.title}</figcaption>
    </figure>
  );
}


export default projectPreview;