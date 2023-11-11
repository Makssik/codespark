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
const CoursesView = () => {
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
          content="CodeSpark: Курси програмування онлайн з нуля для дітей"
        />
        <meta name="keywords" content="курси програмування" />
        <meta
          name="description"
          content="Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. Безкоштовний пробний урок. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Доступна ціна навчання. кодспарк, код спарк"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Курси програмування онлайн з нуля для дітей"
        />
        <meta
          property="og:description"
          content="Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. Безкоштовний пробний урок. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Доступна ціна навчання.кодспарк, код спарк "
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Makssik/codespark/main/src/images/favicon.ico"
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
          CodeSpark: Якісні онлайн-курси з програмування для дітей у зручний для
          вас час
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
        <h2 className="title">Здійсніть оплату зручним для вас способом</h2>

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

export default CoursesView;
