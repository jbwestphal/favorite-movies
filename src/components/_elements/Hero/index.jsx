import React from 'react';
import Link from 'gatsby-link';
import Carousel from "nuka-carousel";

import "./hero.css";

const Hero = (props) =>
  <Carousel>
    <section className={(props.type === 'absolute') ? 'hero--absolute' : 'hero--grid'}>
      <figure className="hero-img"><img src="https://image.ibb.co/mMOHh7/black_panter_cover.jpg" /></figure>
      <article className="hero-info">
        <h2 className="hero-title">Black Panther</h2>
        <p className="hero-categ">Adventure</p>
        <time dateTime="2018-02-15" className="hero-date">2018-02-15</time>
      </article>
    </section>
  </Carousel>

export default Hero;

// Styles
