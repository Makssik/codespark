import ContactForm from '../ContactForm/ContactForm';
import SocialsList from '../SocialsList';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__info">
          <h3 className="logo logo--footer">CodeSpark</h3>
          <p className="logo__subtitle">Code Children Creative</p>
          <ul className="terms">
            <li>
              <a href="https://docs.google.com/document/d/1dhHFA9y17HM0WFcckUR7KU6kWf1cog61fcmC2yUUsUA/edit?usp=sharing">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1xHVpZgDwc2wULm-Y_c_PUK-3a404-e4KQhKv0BUrlfg/edit?usp=sharing">
                Terms Of Service
              </a>
            </li>
          </ul>
          <SocialsList />
        </div>
        <div className="footer__form-wrapper">
          <div className="footer__form-text-wrapper">
            <h2 className="title">Допоможемо з вибором</h2>
            <p className="subtitle subtitle--left">
              Напиши нам, якщо маєш питання щодо навчання або потрібна допомога.
              Ми передзвонимо і залюбки поговоримо з тобою
            </p>
            <p
              className="footer__hotfix"
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Якщо виникли проблеми з формою, звертайтесь до нашого{' '}
              <span>
                <a href="https://t.me/CodeSparkUA">телеграму</a>
              </span>
            </p>
          </div>
          <ContactForm className={'footer__form'} />
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '40px', marginBottom: 0 }}>
        2023 © CodeSpark: Your start in coding!
      </p>
    </footer>
  );
};

export default Footer;
