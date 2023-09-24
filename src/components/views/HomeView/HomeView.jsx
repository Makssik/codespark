import Hero from '../../Hero';
import OpenRevSect from '../../OpenRevSect';
import PrivilegesForChild from '../../PrivilegesForChild';
import EnterToIT from '../../EnterToIT';
import Reviews from '../../Reviews';
import WebinarCountdown from '../../WebinarCountdown';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';

const HomeView = () => {
  return (
    <>
      <WebinarCountdown />
      <motion.section {...setings}>
        <Hero />
      </motion.section>

      <motion.section {...setings}>
        <OpenRevSect />
      </motion.section>

      <motion.section {...setings}>
        <PrivilegesForChild />
      </motion.section>

      <motion.section {...setings}>
        <EnterToIT />
      </motion.section>

      <motion.section {...setings}>
        <Reviews />
      </motion.section>
    </>
  );
};

export default HomeView;
