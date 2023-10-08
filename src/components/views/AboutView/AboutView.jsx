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
        <meta
          name="title"
          content="CodeSpark: Про нас. Ми пропонуємо революційний підхід до навчання ІТ. Навчимо дітей від 8 до 14 років програмувати з нуля за 4 місяці. Children Code Creative "
        />
        <meta
          name="description"
          content="Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Приєднуйтесь до CodeSpark спільноти та даруйте своїй дитині можливість відкрити світ комп'ютерних знань та творчості вже сьогодні!"
        />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="og:title"
          content="CodeSpark: Про нас. Ми пропонуємо революційний підхід до навчання ІТ. Навчимо дітей від 8 до 14 років програмувати з нуля за 4 місяці. Children Code Creative"
        />
        <meta
          name="og:description"
          content="Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Приєднуйтесь до CodeSpark спільноти та даруйте своїй дитині можливість відкрити світ комп'ютерних знань та творчості вже сьогодні!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
