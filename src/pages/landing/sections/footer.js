import React from "react";
import { SOCIAL_MEDIA } from "../../../data/constants";
import "../styles/footer.css";
import NavList from "../../../components/nav-list/nav-list";
import Year from "../../../utils/get-year";
import CurrentYear from "../../../utils/get-year";
import FacebookIcon from "../../../components/Img/icons/facecook";
import ImageComp from "../../../components/Img/imageComp";
import TwitterIcon from "../../../components/Img/icons/twitter";
import InstagramIcon from "../../../components/Img/icons/instagram";
const Footer = () => {
  console.log(Year);
  return (
    <div className="footer__container">
      <NavList />
      <div className="footer__copywrite_container">
        <p>&copy; HackersGuild {CurrentYear()}</p>
      </div>
      <div className="footer__social">
        <a href={SOCIAL_MEDIA.facebook}>
          <ImageComp imgSrc={<FacebookIcon />} />
        </a>

        <a href={SOCIAL_MEDIA.twitter}>
          <ImageComp imgSrc={<TwitterIcon />} />
        </a>

        <a href={SOCIAL_MEDIA.instagram}>
          <ImageComp imgSrc={<InstagramIcon />} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
