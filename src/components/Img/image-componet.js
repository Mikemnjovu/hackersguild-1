import React from "react";

const ImageComp = ({
  imgSrc,
  size,
  defualsize = "our-partners__img--component",
}) => {
  console.log(size);
  return (
    <div>
      <img className={defualsize} src={imgSrc} alt="test" />
    </div>
  );
};

export default ImageComp;
