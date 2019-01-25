import React from 'react';
import Img from 'gatsby-image';

import Dash from '../Dash/Dash';

import classes from './TextImage.module.css';

const textImage = ({ children, img, title }) => (
  <div className={classes.Container}>
    <div className={classes.TextImage}>
      <div className={classes.Text}>
      <h2>{title}</h2>
      <Dash />
      {children}</div>
      <div className={classes.Image}>
        <Img fixed={img} alt="autmn" />
      </div>
    </div>
  </div>
);

export default textImage;
