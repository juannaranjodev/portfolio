import React from 'react';

import styles from './Button.scss';
import { Link } from 'react-router-dom';

const button = (props) => {
  const classes = props.textLink ? 
    styles.Link : 
    [styles.Button, styles[props.size]].join(' ');

  const buttonTypes = {
    anchor: <a href={props.href}
        target={props.newtab && "_blank"}
        rel={props.newtab && "noopener noreferrer"}
        className={classes}
      >
        {props.children}
      </a>,
    button: <button onClick={props.clicked} className={classes}>{props.children}</button>,
    routerLink: <Link to={props.href} className={classes}>{props.children}</Link>,
    formSubmit: <button type="submit" disabled={props.disabled} className={classes}>{props.children}</button>
  };

  return buttonTypes[props.buttonType];
};

export default button;