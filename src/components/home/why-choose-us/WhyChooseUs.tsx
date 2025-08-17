import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";

import PrimaryBtn from "@/components/global/PrimaryBtn";
import WhyChooseUsImage from "../../../../public/img/why-choose-us.png";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#f9f9f9] dark:bg-[#01010A] py-16 lg:py-[140px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl wrapper">
        <div className="flex lg:flex-row flex-col justify-between items-start gap-8 lg:gap-[248px] mb-16">
          <div className="lg:w-1/2">
            <div className="mb-4">
              <BadgeSecondary>Why Choose Us</BadgeSecondary>
            </div>

            <h2 className="text-[#07080B] dark:text-white">
              Why We&apos;re Your Perfect Digital Partner
            </h2>
          </div>

          <div className="lg:w-1/2">
            <p className="mb-5 lg:mb-8">
              At Cozmiq, we&apos;re not just another digital agency. We are your
              strategic partner dedicated to driving real growth for your brand.
              Here&apos;s why businesses trust us to bring their vision to life.
            </p>

            <div className="flex-shrink-0">
              <div className="flex justify-start basis-2/5">
                <PrimaryBtn text="Contact Us" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-start gap-12">
          <div className="w-full lg:w-1/2">
            <div className="rounded-[20px] w-full overflow-hidden">
              <Image
                src={WhyChooseUsImage}
                alt="Team collaboration"
                className="w-full h-[500px] lg:h-auto object-cover"
                width={1000}
                height={1000}
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-4 lg:space-y-3 xl:space-y-4">
              <div className="bg-white dark:bg-[#FFFFFF0D] hover:shadow-xl p-8 lg:p-4 xl:p-8 border dark:border-none rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Expert Team
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our experienced professionals bring deep expertise in design,
                  development, and digital marketing to deliver high-quality
                  results.
                </p>
              </div>

              <div className="bg-white dark:bg-[#FFFFFF0D] hover:shadow-xl p-8 lg:p-4 xl:p-8 border dark:border-none rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Tailored Solutions
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We provide customized strategies that align with your unique
                  business goals, ensuring the best possible outcomes.
                </p>
              </div>

              <div className="bg-white dark:bg-[#FFFFFF0D] hover:shadow-xl p-8 lg:p-4 xl:p-8 border dark:border-none rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Collaborative Approach
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We work closely with you throughout the process, incorporating
                  your feedback to create a solution that meets your
                  expectations.
                </p>
              </div>

              <div className="bg-white dark:bg-[#FFFFFF0D] hover:shadow-xl p-8 lg:p-4 xl:p-8 border dark:border-none rounded-xl transition-all hover:-translate-y-1 duration-300 transform">
                <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                  Proven Results
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  With a track record of successful projects, we&apos;ve helped
                  businesses grow their online presence and achieve measurable
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
