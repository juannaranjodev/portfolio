import React from 'react';

import styles from './Logo.css';
import LogoImage from '../../assets/images/logo-white.png';

const logo = () => (
  <div className={styles.Logo}>
    <img src={LogoImage} alt="Logo" />
  </div>
);

export default logo;