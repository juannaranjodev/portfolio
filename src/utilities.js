import React from 'react';

import { Animated } from 'react-animated-css';
import InnerHTML from 'dangerously-set-inner-html';

// Returns random number up to 'limit'
export const random = limit => Math.floor(Math.random() * limit);

// Returns time of day with corresponding word
export const checkDayTime = () => {
  const time = new Date();
  return time.getHours() > 5 && time.getHours() < 19 ? 'day' : 'night';
  // return 'day';
};

// Devides a word into characters with 'span' elements with animation
export const devideAndAnimate = (word, animatedClassName) => (
  // word - String to devide into chars
  // animatedClassName - String of className from 'animate.css'
  word.split('').map((letter, index) => {
    let char = <span key={index}>&nbsp;</span>;
    
    if (letter !== ' ') {    
      char = (
        <Animated
          key={index}
          animationIn={animatedClassName}
          animationInDelay={index * 100}
          isVisible={true}
        >
          <span>{letter}</span>
        </Animated>
      );
    }
    
    return char;
  })
);

// Devides a word into characters
export const devideIntoChars = (word, props) => (
  // word - String to devide into chars
  word.split('').map((letter, index) => {
    let char = <span key={index}>&nbsp;</span>;
    if (letter !== ' ') {
      char = <span {...props} key={index}>{letter}</span>;
    }

    return char;
  })
);

// Splits the sentence into the words and randomly animates them
export const splitAndAnimate = (sentence) => {
  // sentence - Srting contains more then one word
  const classes = [
    // Contains classes from 'Animate.css'
    'rotateInUpRight',
    'fadeInLeft',
    'fadeInRight',
    'rotateInUpLeft',
    'fadeInUpBig',
    'fadeInDownBig'
  ];

  const words = sentence.split(' ');

  return words.map((word, index) => (
    <Animated
      key={index}
      animationIn={classes[random(classes.length)]}
      animationInDelay={index * 200}
      isVisible={true}
    >
      {
        index !== words.length - 1 ? <InnerHTML html={`${word}&nbsp;`} /> : word
      }
    </Animated>
  ));
};