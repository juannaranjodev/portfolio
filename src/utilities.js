import React from 'react';
// Returns random number up to 'limit'
export const random = limit => Math.floor(Math.random() * limit);

// Returns time of day with corresponding word
export const checkDayTime = () => {
  const time = new Date();
  return time.getHours() > 5 && time.getHours() < 19 ? 'day' : 'night';
};

export const sequentialAnimationDelay = (dividend) => ({ animationDelay: `${dividend / 5}s`});

export const devideIntoChars = (word, classname, animate) => {
  return word.split('').map((letter, index) => {
    return (
      <span key={index}
        className={classname}
        style={animate ? sequentialAnimationDelay(index) : null}
      >
        {letter}
      </span>
    );
  });
};