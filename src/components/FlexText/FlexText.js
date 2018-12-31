import React from 'react';

import classes from './FlexText.module.css';

const flexText = ({title, children}) => (
  <div className={classes.Container}>
    <h2 className={classes.Title}>{title}</h2>
    <div className={classes.Content}>
      {children}
    </div>
  </div>
);

export default flexText;
