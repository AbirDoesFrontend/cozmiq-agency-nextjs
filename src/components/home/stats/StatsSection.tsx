import BadgeSecondary from "@/components/global/BadgeSecondary";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="mx-auto wrapper">
        <div className="flex items-center gap-3 mb-5">
          <BadgeSecondary>Numbers</BadgeSecondary>
        </div>

        <div className="lg:flex items-end gap-6 lg:gap-20 grid">
          <h2 className="text-[#07080B] dark:text-white basis-3/5">
            What We&apos;ve Achieved So Far
          </h2>

          <p className="mb-12text-[#07080B] dark:text-white basis-2/5">
            Weve driven business growth with innovative design and digital
            strategies. Our work has transformed brands, boosted visibility, and
            delivered lasting results across industries.
          </p>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20.5">
          <div className="my-5">
            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-23">
              <div className="mb-[40px] border border-[#D2D2D5] rounded-[60px] overflow-hidden">
                <div className="py-8 text-center">
                  <h5 className="opacity-80 group-hover:opacity-100 font-medium text-[#07080B] text-[20px] dark:text-white transition-opacity duration-300">
                    Happy Customers
                  </h5>
                </div>
                <div className="group bg-[#0939D6] hover:shadow-2xl py-[100px] rounded-b-[60px] h-full overflow-hidden text-white text-center hover:scale-105 transition-all duration-300 cursor-pointer transform">
                  <div className="font-bold text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                    150+
                  </div>
                </div>
              </div>

              <div className="mt-[40px] border border-[#D2D2D5] rounded-[60px] overflow-hidden">
                <div className="py-8 text-center">
                  <h5 className="opacity-80 group-hover:opacity-100 font-medium text-[#07080B] text-[20px] dark:text-white transition-opacity duration-300">
                    Years of Experience
                  </h5>
                </div>
                <div className="group bg-[#4A4C56] hover:shadow-2xl py-[100px] rounded-b-[60px] h-full overflow-hidden text-white text-center hover:scale-105 transition-all duration-300 cursor-pointer transform">
                  <div className="font-bold text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                    2+
                  </div>
                </div>
              </div>

              <div className="mb-[40px] border border-[#D2D2D5] rounded-[60px] overflow-hidden">
                <div className="py-8 text-center">
                  <h5 className="opacity-80 group-hover:opacity-100 font-medium text-[#07080B] text-[20px] dark:text-white transition-opacity duration-300">
                    Project Completed
                  </h5>
                </div>
                <div className="group bg-[#FFD500] hover:shadow-2xl py-[100px] rounded-b-[60px] h-full overflow-hidden text-[#07080B] text-center hover:scale-105 transition-all duration-300 cursor-pointer transform">
                  <div className="font-bold text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                    200+
                  </div>
                </div>
              </div>

              <div className="mt-[40px] border border-[#D2D2D5] rounded-[60px] overflow-hidden">
                <div className="py-8 text-center">
                  <h3 className="opacity-80 group-hover:opacity-100 font-normal text-[#07080B] text-[20px] dark:text-white transition-opacity duration-300">
                    Success Rate
                  </h3>
                </div>
                <div className="group bg-[#07080B] dark:bg-white hover:shadow-2xl py-[100px] rounded-b-[60px] h-full overflow-hidden text-white dark:text-[#07080B] text-center hover:scale-105 transition-all duration-300 cursor-pointer transform">
                  <div className="font-bold text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                    100%
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

export default StatsSection;
