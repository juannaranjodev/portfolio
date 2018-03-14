import React from 'react';

import styles from './Button.css';

const button = (props) => {
  let button = (
    <a href={props.href} 
      target={props.newtab && "_blank"} 
      rel={props.newtab && "noopener noreferrer"} 
      className={[styles.Button, styles[props.color]].join(' ')}
    >
      {props.children}
    </a>
  );
  if (props.type === 'button') {
    button = (
      <button
        onClick={props.clicked}
        className={[styles.Button, styles[props.color]].join(' ')}
      >
        {props.children}
      </button>
    );
  }
  return button;
}
  

export default button;