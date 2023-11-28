import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar } from 'react-icons/ai';

const reviews = [
  {
    id: 5,
    text: '"CodeSpark - это идеальный способ изучить программирование для детей. Мои дети не могут оторвать от этого глаз!"',
    name: 'Владимир, 38 лет',
  },
  {
    id: 4,
    text: '"Мы поражены, как CodeSpark развивает логическое мышление наших детей. Они теперь смотрят на компьютеры с новым уровнем понимания."',
    name: 'Ольга, 56 лет',
  },
  {
    id: 1,
    text: '"После начала обучения на курсах CodeSpark способности наших детей к ИТ остро выросли.."',
    name: 'Андрей, 43 года',
  },
  {
    id: 2,
    text: '"CodeSpark получает мою полную поддержку для любой детской аудитории.',
    name: 'Аня, 32 года',
  },
  {
    id: 3,
    text: '"Наши дети просто расцветают благодаря освоению CodeSpark"',
    name: 'Маша, 54 года',
  },
  {
    id: 6,
    text: '"Моя дочь невероятно занимается CodeSpark. Я вижу, как ее творчество и аналитические способности растут с каждым занятием."',
    name: 'Ирина, 44 года',
  },
  {
    id: 7,
    text: '"CodeSpark открыл нашим детям дверь в мир технологий. Они учатся, играя, и это удивительно."',
    name: 'Сергей, 50 лет',
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          className: 'center custom-slider',
          centerMode: true,
          slidesToShow: 1,
          adaptiveHeight: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="reviews">
      <div className="container">
        <h2 className="title">Впечатления от наших молодых талантов</h2>
        <p className="subtitle">
          Полные энтузиазма отзывы свидетельствуют о нашем влиянии:
        </p>
        <div className="review__slider-wrapper">
          <Slider {...settings}>
            {reviews.map(({ text, name, id }) => {
              return (
                <div className="review__item-wrapper">
                  <div key={id} className="review__item">
                    <p className="review__text">{text}</p>
                    <ul className="review__list-of-stars">
                      <li>{<AiFillStar />}</li>
                      <li>{<AiFillStar />}</li>
                      <li>{<AiFillStar />}</li>
                      <li>{<AiFillStar />}</li>
                      <li>{<AiFillStar />}</li>
                    </ul>
                    <p className="review__name">{name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
