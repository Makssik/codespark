import QuesAndAns from '../../QuesAndAns';
import PricesList from '../../PricesList';
import SliderPricesList from '../../PricesList/SliderPricesList';

const PriceView = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <>
      {isMobile ? <SliderPricesList /> : <PricesList />}

      <QuesAndAns />
    </>
  );
};

export default PriceView;
