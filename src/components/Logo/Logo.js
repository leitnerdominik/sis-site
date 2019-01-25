import React from 'react';

import classes from './Logo.module.css';

const logo = ({ clicked, isSolid }) => {
  const cssArr = [classes.Logo];

  if (isSolid) cssArr.push(classes.Solid);
  
  return (
    <span onClick={clicked} className={cssArr.join(' ')}>
      SIS
    </span>
  );
};

export default logo;
