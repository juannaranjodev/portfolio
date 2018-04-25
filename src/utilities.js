// Returns random number up to 'limit'
export const random = limit => Math.floor(Math.random() * limit);

// Returns time of day with corresponding word
export const checkDayTime = () => {
  const time = new Date();
  return time.getHours() > 5 && time.getHours() < 19 ? 'day' : 'night';
};
