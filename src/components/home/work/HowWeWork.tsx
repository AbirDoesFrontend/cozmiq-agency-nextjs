import React from "react";

import BadgeSecondary from "@/components/global/BadgeSecondary";

import RocektImage from "../../../../public/img/rocket.png";
import Image from "next/image";

const HowWeWork = () => {
  return (
    <section className="bg-black py-24 md:py-28 lg:py-[140px]">
      <div className="mx-auto wrapper">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          <div className="flex flex-col justify-start items-start gap-[20px]">
            <BadgeSecondary>How We Work</BadgeSecondary>

            <h2 className="max-w-[450px] text-white">
              Our Proven Process to Deliver Success
            </h2>

            <div className="mb-5 text-white">
              <p>
                We start with a comprehensive discovery phase, gaining a deep
                understanding of your business and goals. This insight allows us
                to develop a tailored strategy that guides every decision,
                ensuring alignment with your vision.
              </p>
              <p>
                Next, we move into design and development, turning your ideas
                into engaging, user-friendly solutions. After launch, we focus
                on continuous optimization, refining the project to ensure
                ongoing success and measurable results for your brand.
              </p>
            </div>

            <div className="flex-shrink-0">
              <div className="flex justify-start basis-2/5">
                <button className="px-8 py-3 border border-[#FFFFFF1A] get-started-btn">
                  Book A Free Audit Call
                  <i className="fa-arrow-right fa-solid"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={RocektImage}
                alt="rocket-image"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
