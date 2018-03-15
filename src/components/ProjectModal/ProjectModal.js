import React from 'react';

import styles from './ProjectModal.css';
import Button from '../UI/Button/Button';

const projectModal = (props) => (
  <div className={styles.ProjectModal} style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,.9), rgba(0,0,0,.9)), url(${props.image})`
  }}>
    <header className={styles.ProjectModal__header}>
      <h3>{props.title}</h3>
      <div className={styles.CloseBtn} onClick={props.closeModal}>
        <Button type="button" color="Action">Close</Button>
      </div>
    </header>
    <div className={styles.ProjectModal__description}>{props.description}</div>
    <ul className={styles.ProjectModal__tools}>
      {
        props.tools.map((tool, index) => {
          return <li key={index}>{tool}</li>
        })
      }
    </ul>
    <footer className={styles.ProjectModal__footer}>
      <Button href={props.code} newtab color="Info">Code</Button>
      <Button href={props.app} newtab color="Info">Link</Button>
    </footer>
  </div>
);

export default projectModal;