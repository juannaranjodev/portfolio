import React from 'react';

import BackgroundVideo from '../../../assets/videos/background.mp4';
import styles from './Background.css';

const background = () => {
  // const componentStyle = {
  //   backgroundImage: `url(${BackgroundImage})`
  // };

  return (
    <div className={styles.Background}>
      <video autoPlay muted loop>
        <source src={BackgroundVideo} type="video/mp4" />
          Your browser is not supported!
      </video>
    </div>
  );
}

export default background;