import React from 'react';

import { Animated } from 'react-animated-css';

// Returns random number up to 'limit'
export const random = limit => Math.floor(Math.random() * limit);

// Returns time of day with corresponding word
export const checkDayTime = () => {
  const time = new Date();
  return time.getHours() > 5 && time.getHours() < 19 ? 'day' : 'night';
  // return 'night';
};

// Devides a word into characters with 'span' elements with animation
export const devideAndAnimate = (word, animatedClassName, delayIndex) => (
  // word - String to devide into chars
  // animatedClassName - String of className from 'animate.css'
  // delayIndex - Number divider for consistent animation delay
  word.split('').map((letter, index) => {
    let char = <span key={index}>&nbsp;</span>;
    
    if (letter !== ' ') {    
      char = (
        <Animated
          key={index}
          animationIn={animatedClassName}
          style={{ animationDelay: `${index / delayIndex}s` }}
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
