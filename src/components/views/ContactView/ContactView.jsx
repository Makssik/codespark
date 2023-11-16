import PhoneSubSegment from './SubSegments/PhoneSubSegment';
import ContactBtnSubSegment from './SubSegments/ContactBtnSubSegment';
import SubscribeFormSubSegment from './SubSegments/SubscribeFormSubSegment';
import SocialsList from '../../SocialsList';
import { Helmet } from 'react-helmet';

const ContactView = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="title"
          content="CodeSpark: Контакти, Онлайн-консультація з питань курсів "
        />
        <meta
          name="description"
          content="Ми на зв'язку з вами кожен день | Номер телефону, пошта та інші контакти codespark ☎️(093)080-6375. "
        />
        <meta property="og:type" content="article" />
        <meta
          name="og:title"
          content="CodeSpark: Контакти, Онлайн-консультація з питань курсів "
        />
        <meta
          property="og:description"
          content="Ми на зв'язку з вами кожен день | Номер телефону, пошта та інші контакти codespark ☎️(093)080-6375. "
        />
        <meta property="og:url" content="https://codespark.com.ua/contact" />
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
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://codespark.com.ua/contact" />
        <meta property="url" content="https://codespark.com.ua/contact" />
        <meta property="og:url" content="https://codespark.com.ua/contact" />
      </Helmet>
      <section className="contact">
        <div className="container">
          <div className="contact__heading">
            <div className="contact__heading-text-wrapper">
              <h2 className="title title--left">Контакти Online</h2>
              <p className="subtitle subtitle--left">
                Залишились запитання? Ось наші контакти, будемо раді вашому
                дзвінку
              </p>
            </div>
            <SocialsList className={'contact__socials-list'} />
          </div>
          <ul className="contact__segments-list">
            <PhoneSubSegment />
            <ContactBtnSubSegment />
            <SubscribeFormSubSegment />
          </ul>
        </div>
      </section>
    </>
  );
};

export default ContactView;
