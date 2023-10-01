import OpenRevSect from '../../OpenRevSect';
import PrivilegesForChild from '../../PrivilegesForChild';
import EnterToIT from '../../EnterToIT';
import Reviews from '../../Reviews';
import Hero from '../../Hero';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';
import { Helmet } from 'react-helmet';

const HomeView = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="CodeSpark: Курси програмування для дітей безкоштовно. Навчимо дітей від 8 до 14 років програмувати з нуля за 4 місяці. Children Code Creative "
        />
        <meta
          name="description"
          content="Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Доступна ціна навчнання. "
        />
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
