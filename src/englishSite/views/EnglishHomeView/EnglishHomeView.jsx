import OpenRevSect from '../../OpenRevSect';
import PrivilegesForChild from '../../PrivilegesForChild';
import EnterToIT from '../../EnterToIT';
import Hero from '../../Hero';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';
import { Helmet } from 'react-helmet';
// import faviconImg from '../../../images/favicon.ico';

const EnglishHomeView = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="title"
          content="CodeSpark: Навчимо дітей від 4 до 16 років програмувати з нуля за 4 місяці."
        />
        <meta
          name="description"
          content="codespark Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Доступна ціна навчання. кодспарк, код спарк"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Курси програмування онлайн з нуля для дітей"
        />
        <meta
          property="og:description"
          content="codespark Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Доступна ціна навчання. кодспарк, код спарк"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Makssik/codespark/main/src/images/favicon.ico"
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
        <link rel="canonical" href="https://codespark.com.ua/" />
        <meta property="url" content="https://codespark.com.ua/" />
        <meta property="og:url" content="https://codespark.com.ua/" />
      </Helmet>
      <motion.section {...setings}>
        <Hero
          subtitle={
            'Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark.'
          }
        >
          <h1 className="hero__title title">
            Open the world of knowledge
            <br />
            with our
            <br />
            online courses
            <br />
            for children!
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
    </>
  );
};

export default EnglishHomeView;
