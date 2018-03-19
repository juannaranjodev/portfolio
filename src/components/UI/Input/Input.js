import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case ('input'):
      inputElement = <input
        onChange={props.changed} 
        className={[styles.Input, styles.inputField].join(' ')}
        {...props.elementConfig} 
        value={props.value} />;
      break;
    case ('textarea'):
      inputElement = <textarea 
        onChange={props.changed}
        className={[styles.Input, styles.messageField].join(' ')} 
        {...props.elementConfig}
        value={props.value} />;
      break;
    default:
      inputElement = <input 
        onChange={props.changed}
        className={[styles.Input, styles.inputField].join(' ')} 
        {...props.elementConfig}
        value={props.value} />;
  }
  return inputElement;
};

export default input;