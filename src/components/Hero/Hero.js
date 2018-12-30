import React, { Fragment } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

import classes from './Hero.module.css';

const hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Fragment>
      <Slider {...settings}>
        <header className={`${classes.HeroContainer} ${classes.Image1}`}>
          <section className={classes.Content}>test1</section>
        </header>
        <header className={`${classes.HeroContainer} ${classes.Image2}`}>
          <section className={classes.Content}>test2</section>
        </header>
      </Slider>
    </Fragment>
  );
};

export default hero;
