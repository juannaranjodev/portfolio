import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  const classes = [styles.Input];
  if (props.invalid && props.shouldValidate) {
    classes.push(styles.invalid);
  }
  switch (props.elementType) {
    case ('input'):
      classes.push(styles.inputField);
      inputElement = <input
        onChange={props.changed} 
        className={classes.join(' ')}
        {...props.elementConfig} 
        value={props.value} />;
      break;
    case ('textarea'):
      classes.push(styles.messageField)
      inputElement = <textarea 
        onChange={props.changed}
        className={classes.join(' ')} 
        {...props.elementConfig}
        value={props.value} />;
      break;
    default:
      classes.push(styles.inputField)
      inputElement = <input 
        onChange={props.changed}
        className={classes.join(' ')} 
        {...props.elementConfig}
        value={props.value} />;
  }
  return inputElement;
};

export default input;