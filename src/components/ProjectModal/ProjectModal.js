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
        <h3>{props.title}</h3>
        <div className={styles.CloseBtn} onClick={props.closeModal}>
          <Button type="button" color="Action">Close</Button>
        </div>
      </header>
      <div className={styles.ProjectModal__description}>{props.description}</div>
      <ul className={styles.ProjectModal__tools}>
        { props.tools.map((tool, index) => <li key={index}>{tool}</li>) }
      </ul>
    </div>
    <footer className={styles.ProjectModal__footer}>
      <Button href={props.code} newtab color="Info">Code</Button>
      <Button href={props.app} newtab color="Info">Link</Button>
    </footer>
  </div>
);

export default projectModal;