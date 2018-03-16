import React, { Component } from 'react';

import styles from './FlowerImage.css';

class FlowerImage extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.flowerTree !== nextProps.flowerTree;
  }

  render() {
    return (
      <div className={styles.flower}>
        <div className={styles.flower__tree}>
          {this.props.flowerTree}
        </div>
        <div className={styles.flower__pot}>
          <div className={styles.flower__pot_top}></div>
          <div className={styles.flower__pot_bottom}></div>
        </div>
      </div>
    );
  }
}

export default FlowerImage;