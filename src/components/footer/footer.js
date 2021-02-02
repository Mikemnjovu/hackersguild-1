import React from 'react';
import { SOCIAL_MEDIA } from '../../data/constants';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer_social_nav'>
        <a href={SOCIAL_MEDIA.facebook}>
          Facebook
        </a>

        <a href={SOCIAL_MEDIA.twitter}>
          Twitter
        </a>

        <a
          href={SOCIAL_MEDIA.instagram}
        >
          Instagram
        </a>
      </div>

      <div className='footer__copywrite_container'>
        <p>
          Made with{' '}
          <span role='img'>❤️</span> by
          HackersGuild
        </p>
      </div>
    </div>
  );
};

export default Footer;
