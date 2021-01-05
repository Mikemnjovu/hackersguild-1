import React, {
  useState,
  useContext,
} from 'react';
import hGLogo from '../../assets/images/HGLogo.png';
import menu from '../../assets/images/pngs/menu.png';
import { NAV } from '../../data/constants';
import './nav.css';
import BaseButton from '../button/base-button';
import NavList from '../nav-list/nav-list';
import { BackToHome } from '../../utils/navigation/back-to-home';
import { NavContext } from '../../data/state/nav-state';
const Nav = () => {
  // Mobile menu button toggle
  const [
    menuShow,
    setMenushow,
  ] = useState(false);
  const buttonMenuHandler = () => {
    setMenushow(!menuShow);
    // console.log(menuShow);
  };
  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);

  const menuItems = () => {
    return (
      <div className='nav-container__list'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavList
              className={'nav__list'}
            />
          </li>
          <li className='nav__item'>
            <BaseButton
              btnData={NAV.button}
            />
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className='nav'>
      <div className='nav__branding_menu'>
        {/* Brand Logo  */}
        <div className='nav__brand'>
          <a
            href='/'
            onClick={BackToHome}
          >
            <img
              className='nav__logo'
              src={hGLogo}
              alt='hackers guild logo'
            />
          </a>
        </div>

        {/* Nav Desktop view */}

        {navShowState ? (
          <div className='nav__web_view'>
            {menuItems()}
          </div>
        ) : (
          ''
        )}

        {/* Nav Mobile View */}
        {navShowState ? (
          <div className='nav__menu'>
            <button
              onClick={
                buttonMenuHandler
              }
              className='nav__button'
            >
              <img
                src={menu}
                alt='menu'
              />
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='nav__web_moblie'>
        {navShowState
          ? menuItems()
          : ''}
      </div>
    </div>
  );
};

export default Nav;
