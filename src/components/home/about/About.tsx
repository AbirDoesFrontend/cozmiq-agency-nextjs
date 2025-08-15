import Image from "next/image";

import BadgeSecondary from "@/components/global/BadgeSecondary";
import PrimaryBtn from "@/components/global/PrimaryBtn";
import AboutImage from "../../../../public/img/about-image.png";
import LearnMore from "../../../../public/img/learn-more.png";

const About = () => {
  return (
    <section className="relative about-section">
      <div className="top-1/2 left-0 absolute w-full h-[150px]">
        <Image src={LearnMore} alt="bg-img" fill />
      </div>
      <div className="wrapper">
        <div className="about-content-wrapper">
          <div className="about-left-section">
            <BadgeSecondary>About Us</BadgeSecondary>

            <p className="text-[#1D1F2C] dark:text-white">
              At Cozmiq Agency, we are passionate about bringing your business
              vision to life. With a team of experienced designers, developers,
              and strategists, we craft digital experiences that are not just
              beautiful but also functional. Whether you need a website, a
              marketing strategy, or a full digital overhaul, we&apos;re here to
              make it happen.
            </p>
          </div>

          <div className="about-right-section">
            <h2 className="text-[#07080B] dark:text-[#E9E9EA] text-3xl lg:text-4xl xl:text-5xl leading-snug md:leading-tight lg:leading-tight">
              Building success with
              <span className="mx-0.5 about-text-span primary-color">
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
          <div className="w-full about-image-container">
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
