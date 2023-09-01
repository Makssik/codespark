import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiFillStar } from 'react-icons/ai';

const reviews = [
  {
    id: 5,
    text: '"CodeSpark - це ідеальний спосіб вивчити програмування для дітей. Мої діти не можуть відірвати від цього очей!"',
    name: 'Володимир, 38 років',
  },
  {
    id: 4,
    text: '"Ми вражені, як CodeSpark розвиває логічне мислення наших дітей. Вони тепер дивляться на комп\'ютери з новим рівнем розуміння."',
    name: 'Ольга, 56 років',
  },
  {
    id: 1,
    text: '"Після початку навчання на курсах CodeSpark здатності наших дітей до ІТ гостро виросли."',
    name: 'Андрій , 43 роки',
  },
  {
    id: 2,
    text: '"CodeSpark отримує мою повну підтримку для будь-якої дитячої аудиторії.',
    name: 'Анна , 32 роки',
  },
  {
    id: 3,
    text: '"Наші діти просто розцвітають завдяки освоєнню CodeSpark"',
    name: 'Марія , 54 роки',
  },
  {
    id: 6,
    text: '"Моя донька неймовірно займається CodeSpark. Я бачу, як її творчість і аналітичні здібності зростають з кожним заняттям."',
    name: 'Ірина, 44 роки',
  },
  {
    id: 7,
    text: '"CodeSpark відкрив нашим дітям двері до світу технологій. Вони вчаться, граючи, і це дивовижно."',
    name: 'Сергій, 50 років',
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
          dots:true,
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
