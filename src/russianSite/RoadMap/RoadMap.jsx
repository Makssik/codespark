import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { useState, useRef, useEffect } from 'react';
import { RoadBigStep, RoadStep } from './RoadStep';
import RocketImg from '../../images/rocket.webp';
import Slider from 'react-slick';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProgressBar from '../ProgressBar';


import RoadMapImg from '../../images/road-map.webp';
const RoadMap = () => {
  const { width } = useWindowSize();
    const [confetti, setConfetti] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    const sliderRef = useRef(null);

    useEffect(() => {
      setProgress((currentSlide / 7) * 100);
      // Вычисляем ширину в процентах на основе текущего состояния
      if (currentSlide === 7) {
        setConfetti(true);
        setTimeout(() => setConfetti(false), 10000);
      }
    }, [currentSlide]);

    const handleNextSlide = () => {
      sliderRef.current.slickNext();
    };

    const handlePrevSlide = () => {
      sliderRef.current.slickPrev();
    };

    const sliderSetings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 300,
      className: 'road-map__slider',
      //   className: 'center',
      centerMode: true,
      centerPadding: '20px',
      adaptiveHeight: true,
      variableWidth: true,
      beforeChange: (current, next) => setCurrentSlide(next),
    };
  return (
    <>
      <section className="road-map__section--img">
        <div className="container">
          <h2 className="title">
            Путь к изучению програмирования
            <br /> вместе с CodeSpark
          </h2>
          <img width={'100%'} src={RoadMapImg} alt="" />
        </div>
      </section>
      <section className="road-map">
        {confetti && <Confetti width={width} height="1500px" />}
        <div className="container">
          <h2>твой путь в IT</h2>
          <div className="road-map__slider-with-buttons">
            <div className="custom-arrow" onClick={handlePrevSlide}>
              <BsFillArrowLeftCircleFill />
            </div>
            <div className="road-map__slider-wrapper">
              <Slider ref={sliderRef} {...sliderSetings}>
                <RoadBigStep text={'Visual Programming'} img={RocketImg} />
                <RoadStep text={'Basic level'} number={'1'} />
                <RoadStep text={'Medium level'} number={'2'} />
                <RoadStep text={'Advenced level'} number={'3'} />
                <RoadBigStep text={'Learning Python'} img={RocketImg} />
                <RoadStep text={'Basic level'} number={'4'} />
                <RoadStep text={'Medium level'} number={'5'} />
                <RoadStep text={'Advenced level'} number={'6'} />
              </Slider>
            </div>
            <div className="custom-arrow" onClick={handleNextSlide}>
              <BsFillArrowRightCircleFill />
            </div>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </section>
    </>
  );
};

export default RoadMap;
