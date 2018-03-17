import React from 'react';

import styles from './ProjectModal.css';
import Button from '../UI/Button/Button';



const projectModal = (props) => (
  <div className={styles.ProjectModal}>
    <div 
      className={styles.ProjectModal__image} 
      style={{ backgroundImage: `url(${props.image})` }}
    >
    </div>
    <div className={styles.ProjectModal__data}>
      <header className={styles.data__header}>
        <h3 className={styles.data__header__title}>{props.title}</h3>
        <div className={styles.data__header__closeButton} onClick={props.closeModal}>
          &times;
        </div>
      </header>
      <div className={styles.data__description}>{props.description}</div>
      <ul className={styles.data__toolBox}>
        {props.tools.map((tool, index) => <li className={styles.toolBox__tool} key={index}>{tool}</li>) }
      </ul>
      <footer className={styles.data__footer}>
        <Button href={props.code} newtab color="Info">Code</Button>
        <Button href={props.app} newtab color="Info">Link</Button>
      </footer>
    </div>
  </div>
);

export default projectModal;