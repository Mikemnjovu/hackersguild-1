import React from "react";
import { SOCIAL_MEDIA } from "../../data/constants";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      {/* <hr /> */}
      {/* <div className='footer__labels'>
        <h3>Nav</h3>
        <h3>Social</h3>
      </div> */}

      {/* <hr /> */}
      <div className="footer_social_nav">
        {/* <NavList
          className={'footer__item'}
        /> */}
        <div className="footer__social">
          <a href={SOCIAL_MEDIA.facebook}>
            {/* <ImageComp
            imgSrc={FacebookIcon}
          /> */}
            Facebook
          </a>

          <a href={SOCIAL_MEDIA.twitter}>
            {/* <ImageComp
            imgSrc={TwitterIcon}
          /> */}
            Twitter
          </a>

          <a href={SOCIAL_MEDIA.instagram}>
            {/* <ImageComp
            imgSrc={InstagramIcon}
          /> */}
            Instagram
          </a>
        </div>
      </div>
      {/* <hr /> */}
      <div className="footer__copywrite_container">
        <span role="img" aria-label="emoji">
          Made with ❤️ by HackersGuild {/* {CurrentYear()} */}
        </span>
      </div>
    </div>
  );
};

export default Footer;
