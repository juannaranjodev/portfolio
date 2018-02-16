import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main>{props.children}</main>
    <footer>Social media links, copyrights</footer>
  </Aux>
);

export default layout;