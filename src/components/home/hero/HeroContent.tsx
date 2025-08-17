import PrimaryBtn from "@/components/global/PrimaryBtn";
import React from "react";
import SecondaryBtn from "@/components/global/SeondaryBtn";

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
        <SecondaryBtn text={"Get In Touch"} href={'/'}/>
      </div>
    </div>
  );
};

export default HeroContent;
