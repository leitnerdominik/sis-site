import React from 'react';

import Dash from '../Dash/Dash';

import classes from './Card.module.css';

const card = ({ title, children }) => {
  return (
    <div className={classes.Container}>
      <div>
        <h2 className={classes.Title}>{title}</h2>
        <Dash />
        <div className={classes.Card}>{children}</div>
      </div>
    </div>
  );
};

export default card;
