import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import {
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
} from 'react-icons/bi';

const SocialsList = ({className}) => {
  return (
    <ul className={`socials-list ${className}`}>
      <li>
        {' '}
        <a href="https://instagram.com/codesparkua?igshid=OGQ5ZDc2ODk2ZA==">
          <AiFillInstagram />
        </a>
      </li>
      <li>
        {' '}
        <a href="https://www.facebook.com/profile.php?id=61550958997339">
          <BiLogoFacebookSquare />
        </a>
      </li>
      <li>
        {' '}
        <a href="https://www.linkedin.com/in/code-spark-999909290">
          <BiLogoLinkedinSquare />
        </a>
      </li>
      <li>
        {' '}
        <a href="https://youtube.com/@CodeSpark-rr6zh?si=BmlXM50Y6Md85-Av">
          <AiFillYoutube />
        </a>
      </li>
      <li>
        {' '}
        <a href="https://www.tiktok.com/@codesparkua?_t=8fyiFPi3ItZ&_r=1">
          <BiLogoTiktok />
        </a>
      </li>
    </ul>
  );
};

export default SocialsList;
