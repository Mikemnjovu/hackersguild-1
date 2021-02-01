import React from 'react';
import Getintouchimg from '../../../assets/images/pngs/Get-in-touch.png';
import BaseButton from '../../../components/button/base-button';
import { GET_IN_TOUCH } from '../../../data/constants';
import '../styles/get-in-touch.css';
const Getintouch = () => {
  const {
    title,
    decription,
  } = GET_IN_TOUCH;
  return (
    <div
      className='get-in-touch__container'
      id='get-in-touch'
    >
      <div className='get-in-touch__img'>
        <img
          src={Getintouchimg}
          alt='phone-vector'
        />
      </div>
      <div className='get-in-touch-text--container'>
        <div className='get-in-touch__title'>
          <h1>{title}</h1>
        </div>
        <div className='get-in-touch__description'>
          <p>{decription}</p>
        </div>
        <div className='get-in-touch__button'>
          <BaseButton
            btnData={
              GET_IN_TOUCH.button
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
