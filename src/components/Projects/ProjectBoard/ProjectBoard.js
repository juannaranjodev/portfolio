import React from 'react';

import styles from './ProjectBoard.css';
import Board from '../../UI/Board/Board';

const projectBoard = (props) => (
  <Board>
    <div className={styles.ProjectBoard}>
      <img id={props.id} src={props.img} alt={props.title} />
    </div>
  </Board>
);

export default projectBoard;