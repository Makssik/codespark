import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { curses } from './cursesList';
import { useState } from 'react';

const SliderPricesList = ({openModal}) => {
  const initialSlide = 1;
  const [activeSlide, setActiveSlide] = useState(initialSlide);

  const settings = {
    className: 'center custom-style-slider',
    centerMode: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide,
    adaptiveHeight: true,
    centerPadding: '0px',
    // vertical: false,

    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <section className="price">
      <div className="container">
        <h1>Цінова політика</h1>
        <p className="subtitle">
          Ціна у нас не дорога, але й не дешева, саме така має бути
        </p>
        <div className="slider-wrapper">
          <Slider {...settings}>
            {curses.map(
              ({ price, name, countOfLessons, description }, index) => {
                return (
                  <div
                    className="price__wrapper"
                    // style={{width: '290px', display: 'block'}}
                  >
                    <div
                      key={price}
                      className={`price__item custom-slide ${
                        index === activeSlide ? 'active-slide' : ''
                      }`}
                    >
                      <h4>{name}</h4>
                      <p>
                        <span className="price__value">{price}</span>/
                        {countOfLessons} занять
                      </p>
                      <p>{description}</p>
                      <button
                        onClick={openModal}
                        className={`button ${
                          index === activeSlide ? 'primery' : 'secondary'
                        }`}
                      >
                        Розпочни з набором {name}
                      </button>
                    </div>
                  </div>
                );
              },
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderPricesList;
