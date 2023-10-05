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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="title"
          content="CodeSpark: Контакти. Онлайн консультація. Навчимо дітей від 8 до 14 років програмувати з нуля за 4 місяці. Записатись на курси програмування для дітей. Children Code Creative"
        />
        <meta
          name="description"
          content="Залишились запитання? Ось наші контакти, будемо раді вашому дзвінку. Шлях до вивчення програмування разом з CodeSpark. Відоповіді на поширені питання. План навчання. Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Приєднуйтесь до CodeSpark спільноти та даруйте своїй дитині можливість відкрити світ комп'ютерних знань та творчості вже сьогодні!"
        />
        <meta
          name="keywords"
          content="CodeSpark, codespark, code spark, код спарк, кодспарк, Курси програмування, Курси програмування для дітей, Python курси для дітей, курси пайтон для дітей, Навчання програмування, візуальне програмування"
        />
        <meta
          name="keywords"
          content="Обучение програмирования, Курсы для детей, Python курсы для детей, Python для детей, Python для дітей, програмування з нуля"
        />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="og:title"
          content="CodeSpark: Контакти. Онлайн консультація. Навчимо дітей від 8 до 14 років програмувати з нуля за 4 місяці. Записатись на курси програмування для дітей. Children Code Creative"
        />
        <meta
          name="og:description"
          content="Залишились запитання? Ось наші контакти, будемо раді вашому дзвінку. Шлях до вивчення програмування разом з CodeSpark. Відоповіді на поширені питання. План навчання. Безкоштовний пробний урок. Зробимо вашу дитину Python-програмістом з нуля за 4 місяці на онлайн курсах - CodeSpark. ☎️(093)080-6375. 70% наших клієнтів отримали якісну почву для старту в IT. Досвідчені викладачі які є професіоналами в своїй галузі, Ефективна програма навчання. Приєднуйтесь до CodeSpark спільноти та даруйте своїй дитині можливість відкрити світ комп'ютерних знань та творчості вже сьогодні!"
        />
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
