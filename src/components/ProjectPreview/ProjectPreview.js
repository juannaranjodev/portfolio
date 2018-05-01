import React from 'react';

import styles from './ProjectPreview.css';
import { random } from '../../utilities';
import Media from 'react-media';

const projectPreview = (props) => {
  const animatedClasses = ['fromTop', 'fromBottom', 'fromLeft', 'fromRight'];
  const createPreview = (width) => (
    <figure
      className={[styles.Project, styles[animatedClasses[random(animatedClasses.length)]]].join(' ')}
      id={props.id}
      style={{ width }}
    >
      <img className={styles.Project__img} src={props.img} alt={props.title} />
      <figcaption className={styles.Project__title}>{props.title}</figcaption>
    </figure>
  );

  return (
    <Media query={{ minWidth: 1024 }}>
      {matches => matches ?
        createPreview('25%') :
        <Media query={{ minWidth: 768 }}>
          {matches => matches ?
            createPreview('50%') :
            createPreview('100%')
          }
        </Media>
      }
    </Media>
  );
};

export default projectPreview;