import React from 'react';

const mainHeading = (props) => (
  <div>
    <h3>{props.role}</h3>
    <h1>{props.name}</h1>
    <h5>{props.message}</h5>
  </div>
);

export default mainHeading;