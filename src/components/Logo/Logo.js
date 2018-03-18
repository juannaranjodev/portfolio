import React from 'react';

import styles from './Logo.css';

const logo = () => {
  const name = 'Oleksii Bespalko';
  const splitWord = (word) => {
    return word.split('').map((letter, index) => {
      return (
        <span key={index} 
          className={styles.letter} 
          style={{animationDelay: `${index / 5}s`}}
        >
          {letter}
        </span>
      );
    });
  }
  return (
    <div className={[styles.Logo].join(' ')}>
      <div className={styles.Logo__firstname}>
        {splitWord(name.split(' ')[0])}
      </div>
      <div className={styles.Logo__lastname}>
        {name.split(' ')[1]}
      </div>
    </div>
  );
}

export default logo;