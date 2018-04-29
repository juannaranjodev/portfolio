import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import styles from './NavigationItem.scss';

const navigationItem = (props) => (
    <li 
      className={styles.NavigationItem}
      data-tip={props.tooltip}
    >
      <NavLink
        className={styles.NavigationItem__button}
        activeClassName={styles.active}
        to={props.path}
      >
        {props.children}
      </NavLink>
      {props.tooltip && <ReactTooltip place="bottom" type="dark" effect="solid" />}
    </li>
);

export default navigationItem;