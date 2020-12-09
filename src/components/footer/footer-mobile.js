import React, {
  useContext,
} from 'react';
import './footer-mobile.css';
import NavList from '../nav-list/nav-list';
import CurrentYear from '../../utils/get-year';
import { NavContext } from '../../utils/state/nav-state';
import Socials from '../Social/Socials';
import { NavSetState } from '../../utils/state/nav-setState';

const FooterMobile = () => {
  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);

  return (
    <div className='footer__container_mobile'>
      <div className='footer__labels'>
        {navShowState ? (
          <div>
            <h4>Nav</h4>
          </div>
        ) : (
          ''
        )}
        <h4>Follow us </h4>
      </div>
      <div className='footer__social-nav_mobile'>
        {navShowState ? (
          <div>
            <NavList
              className={
                'footer__item_mobile'
              }
            />
          </div>
        ) : (
          ''
        )}
        <Socials />
      </div>
      <div className='footer__copywrite_container_mobile'>
        <p>
          &copy; HackersGuild{' '}
          {CurrentYear()}
        </p>
      </div>
    </div>
  );
};

export default FooterMobile;
