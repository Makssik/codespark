import PhoneSubSegment from './SubSegments/PhoneSubSegment';
import ContactBtnSubSegment from './SubSegments/ContactBtnSubSegment';
import SubscribeFormSubSegment from './SubSegments/SubscribeFormSubSegment';
import SocialsList from '../../SocialsList';

const ContactView = () => {
  return (
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
  );
};

export default ContactView;
