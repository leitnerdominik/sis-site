import React from 'react';

import classes from './NavigationItem.module.css';

const navigationItem = ({children, click}) => (
  <li className={classes.ListItem} onClick={click}>
    <span>{children}</span>
  </li>
);

export default navigationItem;