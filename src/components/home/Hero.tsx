import React from "react";


import TrustedCompanies from "./TrustedCompanies";
import HeroContent from "./HeroContent";
import BadgeLabel from "../BadgeLabel";
import FloatingDecoratives from "./FloatingDecoratives";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-wrapper wrapper">
        <FloatingDecoratives />
        <div className="flex flex-col items-center gap-[20px] mx-auto">
          <div className="hero-badge-container">
            <BadgeLabel>Best Digital Agency</BadgeLabel>
          </div>

          <div className="mx-auto max-w-[959px] text-center">
            <HeroContent />
            <TrustedCompanies />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
