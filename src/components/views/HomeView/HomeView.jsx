import OpenRevSect from '../../OpenRevSect';
import PrivilegesForChild from '../../PrivilegesForChild';
import EnterToIT from '../../EnterToIT';
import Reviews from '../../Reviews';
import Hero from '../../Hero';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';
import HomeHelmet from './HomeHelmet';
// import faviconImg from '../../../images/favicon.ico';

const HomeView = () => {
  return (
    <>
      <HomeHelmet />
      <motion.section {...setings}>
        <Hero
          subtitle={
            'Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark.'
          }
        >
          <h1 className="hero__title title">
            Відкрий світ знань
            <br />
            із нашими
            <br />
            онлайн-курсами
            <br />
            для дітей!
          </h1>
        </Hero>
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
