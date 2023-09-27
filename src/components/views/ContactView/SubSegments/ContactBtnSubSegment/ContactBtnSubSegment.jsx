import { Link } from 'react-scroll';

const ContactBtnSubSegment = () => {
    return (
      <li className="contact__segments-item">
        <p>
          Залиште запит на безкоштовну консультацію та наш адміністратор
          зв'яжеться з вами сам.
        </p>
        <Link
          className="contact__button"
          to={'footer'}
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
        >
          Отримати консультацію
        </Link>
      </li>
    );
}
 
export default ContactBtnSubSegment;