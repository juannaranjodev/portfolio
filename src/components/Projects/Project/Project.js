import React from 'react';

import styles from './Project.css';
// import Modal from '../../UI/Modal/Modal';

const project = (props) => (
  <div className={styles.Project}>
    <img id={props.id} src={props.img} alt={props.title} />
  </div>
);

export default project;