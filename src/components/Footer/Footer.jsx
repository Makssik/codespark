import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer__list">
          <li>
            <ul>
              <li className="logo">CodeSpark</li>
              <li>
                2023 © <br /> CodeSpark: Your start in coding!
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="generalizing-title">Company</li>
              <li>
                <Link to={'/'}> Home </Link>
              </li>
              <li>
                <Link to={'/pricing'}>Pricing</Link>
              </li>
              <li>
                <Link to={'/about'}>About us</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="generalizing-title">Socials</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </li>
          <li>
            <ul>
              <li className="generalizing-title">For Clients</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
