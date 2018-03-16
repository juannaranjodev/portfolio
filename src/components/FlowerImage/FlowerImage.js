import React, { Component } from 'react';

import styles from './FlowerImage.css';
import { random } from '../../containers/App/App';



class FlowerImage extends Component {
  
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const createFlowerTree = () => {
      let tree = [];
      const huesOfGreen = [
        '#1c662c',
        '#2a4c31',
        '#569946',
        '#225915'
      ];
      for (let i = 0; i < random(20) + 90; i++) {
        tree.push(
          <div className={styles.leave} key={tree.length} style={{
            top: `${-50 + random(150)}%`,
            left: `${-50 + random(150)}%`,
            backgroundColor: huesOfGreen[random(huesOfGreen.length)],
            transform: `rotate(${random(360)}deg)`
          }}></div>
        )
      }
      return tree;
    }

    return (
      <div className={styles.flower}>
        <div className={styles.flower__tree}>
          {createFlowerTree()}
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