import React, { PureComponent } from 'react';

import styles from './ProjectPreview.css';
import { random } from '../../utilities';
import Media from 'react-media';

class ProjectPreview extends PureComponent {
  render() {
    const animatedClasses = ['fromTop', 'fromBottom', 'fromLeft', 'fromRight'];
    const createPreview = (width) => (
      <figure
        className={[styles.Project, styles[animatedClasses[random(animatedClasses.length)]]].join(' ')}
        id={this.props.id}
        style={{ width }}
      >
        <img className={styles.Project__img} src={this.props.img} alt={this.props.title} />
        <figcaption className={styles.Project__title}>{this.props.title}</figcaption>
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
  }
}

export default ProjectPreview;