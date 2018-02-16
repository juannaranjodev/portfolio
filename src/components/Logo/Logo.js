import React from 'react';

import styles from './Logo.css';
import LogoWhite from '../../assets/images/logo-white.png';

const logo = () => (
  <div className={styles.Logo}>
    <img src={LogoWhite} alt="Logo" />
  </div>
);

export default logo;