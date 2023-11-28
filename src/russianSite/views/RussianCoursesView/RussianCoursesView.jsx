import Hero from '../../Hero';
import MonoLogoImg from '../../../images/banks/mono.webp';
import ABankLogoImg from '../../../images/banks/a-bank.webp';
import PrivatLogoImg from '../../../images/banks/privat.webp';
import PricesList from '../../PricesList';
import SliderPricesList from '../../PricesList/SliderPricesList';
import RoadMap from '../../RoadMap';
import ReactModal from 'react-modal';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const isMobile = window.matchMedia('(max-width: 768px)').matches;

const RussianCoursesView = () => {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Helmet>
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="title"
          content="CodeSpark: Онлайн курсы программирования с нуля для детей"
        />
        <meta
          name="description"
          content="Сделаем вашего ребенка программистом Python с нуля за 4 месяца на онлайн-курсах — CodeSpark. Бесплатный пробный урок. ☎️(093)080-6375. 70% наших клиентов получили качественную основу для старта в ИТ. Опытные преподаватели, профессионалы своего дела, Эффективная программа обучения. Доступное обучение. codespark, code spark"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Онлайн курсы программирования с нуля для детей"
        />
        <meta
          property="og:description"
          content="Сделаем вашего ребенка программистом Python с нуля за 4 месяца на онлайн-курсах — CodeSpark. Бесплатный пробный урок. ☎️(093)080-6375. 70% наших клиентов получили качественную основу для старта в ИТ. Опытные преподаватели, профессионалы своего дела, Эффективная программа обучения. Цена обучения доступная.codespark, code spark "
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Makssik/codespark/main/src/images/favicon.ico"
        />
        <meta
          name="keywords"
          content="CodeSpark, codespark, code spark, код спарк, кодспарк, Курси програмування, Курси програмування для дітей, Python курси для дітей, курси пайтон для дітей, Навчання програмування, візуальне програмування, Programming courses, Programming courses for children, Python courses for children, Python courses for children, Learning programming, visual programming"
        />
        <meta
          name="keywords"
          content="Обучение програмирования, Курсы для детей, Python курсы для детей, Python для детей, Python для дітей, програмування з нуля, Programming courses, Programming courses for children, Python courses for children, Python courses for children, Learning programming, visual programming"
        />
        <link rel="canonical" href="https://codespark.com.ua/courses" />
        <meta property="url" content="https://codespark.com.ua/courses" />
        <meta property="og:url" content="https://codespark.com.ua/courses" />
      </Helmet>

      <Hero
        subtitle={
          'Курси програмування для дітей безкоштовно. Навчимо дітей від 8 до 14 років програмувати з нуля за 4 місяці.	'
        }
      >
        <h1 className="hero__title title">
          CodeSpark: Качественные онлайн-курсы по программированию для детей у
          вас удобство
        </h1>
      </Hero>

      <ReactModal
        style={customStyles}
        onRequestClose={closeModal}
        isOpen={isOpen}
        parentSelector={() => document.querySelector('#root')}
        overlayClassName="modal__overlay"
        className={'price__modal'}
      >
        <h2 className="title">Произведите оплату удобным для вас способом</h2>

        <ul className="price__list-of-banks">
          <li>
            <a href="https://send.monobank.ua/5ohnJj6YfV">
              <img width={100} src={MonoLogoImg} alt="" />
            </a>
          </li>
          <li>
            <a href="https://pay.a-bank.com.ua/card/U8OXBWmwxU1Z6V0j">
              <img width={100} src={ABankLogoImg} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.privat24.ua/send/0vnlt">
              <img width={100} src={PrivatLogoImg} alt="" />
            </a>
          </li>
        </ul>
        <button onClick={closeModal} className="button secondary">
          Закрити вікно
        </button>
      </ReactModal>
      {isMobile ? (
        <SliderPricesList
          isModalOpen={isOpen}
          setIsModalOpen={setIsOpen}
          openModal={openModal}
        />
      ) : (
        <PricesList openModal={openModal} />
      )}
      <RoadMap />
    </>
  );
};

export default RussianCoursesView;
