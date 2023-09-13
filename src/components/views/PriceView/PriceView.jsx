import QuesAndAns from '../../QuesAndAns';
import PricesList from '../../PricesList';
import SliderPricesList from '../../PricesList/SliderPricesList';
import RoadMap from '../../RoadMap';
import RoadMapImg from '../../../images/road-map.png';

const PriceView = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <>
      {isMobile ? <SliderPricesList /> : <PricesList />}
      <RoadMap />
      <section className="road-map__section--img">
        <div className="container">
          <img width={'100%'} src={RoadMapImg} alt="" />
        </div>
      </section>
      <QuesAndAns />
    </>
  );
};

export default PriceView;
