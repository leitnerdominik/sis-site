import React from 'react';

import faltblatt from '../../../../documents/faltblatt.pdf'

import classes from './NavigationItem.module.css';

const navigationItem = ({ children, click, isActive, type }) => {
  let item = <span>{children}</span>;

  if (type === 'link') {
    item = <a target="_blank" rel="noopener noreferrer" href={faltblatt}>{children}</a>;
  }

  return (
    <li
      className={classes.ListItem}
      style={{
        color: isActive ? '#ea4a16' : null,
      }}
      onClick={click}
    >
      {item}
    </li>
  );
};

export default navigationItem;
