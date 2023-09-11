import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
const curses = [
  {
    price: '2930',
    name: 'Basic',
    countOfLessons: '6',
    description: 'For individuals and small teams',
  },
  {
    price: '5720',
    name: 'Standart',
    countOfLessons: '12',
    description: 'For startups and growing businesses',
  },
  {
    price: '10520',
    name: 'Extra',
    countOfLessons: '24',
    description: 'For organizations with advanced needs',
  },
];
const SliderPricesList = () => {
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
        <h2>Pricing</h2>
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
                        className={`button ${
                          index === activeSlide ? 'primery' : 'secondary'
                        }`}
                      >
                        Get Started with {name}
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
