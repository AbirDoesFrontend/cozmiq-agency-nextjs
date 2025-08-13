import Image from "next/image";
import React from "react";

import LeftTagImage from "../../../../public/img/left-tag.png";
import RightTagImage from "../../../../public/img/right-tag.png";

const FloatingDecoratives = () => {
  return (
    <div className="hidden lg:block">
      <Image
        src={LeftTagImage}
        alt="left-decorative-image"
        className="hero-floating-tag-left float-animation float-delay"
        width={1000}
        height={1000}
      />
      <Image
        src={RightTagImage}
        alt="right-decorative-image"
        className="hero-floating-tag-right float-animation float-delay"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default FloatingDecoratives;
