import AboutUsSection from '../../AboutUsSection';
import JoinUsSection from '../../JoinUsSection';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';
import TeamSection from '../../TeamSection/TeamSection';
import { Helmet } from 'react-helmet';

const AboutView = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://codespark.com.ua/courses" />
        <link
          rel="icon"
          href="https://raw.githubusercontent.com/Makssik/codespark/main/src/images/favicon.ico"
        />
        <meta
          name="title"
          content="Про нас :CodeSpark | Інформація про курси та викладачів "
        />
        <meta
          name="keywords"
          content="команда кодспарк, про курси кодспарк, інформація про курси кодспарк, кодспарк викладачі"
        />
        <meta
          name="description"
          content="Основна інформація про навчання і викладачів | CodeSpark ☎️(093)080-6375. "
        />
        <meta property="og:type" content="article" />
        <meta
          name="og:title"
          content="Про нас :CodeSpark | Інформація про курси та викладачів "
        />
        <meta
          property="og:description"
          content="Основна інформація про навчання і викладачів | CodeSpark ☎️(093)080-6375. "
        />
        <meta property="og:url" content="https://codespark.com.ua/about" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Makssik/codespark/main/src/images/favicon.ico"
        ></meta>
        <meta
          name="keywords"
          content="CodeSpark, codespark, code spark, код спарк, кодспарк, Курси програмування, Курси програмування для дітей, Python курси для дітей, курси пайтон для дітей, Навчання програмування, візуальне програмування"
        />
        <meta
          name="keywords"
          content="Обучение програмирования, Курсы для детей, Python курсы для детей, Python для детей, Python для дітей, програмування з нуля"
        />
      </Helmet>
      <motion.section {...setings}>
        <AboutUsSection />
      </motion.section>
      <TeamSection />
      {/* <motion.section {...setings}>
        <OurMission />
      </motion.section> */}
      <motion.section {...setings}>
        <JoinUsSection />
      </motion.section>
    </>
  );
};

export default AboutView;
