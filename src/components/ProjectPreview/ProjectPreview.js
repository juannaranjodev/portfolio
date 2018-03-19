import React, { Component } from 'react';

import styles from './ProjectPreview.css';
import { random } from '../../containers/App/App';

class ProjectPreview extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.width !== this.props.width;
  }

  render() {

    let width = null;
    if (this.props.width) {
      width = this.props.width;
    }
    const animatedClasses = ['fromTop', 'fromBottom', 'fromLeft', 'fromRight'];

    return (
      <figure 
        className={[styles.Project, styles[animatedClasses[random(animatedClasses.length)]]].join(' ')} 
        id={this.props.id}
        style={{ width }}
      >
        <img className={styles.Project__img} src={this.props.img} alt={this.props.title} />
        <figcaption className={styles.Project__title}>{this.props.title}</figcaption>
      </figure>
    );
  }
}

export default ProjectPreview;