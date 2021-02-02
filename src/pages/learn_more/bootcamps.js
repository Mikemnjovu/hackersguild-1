import React, {
  useContext,
} from 'react';
import Hackerthons from '../../assets/images/pngs/bootcamps.png';
import ImageComp from '../../components/Img/image-componet';
import { WHAT_WE_DO } from '../../data/constants';
import { NavContext } from '../../data/state/nav-state';
import { scrollToTop } from '../../utils/scroll-to-top';
import './learn-more.css';

const BootcampsPage = () => {
  // * Sroll to top on render
  scrollToTop();

  const [
    navShowState,
    setNavShowState,
  ] = useContext(NavContext);
  // setNavShowState(false);

  setNavShowState(false);
  console.log('Bootcamp', navShowState);
  const {
    bootCamps: { title, discription },
  } = WHAT_WE_DO;
  return (
    <div className='learn_more__conatiner'>
      <div className='learn_more__text'>
        <h1>{title}</h1>
        <p>{discription}</p>

        {/*  Button  */}
        {/* <BaseButton btnData={{content: pageButton,className: 'btn__normal', }}/> */}
      </div>
      <div className='learn_more__image'>
        <ImageComp
          imgSrc={Hackerthons}
          className={
            'learn_more__image'
          }
        />
      </div>
    </div>
  );
};

export default BootcampsPage;
