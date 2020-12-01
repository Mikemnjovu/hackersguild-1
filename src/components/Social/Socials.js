import React from 'react';
import { SOCIAL_MEDIA } from '../../data/constants';
import ImageComp from '../Img/image-componet';
import FacebookIcon from '../../assets/images/Icons/Sorted Icons/png/facebook.png';
import TwitterIcon from '../../assets/images/Icons/Sorted Icons/png/twitter.png';
import InstagramIcon from '../../assets/images/Icons/Sorted Icons/png/instagram-2.png';
const Socials = () => {
  return (
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
          /> */}
          <p> Twitter</p>
        </div>
        <br />
      </a>

      <a
        className='footer__link'
        href={SOCIAL_MEDIA.instagram}
      >
        <div>
          {/* <ImageComp
            imgSrc={InstagramIcon}
          /> */}
          <p>Instagram</p>
        </div>
        <br />
      </a>
    </div>
  );
};

export default Socials;
