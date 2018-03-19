import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  switch (props.inputType) {
    case ('input'):
      inputElement = <input className={[styles.Input, styles.inputField].join(' ')} {...props} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={[styles.Input, styles.messageField].join(' ')} {...props} />;
      break;
    default:
      inputElement = <input className={[styles.Input, styles.inputField].join(' ')} {...props} />;
  }
  return inputElement;
};

export default input;