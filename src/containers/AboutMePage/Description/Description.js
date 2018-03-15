import React from 'react';

import styles from './Description.css';

const description = (props) => {
  const content = {
    aboutMe: {
      header: 'Who I am',
      text: 'Hi, I\'m hard - working Front-end Web Developer with a flair for creating elegant, beautiful and responsive solutions in the least amount of time.I believe my strong points are my punctuality and responsiveness to all needs of my clients.My #1 goal will always be to meet your needs and deadline.'
    },
    aboutTools: {
      header: 'What I use',
      text: 'I build and create web applications and responsive websites. Currently I work with JavaScript(ES6), React, HTML5, CSS3, Sass, AJAX, Bootstrap 4, Git & GitHub and Responsive web design.'
    }
  };
  let classes = [styles.Description, styles.text_dark];
  if (props.time === 'night') {
    classes = [styles.Description, styles.text_light];
  }

  return (
    <div className={classes.join(' ')}>
      <section>
        <h3>{content.aboutMe.header}</h3>
        <p>{content.aboutMe.text}</p>
      </section>
      <section>
        <h3>{content.aboutTools.header}</h3>
        <p>{content.aboutTools.text}</p>
      </section>
    </div>
  );
}

export default description;
