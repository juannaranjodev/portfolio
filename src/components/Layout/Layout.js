import React from 'react';

import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <header>Nav, logo</header>
    <main>{props.children}</main>
    <footer>Social media links, copyrights</footer>
  </Aux>
);

export default layout;