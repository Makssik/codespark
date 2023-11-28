import OpenRevSect from '../../OpenRevSect';
import PrivilegesForChild from '../../PrivilegesForChild';
import EnterToIT from '../../EnterToIT';
import Hero from '../../Hero';
import { motion } from 'framer-motion';
import setings from '../../../extension/settingsForInitialTransition';
import { Helmet } from 'react-helmet';
// import faviconImg from '../../../images/favicon.ico';

const RussianHomeView = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="title"
          content="CodeSpark: Научим детей от 4 до 16 лет программировать с нуля за 4 месяца.."
        />
        <meta
          name="description"
          content="codespark Бесплатный пробный урок. Сделаем вашего ребенка программистом Python с нуля за 4 месяца на онлайн-курсах — CodeSpark. ☎️(093)080-6375. 70% наших клиентов получили качественную основу для старта в ИТ. Опытные преподаватели, профессионалы своего дела, Эффективная программа обучения. Доступная стоимость обучения."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Онлайн курсы программирования с нуля для детей"
        />
        <meta
          property="og:description"
          content="codespark Бесплатный пробный урок. Сделаем вашего ребенка программистом Python с нуля за 4 месяца на онлайн-курсах — CodeSpark. ☎️(093)080-6375. 70% наших клиентов получили качественную основу для старта в ИТ. Опытные преподаватели, профессионалы своего дела, Эффективная программа обучения. Доступное обучение. codespark, code spark"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Makssik/codespark/main/src/images/favicon.ico"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="CodeSpark, codespark, code spark, код спарк, кодспарк, Курси програмування, Курси програмування для дітей, Python курси для дітей, курси пайтон для дітей, Навчання програмування, візуальне програмування, Programming courses, Programming courses for children, Python courses for children, Python courses for children, Learning programming, visual programming"
        />
        <meta
          name="keywords"
          content="Обучение програмирования, Курсы для детей, Python курсы для детей, Python для детей, Python для дітей, програмування з нуля, Programming courses, Programming courses for children, Python courses for children, Python courses for children, Learning programming, visual programming"
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
            Открой мир знаний
            <br />
            с нашими
            <br />
            онлайн курсами
            <br />
            для детей
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

export default RussianHomeView;
