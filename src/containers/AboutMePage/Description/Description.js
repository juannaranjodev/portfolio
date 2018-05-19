import React from 'react';

import styles from './Description.scss';
import Button from '../../../components/UI/Button/Button';
import { Animated } from 'react-animated-css';
import { TimeContext } from '../../App/App';

const description = props => {
  const content = {
    aboutMe: {
      header: 'Who I am',
      text: `
        Hi, I'm Front-end Web Developer based in Ukraine and I'm available for remote work.
        I build web applications with responsive layouts for that they work correctly on any devices.
        My highest priorities are intuitive UX/UI and fast loading of our projects.

        And what about my personality?
        I like knowledge, and I strongly believe self-learning and constant growth enrich every single life.
        I like to create beautiful things and it's the main reason why I do what I do.
        I understand the challenges of remote work, but if you really love what you do there are no challenges which you could not overcome.`
    },
    aboutTools: {
      header: 'What I use',
      text: `
        I write the most part of my code using JavaScript - ES6+ and React. 
        I do my web apps dynamic with Ajax, APIs, Firebase.
        I use HTML5 and CSS3 features and I like to build layouts from scratch. 
        But I can use Bootstrap 4 or MaterializeCSS frameworks to increase my speed in this process.
        I find Sass preprocessor interesting for me and effective in the development process. 
        But there is no problem to use others.
        There is no way to work remotely with efficiency without communication 
        and organization tools like Slack, Skype, Asana, Trello, and others.
        We'll keep projects on-track and under control.`
    }
  };
  
  return (
    <TimeContext.Consumer>
      {time => (
        <div className={[styles.Description, time].join(' ')}>
          <Animated
            animationIn="fadeInDown"
            isVisible={true}
            animationInDelay={1000}
            className={styles.Description__section}
          >
            <h3 className={styles.Description__section__header}>{content.aboutMe.header}</h3>
            <p className={styles.Description__section__content}>{content.aboutMe.text}</p>
            <p className={styles.Description__section__content}>
              <Button buttonType="routerLink" textLink href="/contacts">
                Drop me a line
              </Button>
                  , if you have interesting business ideas to work on.
            </p>
          </Animated>
          <Animated
            animationIn="fadeInUp"
            isVisible={true}
            animationInDelay={1000}
            className={styles.Description__section}
          >
            <h3 className={styles.Description__section__header}>{content.aboutTools.header}</h3>
            <p className={styles.Description__section__content}>{content.aboutTools.text}</p>
          </Animated>
        </div>
      )}
    </TimeContext.Consumer>
  );
};

export default description;
