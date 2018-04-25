import React from 'react';

import { Animated } from 'react-animated-css';

// Returns random number up to 'limit'
export const random = limit => Math.floor(Math.random() * limit);

// Returns time of day with corresponding word
export const checkDayTime = () => {
  const time = new Date();
  return time.getHours() > 5 && time.getHours() < 19 ? 'day' : 'night';
};

// Devides a word into characters with 'span' elements
export const devideIntoChars = (word, animatedClassName, delayIndex) => (
  // word - String to devide into chars
  // animatedClassName - String of className from 'animate.css'
  // delayIndex - Number divider for consistent animation delay
  word.split('').map((letter, index) => (
    <Animated 
      key={index} 
      animationIn={animatedClassName} 
      style={{ animationDelay: `${index / delayIndex}s` }} 
      isVisible={true}
    >
      <span>
        {letter}
      </span>
    </Animated>
  ))
);
