import Image, { StaticImageData } from "next/image";
import React, { useMemo } from "react";
import Group1Image from "../../../../public/img/group-1.png";
import Group2Image from "../../../../public/img/group-2.png";
import Group3Image from "../../../../public/img/group-3.png";
import Group4Image from "../../../../public/img/group-4.png";
import Group5Image from "../../../../public/img/group-5.png";
import Group6Image from "../../../../public/img/group-6.png";

type ImgItem = {
  src: StaticImageData | string;
  alt?: string;
  width?: number;
  height?: number;
};

const DEFAULT_IMAGES: ImgItem[] = [
  { src: Group1Image, alt: "Company 1" },
  { src: Group2Image, alt: "Company 2" },
  { src: Group3Image, alt: "Company 3" },
  { src: Group4Image, alt: "Company 4" },
  { src: Group5Image, alt: "Company 5" },
  { src: Group6Image, alt: "Company 6" },
];

const TrustedCompaniesCarousel = () => {
  const doubledImage = useMemo(
    () => [...DEFAULT_IMAGES, ...DEFAULT_IMAGES],
    []
  );

  return (
    <div className="trusted-companies-carousel relative">
      <div
        className="animate-marquee trusted-companies-track"
        id="trusted-companies-track"
      >
        {doubledImage.map((image, index) => (
          <div className="trusted-company-item" key={index}>
            <Image
              src={image.src}
              alt={image.alt || ""}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedCompaniesCarousel;
