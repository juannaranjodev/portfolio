import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/SideDrawer/SideDrawer';
import SocialMedia from '../SocialMedia/SocialMedia';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <Sidedrawer />
    <main>{props.children}</main>
    <SocialMedia />
  </Aux>
);

export default layout;