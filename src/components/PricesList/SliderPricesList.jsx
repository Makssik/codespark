import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const settings = {
    className: 'center custom-style-slider',
    centerMode: true,
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    initialSlide: 1,
  };
    
  return (
    <section>
      <div className="container">
        <h2>Pricing</h2>
        <p className="subtitle">
          Ціна у нас не дорога, але й не дешева, саме така має бути
        </p>
        <Slider {...settings}>
          {curses.map((curse, index) => {
            return (
              <div className="price__item custom-slide">
                <h4>{curse.name}</h4>
                <p>
                  <span className="price__value">{curse.price}</span>/
                  {curse.countOfLessons} занять
                </p>
                <p>{curse.description}</p>
                <button
                  className={`button ${index === 1 ? 'primery' : 'secondary'}`}
                >
                  Get Started with {curse.name}
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default SliderPricesList;
