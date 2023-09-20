import ContactForm from '../../ContactForm/ContactForm';
import ContactUsImg from '../../../images/contact-us.jpg';

const ContactView = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="title">Зв'яжіться з нами</h2>
        <p className="subtitle">
          Досліджуйте майбутнє разом з нами. Не соромтеся зв'язатися.
        </p>
        <div className="img-wrapper">
          <img src={ContactUsImg} width={400} alt="" />
        </div>
        <ContactForm isMsgFieldVisible={true} />
      </div>
    </section>
  );
};

export default ContactView;
