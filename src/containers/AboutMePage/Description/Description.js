import React from 'react';

import styles from './Description.css';

const description = (props) => {
  const content = {
    aboutMe: {
      header: 'Who I am',
      text: `
        Hi, I'm Front-end Web Developer based in Ukraine and I'm available for remote work.
        I build web applications and websites ONLY with responsive layouts for that they work correctly on any devices.
        My highest priorities are intuitive UX/UI and fast loading of our projects.

        And what about my personaity?
        I love knowledge, and I strongly believe self teaching and constant growth enrich every single life.
        I love to create beautiful things and it's the main reason why I do what I do.
        I understand the challenges of remote working, but if you really love what you do there are no challenges which you could not overcome.

        If you would like to build something together, let's get in touch.`
    },
    aboutTools: {
      header: 'What I use',
      text: `
        Some people don't like JavaScript, but I do. ES6, React, NodeJS. 
        I use HTML5 and CSS3 features and I like to build things from scratch. 
        But I can use Bootstrap 4 or Materialize CSS frameworks also.
        I find Sass preprocessor interesting and effective in the development process. 
        But there is no problem to use others.
        Ajax, APIs, Firebase. The projects must be dynamic.
        There are no ways to work remotely with efficiecy without communication 
        and organisation tools like Slack, Skype, Asana, Trello and others.
        We'll keep projects on-track and under control.`
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
