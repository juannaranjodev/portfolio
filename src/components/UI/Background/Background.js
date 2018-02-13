import React from 'react';

import BackgroundImage from '../../../assets/background.jpeg';

const background = () => {
  const styles = {
    position: 'relative',
    backgroundImage: `url(${BackgroundImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  return <div style={styles}></div>;
}

export default background;