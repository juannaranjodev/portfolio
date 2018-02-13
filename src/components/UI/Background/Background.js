import React from 'react';

import BackgroundImage from '../../../assets/background.jpeg';
import styles from './Background.css';

const background = () => {
  const componentStyle = {
    backgroundImage: `url(${BackgroundImage})`
  };

  return <div className={styles.Background} style={componentStyle}></div>;
}

export default background;