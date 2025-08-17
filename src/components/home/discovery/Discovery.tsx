import Image from "next/image";

import Icon7 from "../../../../public/img/Icon.png";
import Icon8 from "../../../../public/img/Icon8.png";
import Icon10 from "../../../../public/img/icon7.png";
import Icon9 from "../../../../public/img/icon9.png";

const Discovery = () => {
  return (
    <section className="bg-black pb-16 lg:pb-[140px] overflow-hidden">
      <div className="flex justify-center items-center p-4">
        <div className="w-full perspective-1200">
          <div className="lg:relative gap-10 grid grid-cols-1 md:grid-cols-2 lg:min-h-[32rem] transform-gpu">
            <div className="group lg:absolute card-position-1">
              <div className="bg-[#0939D6] shadow-2xl mx-auto p-6 lg:p-8 rounded-[20px] w-full text-white lg:rotate-[-8deg] hover:scale-105 transition-all duration-400 card-width">
                <div className="flex flex-col gap-3 h-full">
                  <div className="mb-8 lg:mb-10">
                    <Image src={Icon9} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="mb-3 lg:mb-4 font-semibold text-lg lg:text-xl">
                      Discovery and Strategy
                    </h3>
                    <p className="text-white text-sm lg:text-base">
                      We start by understanding your business goals and
                      challenges. Based on this, we create a tailored strategy
                      that aligns with your vision, ensuring we&apos;re on the
                      right path from the beginning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group lg:absolute card-position-2">
              <div className="bg-[#FFFFFF0D] shadow-2xl p-6 lg:p-8 rounded-[20px] text-white lg:rotate-[8deg] hover:scale-105 transition-all duration-400 card-width">
                <div className="flex flex-col gap-3 h-full">
                  <div className="mb-8 lg:mb-10">
                    <Image src={Icon7} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="mb-3 lg:mb-4 font-semibold text-lg lg:text-xl">
                      Design and Development
                    </h3>
                    <p className="text-white text-sm lg:text-base">
                      We start by understanding your business goals and
                      challenges. Based on this, we create a tailored strategy
                      that aligns with your vision, ensuring we&apos;re on the
                      right path from the beginning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group lg:absolute card-position-3">
              <div className="bg-[#FFD500] shadow-2xl p-6 lg:p-8 rounded-[20px] text-white lg:rotate-[-8deg] hover:scale-105 transition-all duration-400 card-width">
                <div className="flex flex-col gap-3 h-full">
                  <div className="mb-8 lg:mb-10">
                    <Image src={Icon10} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="mb-3 lg:mb-4 font-semibold text-[#07080B] text-lg lg:text-xl">
                      Review and Feedback
                    </h3>
                    <p className="text-[#07080B] text-sm lg:text-base">
                      We start by understanding your business goals and
                      challenges. Based on this, we create a tailored strategy
                      that aligns with your vision, ensuring we&apos;re on the
                      right path from the beginning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group lg:absolute card-position-4">
              <div className="bg-[#E9E9EA] shadow-2xl p-6 lg:p-8 rounded-[20px] text-white lg:rotate-[8deg] hover:scale-105 transition-all duration-400 card-width">
                <div className="flex flex-col gap-3 h-full">
                  <div className="mb-8 lg:mb-10">
                    <Image src={Icon8} alt="" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="mb-3 lg:mb-4 font-semibold text-[#07080B] text-lg lg:text-xl">
                      Launch and Optimization
                    </h3>
                    <p className="text-[#07080B] text-sm lg:text-base">
                      We start by understanding your business goals and
                      challenges. Based on this, we create a tailored strategy
                      that aligns with your vision, ensuring we&apos;re on the
                      right path from the beginning.
                    </p>
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

export default Discovery;
