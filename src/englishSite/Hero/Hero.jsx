import React from 'react';
import HeroImg from '../../images/hero-img2.webp';
import TryForFreeBtn from '../TryForFreeBtn';

function Hero({subtitle, children}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__half-wrapper">
          {children}
          <p className="hero__subtitle subtitle">
            {subtitle}
          </p>
          <div className="hero__button-group">
            <TryForFreeBtn className={'button primery'} />
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
