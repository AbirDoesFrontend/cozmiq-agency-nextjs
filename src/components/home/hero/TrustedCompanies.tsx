import React from "react";
import TrustedCompaniesCarousel from "./TrustedCompaniesCarousel";

const TrustedCompanies = () => {
  return (
    <div className="trusted-companies-container">
      <div className="trusted-companies-divider">
        <div className="border-Width"></div>
        <p className="trusted-companies-text">
          Trusted by companies around the world
        </p>
        <div className="border-Width"></div>
      </div>
      <TrustedCompaniesCarousel />
    </div>
  );
};

export default TrustedCompanies;
