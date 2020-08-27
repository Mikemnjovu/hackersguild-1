import React from "react";
import { SOCIAL_MEDIA } from "../../../data/constants";
import "../styles/footer.css";
import NavList from "../../../components/nav-list/nav-list";
import CurrentYear from "../../../utils/get-year";
import ImageComp from "../../../components/Img/image-componet";
import FacebookIcon from '../../../assets/images/Icons/facebook.png'
import TwitterIcon from '../../../assets/images/Icons/VectorEmail.png'
import InstagramIcon from '../../../assets/images/Icons/linkdin.png'

const Footer = () => {

  return (
    <div className="footer__container">
      <hr />
      <NavList />
      <div className="footer__copywrite_container">
        <p>&copy; HackersGuild {CurrentYear()}</p>
      </div>
      <div className="footer__social">
        <a href={SOCIAL_MEDIA.facebook}>
          <ImageComp imgSrc={FacebookIcon } />
        </a>

        <a href={SOCIAL_MEDIA.twitter}>
          <ImageComp imgSrc={TwitterIcon  }/>
        </a>

        <a href={SOCIAL_MEDIA.instagram}>
          <ImageComp imgSrc={InstagramIcon } />
        </a>
      </div>
    </div>
  );
};

export default Footer;
