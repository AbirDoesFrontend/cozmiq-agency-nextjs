import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";
import React from "react";

import ArrowImage from "../../../../public/img/arrow.png";
import GraphicIcon from "../../../../public/img/icon1.png";
import GraphicIconTwo from "../../../../public/img/icon2.png";
import GraphicIconThree from "../../../../public/img/icon3.png";
import GraphicIconFour from "../../../../public/img/icon4.png";
import GraphicIconFive from "../../../../public/img/icon5.png";
import GraphicIconSix from "../../../../public/img/icon6.png";

const ServicesData = [
  {
    icon: GraphicIcon,
    whiteIcon: "/img/white-icon1.png",
    title: "Graphic Design",
    description:
      "Our graphic design services are tailored to bring your brand vision to life. Whether you're looking to create a stunning logo, eye-catching marketing materials, or a consistent visual identity.",
  },
    {
      icon: GraphicIconTwo,
      whiteIcon: "img/white-icon2.png",
      title: "UI/UX Design",
      description:
        "Our graphic design services are tailored to bring your brand vision to life. Whether you're looking to create a stunning logo, eye-catching marketing materials, or a consistent visual identity.",
    },
    {
      icon: GraphicIconThree,
      whiteIcon: "img/white-icon3.png",
      title: "Web Development",
      description:
        "Our graphic design services are tailored to bring your brand vision to life. Whether you're looking to create a stunning logo, eye-catching marketing materials, or a consistent visual identity.",
    },
    {
      icon: GraphicIconFour,
      whiteIcon: "img/white-icon4.png",
      title: "Webflow Development",
      description:
        "Our graphic design services are tailored to bring your brand vision to life. Whether you're looking to create a stunning logo, eye-catching marketing materials, or a consistent visual identity.",
    },
    {
      icon: GraphicIconFive,
      whiteIcon: "img/white-icon5.png",
      title: "Framer Development",
      description:
        "Our graphic design services are tailored to bring your brand vision to life. Whether you're looking to create a stunning logo, eye-catching marketing materials, or a consistent visual identity.",
    },
    {
      icon: GraphicIconSix,
      whiteIcon: "img/white-icon6.png",
      title: "Shopify Development",
      description:
        "Our graphic design services are tailored to bring your brand vision to life. Whether you're looking to create a stunning logo, eye-catching marketing materials, or a consistent visual identity.",
    },
];

const ServicesSection = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="dark:p-0 py-24 md:py-28 lg:py-[140px]">
        <div className="mx-auto wrapper">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end mb-12 lg:mb-16">
            <div className="mb-8 lg:mb-0">
              <BadgeSecondary>Services We Provide</BadgeSecondary>
              <h2 className="my-5 text-black dark:text-white">
                Expert Services to Drive Success
              </h2>
              <p className="foreground-color dark:dark-foreground-color">
                Transforming your digital presence with innovative web design
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="flex justify-start basis-2/5">
                <button className="px-8 py-3 border border-[#FFFFFF1A] get-started-btn">
                  More About Us
                  <i className="fa-arrow-right fa-solid"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2">
            {ServicesData.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#F9F9F9] hover:bg-[#0939D6] dark:hover:bg-[#0939D6] dark:bg-[#0f0f17] dark:bg-[url('/img/Blur.png')] bg-cover bg-bottom p-8 rounded-[20px] transition-all duration-300 cursor-pointer service-card"
              >
                <div className="flex justify-between items-start mb-8 md:mb-10 lg:mb-12">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="w-[64px] h-[64px]"
                    width={1000}
                    height={1000}
                  />
                  <div className="bg-[#F9F9F9] p-[15px] card-icon-arrow absolute top-0 right-0">
                    <Image src={ArrowImage} alt="" />
                  </div>
                </div>
                <h3 className="mb-4 text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="foreground-color dark:dark-foreground-color">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
