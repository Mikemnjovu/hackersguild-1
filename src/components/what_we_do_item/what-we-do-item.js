import React from 'react';
import BaseButton from '../button/base-button';
import ImageComp from '../Img/image-componet';

const WhatWeDoItem = ({
  props: { title, discription, button },
  img,
}) => {
  return (
    <div>
      <div className=' what-we-do_item'>
        <div className='what-we-do__img'>
          <ImageComp
            imgSrc={img}
            className={
              'what-we-do__hackerthons what-we-do__img'
            }
          />
        </div>
        <div className='what-we-do__title'>
          <h3>{title}</h3>
        </div>
        <div className='what-we-do__discription'>
          <p>{discription}</p>
        </div>
        <div className='what-we-do__button'>
          <BaseButton
            btnData={button}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoItem;
