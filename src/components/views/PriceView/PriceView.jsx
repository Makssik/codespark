import QuesAndAns from '../../QuesAndAns';
import PricesList from '../../PricesList';
import SliderPricesList from '../../PricesList/SliderPricesList';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';

const PriceView = () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <>
      {isMobile ? (
        <motion.section {...setings}>
          <SliderPricesList />
        </motion.section>
      ) : (
        <motion.section {...setings}>
          <PricesList />
        </motion.section>
      )}

      <motion.section {...setings}>
        <QuesAndAns />
      </motion.section>
    </>
  );
};

export default PriceView;
