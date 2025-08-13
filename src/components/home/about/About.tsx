import Image from "next/image";
import React from "react";

import AboutImage from "../../../../public/img/about-image.png";
import BadgeSecondary from "@/components/global/BadgeSecondary";
import PrimaryBtn from "@/components/global/PrimaryBtn";

const About = () => {
  return (
    <section className="about-section">
      <div className="wrapper">
        <div className="about-content-wrapper">
          <div className="about-left-section">
            <BadgeSecondary>About Us</BadgeSecondary>

            <p className="dark:dark-foreground-color foreground-color">
              At Cozmiq Agency, we are passionate about bringing your business
              vision to life. With a team of experienced designers, developers,
              and strategists, we craft digital experiences that are not just
              beautiful but also functional. Whether you need a website, a
              marketing strategy, or a full digital overhaul, we&apos;re here to
              make it happen.
            </p>
          </div>

          <div className="about-right-section">
            <h2 className="text-[#E9E9EA] text-3xl lg:text-4xl xl:text-5xl leading-snug md:leading-tight lg:leading-tight">
              Building success with 
              <span className="about-text-span primary-color mx-0.5">
                creativity, strategy, and innovation 
              </span>
              driven by your vision
            </h2>
          </div>
        </div>
        <div className="about-button-section">
          <div className="about-button-container">
            <PrimaryBtn text="More About Us" />
          </div>
          <div className="about-image-container">
            <Image
              width={1000}
              height={1000}
              src={AboutImage}
              alt="group img"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
