import React from 'react';
import './landing-page.css';
import Getintouch from './sections/get-in-touch';
import HeroView from './sections/hero-view';
import OutPartners from './sections/our-partners';
import WhatWeDo from './sections/what-we-do';

const LandingPage = () => {
  return (
    <div>
      <div className='circle'>
        <div className='circle__item'></div>
      </div>

      <HeroView />
      <WhatWeDo />
      <OutPartners />
      <Getintouch />
    </div>
  );
};

export default LandingPage;
