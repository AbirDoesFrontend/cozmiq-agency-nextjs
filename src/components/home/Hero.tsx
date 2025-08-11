import Image from "next/image";
import React from "react";

import LeftTagImage from "../../../public/img/left-tag.png";
import RightTagImage from "../../../public/img/right-tag.png";
import Group1Image from "../../../public/img/group-1.png";
import Group2Image from "../../../public/img/group-2.png";
import Group3Image from "../../../public/img/group-3.png";
import Group4Image from "../../../public/img/group-4.png";
import Group5Image from "../../../public/img/group-5.png";
import Group6Image from "../../../public/img/group-6.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper wrapper">
        <div className="hidden lg:block">
          <Image
            src={LeftTagImage}
            alt=""
            className="hero-floating-tag-left"
            width={100}
            height={100}
          />
          <Image
            src={RightTagImage}
            alt=""
            className="hero-floating-tag-right"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col items-center gap-[20px] mx-auto">
          <div className="hero-badge-container">
            <h2>Best Digital Agency</h2>
          </div>

          <div className="mx-auto max-w-[959px] text-center">
            <h1 className="hero-title">
              Transform Your Business with Innovative Digital Solutions
            </h1>

            <p className="hero-description">
              Unlock the full potential of your brand with innovative digital
              solutions that drive growth. From custom web and app design to
              strategic branding, we help businesses thrive in the digital age.
            </p>

            <div className="hero-cta-container">
              <button className="px-7 py-3 border border-[#FFFFFF1A] get-started-btn">
                Let&apos;s Talk <i className="fa-arrow-right fa-solid"></i>
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-800 backdrop-blur px-8 py-3.5 border border-gray-600 rounded-[100px] font-medium text-[16px] text-gray-300 hover:text-[#0939d6] duration-200">
                Get In Touch
              </button>
            </div>

            <div className="trusted-companies-container">
              <div className="trusted-companies-divider">
                <div className="border-Width"></div>
                <p className="trusted-companies-text">
                  Trusted by companies around the world
                </p>
                <div className="border-Width"></div>
              </div>
              <div className="trusted-companies-carousel">
                <div
                  className="trusted-companies-track"
                  id="trusted-companies-track"
                >
                  <div className="trusted-company-item">
                    <Image
                      src={Group1Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group2Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group3Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group4Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group5Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group6Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group1Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group2Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group3Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group4Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group5Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="trusted-company-item">
                    <Image
                      src={Group6Image}
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
