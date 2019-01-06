import React from 'react';

import Dash from '../Dash/Dash';

import classes from './FlexText.module.css';

const flexText = ({title, children}) => (
  <div className={classes.Container}>
    <div>
      <h2 className={classes.Title}>{title}</h2>
      <Dash />
      <div className={classes.Content}>
        {children}
      </div>
    </div>
  </div>
);

export default flexText;
