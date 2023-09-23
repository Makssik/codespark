import ContactForm from '../ContactForm/ContactForm';

import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import {
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
} from 'react-icons/bi';
const Footer = () => {
  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer__info">
          <h3 className="logo logo--footer">CodeSpark</h3>
          <p className="logo__subtitle">Code Children Creative</p>
          <ul className="terms">
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
          <ul className="footer__socials">
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <BiLogoFacebookSquare />
            </li>
            <li>
              <BiLogoLinkedinSquare />
            </li>
            <li>
              <AiFillYoutube />
            </li>
            <li>
              <BiLogoTiktok />
            </li>
          </ul>
        </div>
        <div className="footer__form-wrapper">
          <div className="footer__form-text-wrapper">
            <h2 className="title">Допоможемо з вибором</h2>
            <p className="subtitle subtitle--left">
              Напиши нам, якщо маєш питання щодо навчання або потрібна допомога.
              Ми передзвонимо і залюбки поговоримо з тобою
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
