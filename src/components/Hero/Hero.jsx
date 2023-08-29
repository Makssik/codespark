import React from 'react';
// import Logo from '../../images/logo-transparent.png';
import HeroImg from '../../images/hero-img2.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__half-wrapper">
          <h1 className="hero__title title">
            Відкрий світ знань
            <br />
            із нашими
            <br />
            онлайн-курсами
            <br />
            для дітей!
          </h1>
          <p className="hero__subtitle subtitle">
            Тут ви знайдете короткий опис наших курсів.
          </p>
          <div className="hero__button-group">
            <button className="button primery">Try for free</button>
            <button className="button secondary">Sign up</button>
          </div>
        </div>
        <div className="hero__logo-wrapper">
          <img
            src={HeroImg}
            width={400}
            alt="logo"
            className="hero__logo logo"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
