import AboutUsSection from '../../AboutUsSection';
import OurMission from '../../OurMission';
import JoinUsSection from '../../JoinUsSection';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';

const AboutView = () => {
  return (
    <>
      <motion.section {...setings}>
        <AboutUsSection />
      </motion.section>
      <motion.section {...setings}>
        <OurMission />
      </motion.section>
      <motion.section {...setings}>
        <JoinUsSection />
      </motion.section>
    </>
  );
};

export default AboutView;
