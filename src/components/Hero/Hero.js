import React, { Fragment } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Img from 'gatsby-image';

import classes from './Hero.module.css';

const hero = ({ images }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const imgs = images.map(img => (
    <div key={img.node.id}>
      <div className={classes.Text}>
        <p>Manchmal, da möchte ich mich zurückziehen können</p>
        <p>Tief in mein Haus. Ruhe.</p>
        <p>Nichts dringt hinein. Nichts hinaus.</p>
        <p>Geborgen.</p>
      </div>
      <div className={classes.Images}>
        <Img className={classes.Image} fluid={img.node.childImageSharp.fluid} />
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Slider {...settings}>
        <header className={`${classes.HeroContainer} ${classes.Image1}`}>
          <section className={classes.Text}>
            <p>Manchmal, da würde ich meine Hülle gern loswerden. Frei.</p>
            <p>Etwas wagen. Kontakt haben.</p>
            <p>Vielleicht gar Zuwendung erfahren.</p>
            <p>Risiko.</p>
          </section>
        </header>
        <header className={`${classes.HeroContainer} ${classes.Image2}`}>
          <section className={classes.Text}><p>Manchmal, da möchte ich mich zurückziehen können.</p>
            <p>Tief in mein Haus. Ruhe.</p>
            <p>Nichts dringt hinein. Nichts hinaus.</p>
            <p>Geborgen.</p></section>
        </header>
      </Slider>
    </Fragment>
  );
};

export default hero;
