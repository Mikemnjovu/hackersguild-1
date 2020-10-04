import React from "react";

const ImageComp = ({ imgSrc, size, className }) => {
  return (
    <div>
      <img className={className} src={imgSrc} alt="test" />
    </div>
  );
};

export default ImageComp;
