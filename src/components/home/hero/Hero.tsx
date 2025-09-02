import React from "react";


import TrustedCompanies from "./TrustedCompanies";
import HeroContent from "./HeroContent";

import FloatingDecoratives from "./FloatingDecoratives";
import BadgeLabel from "@/components/BadgeLabel";

const Hero = () => {
    return (
        <section className="relative bg-[#002B9B]">
            <div className="hero-content-wrapper wrapper">
                <FloatingDecoratives/>
                <div className="flex flex-col items-center gap-[20px] mx-auto">
                    <div className="hero-badge-container">
                        <BadgeLabel>Best Digital Agency</BadgeLabel>
                    </div>

                    <div className="mx-auto max-w-[959px] text-center">
                        <HeroContent/>
                        <TrustedCompanies/>
                    </div>
                </div>
            </div>
            {/* bottom black fade overlay */}
            <div
                className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 md:h-56 z-20
                   bg-gradient-to-b from-transparent to-[#01010a]"
            />
        </section>
    );
};

export default Hero;
