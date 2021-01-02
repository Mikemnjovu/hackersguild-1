import React, {
  useContext,
} from 'react';
import './footer-mobile.css';
import NavList from '../nav-list/nav-list';
import CurrentYear from '../../utils/get-year';
import Socials from '../Social/Socials';
import { NavContext } from '../../data/state/nav-state';

const FooterMobile = () => {
  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);

  // return (
  //   <div className='footer__container_mobile'>
  //     <div className='footer__labels'>
  //       {navShowState ? (
  //         <div>
  //           <h4>Nav</h4>
  //         </div>
  //       ) : (
  //         ''
  //       )}
  //       <h4>Follow us </h4>
  //     </div>
  //     <div className='footer__social-nav_mobile'>
  //       {navShowState ? (
  //         <div>
  //           <NavList
  //             className={
  //               'footer__item_mobile'
  //             }
  //           />
  //         </div>
  //       ) : (
  //         ''
  //       )}
  //       <Socials />
  //     </div>
  //     <div className='footer__copywrite_container_mobile'>
  //       <p>
  //         &copy; HackersGuild{' '}
  //         {CurrentYear()}
  //       </p>
  //     </div>
  //   </div>
  // );

  return (
    <div className='footer__container_mobile'>
      {navShowState
        ? 'show nav'
        : "Don't show"}

      {navShowState ? (
        <div className='footer__labels'>
          {navShowState ? (
            <div>
              <h4>Nav</h4>
              <NavList />
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
      <h4>Follow us </h4>

      <div className='footer__social-nav_mobile'>
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
