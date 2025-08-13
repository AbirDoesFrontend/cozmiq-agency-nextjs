import PrimaryBtn from "@/components/global/PrimaryBtn";
import React from "react";

const HeroContent = () => {
  return (
    <div>
      <h1 className="hero-title">
        Transform Your Business with Innovative Digital Solutions
      </h1>

      <p className="hero-description">
        Unlock the full potential of your brand with innovative digital
        solutions that drive growth. From custom web and app design to strategic
        branding, we help businesses thrive in the digital age.
      </p>

      <div className="hero-cta-container">
        <PrimaryBtn text="Let's Talk"/>
        <button className="bg-gray-800/50 hover:bg-gray-800 backdrop-blur px-8 py-3.5 border border-gray-600 rounded-[100px] font-medium text-[16px] text-gray-300 hover:text-[#0939d6] duration-200">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
