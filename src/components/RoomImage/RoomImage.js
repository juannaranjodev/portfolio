import React from 'react';

import styles from './RoomImage.css';
import { random } from '../../containers/App/App';

const roomImage = (props) => {
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
    <div className={styles.RoomImage}>
      <div className={styles.wall}>
        <div className={styles.wall__side}></div>
        <div className={styles.wall__center}>
          <div className={styles.wall__center_top}></div>
          <div className={styles.windows}>
            <div className={styles.windows__window}>
              <div className={styles.window__border}>
                <div className={styles.window__grip}></div>
                <div className={styles.window__glass}></div>
              </div>
            </div>
            <div className={styles.windows__window}>
              <div className={styles.window__border}>
                <div className={styles.window__grip}></div>
                <div className={styles.window__glass}></div>
              </div>
            </div>
            <div className={styles.windows__window}>
              <div className={styles.window__border}>
                <div className={styles.window__grip}></div>
                <div className={styles.window__glass}></div>
              </div>
            </div>
            <div className={styles.windows__window}>
              <div id="opened" className={[styles.window__border, props.openedWindow ? styles.opened : null].join(' ')} 
                onClick={props.toggleWindow}
              >
                <div className={styles.window__grip}></div>
                <div className={styles.window__glass}></div>
              </div>
            </div>
          </div>
          <div className={styles.wall__center_bottom}>
            <div className={styles.flower}>
              <div className={styles.flower__tree}>
                {createFlowerTree()}
              </div>
              <div className={styles.flower__pot}>
                <div className={styles.flower__pot_top}></div>
                <div className={styles.flower__pot_bottom}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wall__side}></div>
      </div>  
      {props.children}
    </div>
  );
}

export default roomImage;