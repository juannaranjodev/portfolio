import React from 'react';

import { Animated } from 'react-animated-css';
// Returns random number up to 'limit'
export const random = limit => Math.floor(Math.random() * limit);

// Returns time of day with corresponding word
export const checkDayTime = () => {
  const time = new Date();
  return time.getHours() > 5 && time.getHours() < 19 ? 'day' : 'night';
};

export const devideIntoChars = (word, animatedClassName, delayIndex) => {
  return word.split('').map((letter, index) => (
    <Animated key={index} animationIn={animatedClassName} style={{ animationDelay: `${index / delayIndex}s` }} isVisible={true}>
      <div>
        {letter}
      </div>
    </Animated>
  ));
};