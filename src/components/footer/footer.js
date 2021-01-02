import React from 'react';
import { SOCIAL_MEDIA } from '../../data/constants';
import './footer.css';
import NavList from '../nav-list/nav-list';
import CurrentYear from '../../utils/get-year';
import ImageComp from '../Img/image-componet';
import FacebookIcon from '../../assets/images/Icons/Sorted Icons/png/facebook.png';
import TwitterIcon from '../../assets/images/Icons/Sorted Icons/png/twitter.png';
import InstagramIcon from '../../assets/images/Icons/Sorted Icons/png/instagram-2.png';

const Footer = () => {
  return (
    <div className='footer__container'>
      {/* <hr /> */}
      <div className='footer__labels'>
        <h3>Nav</h3>
        <h3>Social</h3>
      </div>

      <div className='footer_social_nav'>
        <NavList
          className={'footer__item'}
        />
        <div className='footer__social'>
          <a
            href={SOCIAL_MEDIA.facebook}
          >
            {/* <ImageComp
            imgSrc={FacebookIcon}
          /> */}
            Facebook
          </a>

          <a
            href={SOCIAL_MEDIA.twitter}
          >
            {/* <ImageComp
            imgSrc={TwitterIcon}
          /> */}
            Twitter
          </a>

          <a
            href={
              SOCIAL_MEDIA.instagram
            }
          >
            {/* <ImageComp
            imgSrc={InstagramIcon}
          /> */}
            Instagram
          </a>
        </div>
      </div>
      <div className='footer__copywrite_container'>
        <p>
          Made with ❤️ by HackersGuild{' '}
          {/* {CurrentYear()} */}
        </p>
      </div>
    </div>
  );
};

export default Footer;
