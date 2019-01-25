import React from 'react';

import classes from './NavigationItem.module.css';

const navigationItem = ({children, click, isActive}) => (
  <li className={classes.ListItem} style={{
    color: isActive ? '#ea4a16' : null,
  }} onClick={click}>
    <span>{children}</span>
  </li>
);

export default navigationItem;