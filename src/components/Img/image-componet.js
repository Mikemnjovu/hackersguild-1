import React from 'react';
import PropTypes from 'prop-types';
import './icons/Icons.css';

const ImageComp = ({
  imgSrc,
  size,
  className,
}) => {
  return (
    <div>
      <img
        className={
          className || 'default__styles'
        }
        src={imgSrc}
        alt='test'
      />
    </div>
  );
};

ImageComp.propTypes = {
  className: PropTypes.string,
};

export default ImageComp;
