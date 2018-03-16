import React from 'react';

import styles from './Button.css';
import { Link } from 'react-router-dom';

const button = (props) => {
  const classes = [styles.Button, styles[props.color]].join(' ');
  let button = (
    <a href={props.href} 
      target={props.newtab && "_blank"} 
      rel={props.newtab && "noopener noreferrer"} 
      className={classes}
    >
      {props.children}
    </a>
  );
  
  if (props.type === 'button') {
    button = <button onClick={props.clicked} className={classes}>{props.children}</button>;
  }

  if (props.type === 'router-link') {
    button = <Link to={props.href} className={classes}>{props.children}</Link>;
  }

  return button;
}
  

export default button;