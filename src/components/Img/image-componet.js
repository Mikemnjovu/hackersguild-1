import React from "react";

const ImageComp = ({
  imgSrc,
  size,
  className
}) => {
  console.log(size);
  return (
    <div>
      <img className={className} src={imgSrc} alt="test" />
    </div>
  );
};

export default ImageComp;
