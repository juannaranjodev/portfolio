import React from 'react';

import styles from './Description.css';
import Button from '../../../components/UI/Button/Button';

const description = (props) => {
  const content = {
    aboutMe: {
      header: 'Who I am',
      text: `
        Hi, I'm Front-end Web Developer based in Ukraine and I'm available for remote work.
        I build web applications with responsive layouts for that they work correctly on any devices.
        My highest priorities are intuitive UX/UI and fast loading of our projects.

        And what about my personaity?
        I like knowledge, and I strongly believe self learning and constant growth enrich every single life.
        I like to create beautiful things and it's the main reason why I do what I do.
        I understand the challenges of remote work, but if you really love what you do there are no challenges which you could not overcome.`
    },
    aboutTools: {
      header: 'What I use',
      text: `
        I write the most part of my code using JavaScript - ES6 and React. 
        I do my web apps dynamic with Ajax, APIs, Firebase.
        I use HTML5 and CSS3 features and I like to build layouts from scratch. 
        But I can use Bootstrap 4 or Materialize CSS frameworks to increase my speed in this process.
        I find Sass preprocessor interesting for me and effective in the development process. 
        But there is no problem to use others.
        There is no way to work remotely with efficiency without communication 
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
        <p><Button type="router-link" size="small" href="/contacts" color="orange">Drop me a line</Button>, if you have interesting business ideas to work on.</p>
      </section>
      <section>
        <h3>{content.aboutTools.header}</h3>
        <p>{content.aboutTools.text}</p>
      </section>
    </div>
  );
}

export default description;
