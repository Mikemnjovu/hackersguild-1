import React from 'react';
import { SOCIAL_MEDIA } from '../../data/constants';
import './footer-mobile.css';
import NavList from '../nav-list/nav-list';
import CurrentYear from '../../utils/get-year';
import ImageComp from '../Img/image-componet';
import FacebookIcon from '../../assets/images/Icons/Sorted Icons/png/facebook.png';
import TwitterIcon from '../../assets/images/Icons/Sorted Icons/png/twitter.png';
import InstagramIcon from '../../assets/images/Icons/Sorted Icons/png/instagram-2.png';
import { useContext } from 'react';
import { NavContext } from '../../utils/state/nav-state';

const FooterMobile = () => {
  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);

  return (
    <div className='footer__container_mobile'>
      <div className='footer__labels'>
        {navShowState ? (
          <h4>Nav</h4>
        ) : (
          ''
        )}
        <h4>Follow us</h4>
      </div>
      <div
        className={
          navShowState
            ? 'footer__social-nav_mobile'
            : 'footer__social-nav_mobile_diff_page'
        }
      >
        <div>
          {navShowState ? (
            <NavList
              className={
                'footer__item_mobile'
              }
            />
          ) : (
            ''
          )}
        </div>
        <div className='footer__social_mobile'>
          <br />
          <a
            className='footer__link'
            href={SOCIAL_MEDIA.facebook}
          >
            <div>
              {/* <ImageComp
                imgSrc={FacebookIcon}
                className={
                  'default__styles'
                }
              /> */}
              <p> Facebook </p>
            </div>
            <br />
          </a>

          <a
            className='footer__link'
            href={SOCIAL_MEDIA.twitter}
          >
            <div>
              {/* <ImageComp
                imgSrc={TwitterIcon}
                className={
                  'default__styles'
                }
              /> */}
              <p> Twitter</p>
            </div>
            <br />
          </a>

          <a
            className='footer__link'
            href={
              SOCIAL_MEDIA.instagram
            }
          >
            <div>
              {/* <ImageComp
                imgSrc={InstagramIcon}
                className={
                  'default__styles'
                }
              /> */}
              <p>Instagram</p>
            </div>
            <br />
          </a>
        </div>
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
