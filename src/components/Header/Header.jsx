import { useState, useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const links = [
  {
    text: 'Home',
    path: '/',
    id: '1',
  },
  {
    text: 'Pricing',
    path: '/pricing',
    id: '2',
  },
  {
    text: 'About us',
    path: '/about',
    id: '3',
  },
  {
    text: 'Contact',
    path: '/contact',
    id: '4',
  },
];

const Header = () => {
  const [nav, setNav] = useState(true);
  //Дальше магия для отключения скрола при открытом меню
  useEffect(() => {
    const handleScroll = () => {
      if (!nav) {
        window.scrollTo(0, 0);
      }
    };

    if (!nav) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nav]);

  //Дальше идет магия, которая обрабатывает клик ВНЕ хедера для того что бы закрыть его
  const node = useRef();
  const handleClickOutside = event => {
    if (node.current && !node.current.contains(event.target)) {
      setNav(true);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <header className="header">
      <div className=" container header__container">
        <div className="logo logo--header">CodeSpark</div>
        <ul ref={node} className={nav ? 'header__list' : 'header__list active'}>
          {links.map(({ text, path, id }) => (
            <li key={id} className="header__item">
              <NavLink
                onClick={() => setNav(true)}
                className={({ isActive }) =>
                  'header__link ' + (isActive ? 'current' : '')
                }
                to={path}
              >
                {text}
              </NavLink>
            </li>
          ))}
          <li className="header__item">
            <ul className="header__sign-up">
              <li>
                <button className="button secondary">Log in</button>
              </li>
              <li>
                <button className="button primery">Sign Up</button>
              </li>
            </ul>
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className="header__menu-button-icon">
          {nav ? <AiOutlineMenu size={35} /> : <AiOutlineClose size={35} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
