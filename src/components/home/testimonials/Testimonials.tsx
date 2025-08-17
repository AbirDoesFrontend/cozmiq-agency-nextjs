import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";
import React from "react";

import ClientImageOne from '../../../../public/img/client-imge-one.png';
import ClientImageTwo from '../../../../public/img/client-image-two.png';
import SignImage from '../../../../public/img/sign.png';

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-black py-[140px] dark:py-0">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 wrapper">
        <div className="flex lg:flex-row flex-col justify-between items-start lg:items-end lg:gap-[248px]">
          <div className="lg:w-1/2">
            <div className="mb-4">
              <BadgeSecondary>Why Choose Us</BadgeSecondary>
            </div>

            <h2 className="mb-6 text-black dark:text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="lg:w-1/2">
            <p className="foreground-color dark:dark-foreground-color">
              Hear from our satisfied clients who&apos;ve experienced the impact of
              our work. Their feedback highlights the value we bring through
              innovative solutions and exceptional service.
            </p>
          </div>
        </div>

        <div className="relative mt-6 md:mt-12 lg:mt-[64px]">
          <div className="overflow-hidden">
            <div
              id="testimonials-track"
              className="flex transition-transform duration-500 ease-in-out"
            >
              <div className="flex-shrink-0 px-3 w-full lg:w-1/2">
                <div className="bg-[#F9F9F9] dark:bg-[#FFFFFF1A] p-8 rounded-[20px] h-full">
                  <div className="flex sm:flex-row flex-col items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={ClientImageOne}
                        alt="John D."
                        className="rounded-xl h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 items-start gap-4 lg:gap-6">
                      <Image src={SignImage} width="42" height="28" alt="" />
                      <p className="dark:text-white foreground-color">
                        Working with this team was a game-changer for our
                        business. They know our vision and delivered a website
                        that truly represents our brand.
                      </p>

                      <div className="flex flex-col items-start gap-2">
                        <h4 className="dark:text-white">John D.</h4>
                        <p className="dark:text-white text-sm">
                          CEO of Tech Innovators
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 px-3 w-full lg:w-1/2">
                <div className="bg-[#F9F9F9] dark:bg-[#FFFFFF1A] p-8 rounded-[20px] h-full">
                  <div className="flex sm:flex-row flex-col items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={ClientImageTwo}
                        alt="John D."
                        className="rounded-xl h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 items-start gap-4 lg:gap-6">
                      <Image src={SignImage} width="42" height="28" alt="" />

                      <p className="dark:text-white foreground-color">
                        The team provided exceptional service from start to
                        finish. Their attention to detail and creativity brought
                        our ideas to life in a way we never imagined.
                      </p>

                      <div className="flex flex-col items-start gap-2">
                        <h4 className="dark:text-white">Laura M.</h4>
                        <p className="dark:text-white text-sm">
                          Product Manager at Creative Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 px-3 w-full lg:w-1/2">
                <div className="bg-[#F9F9F9] dark:bg-[#FFFFFF1A] p-8 rounded-[20px] h-full">
                  <div className="flex sm:flex-row flex-col items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={ClientImageOne}
                        alt="John D."
                        className="rounded-xl h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 items-start gap-4 lg:gap-6">
                      <Image src={SignImage} width="42" height="28" alt="" />

                      <p className="dark:text-white foreground-color">
                        Working with this team was a game-changer for our
                        business. They know our vision and delivered a website
                        that truly represents our brand.
                      </p>

                      <div className="flex flex-col items-start gap-2">
                        <h4 className="dark:text-white">John D.</h4>
                        <p className="dark:text-white text-sm">
                          CEO of Tech Innovators
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 px-3 w-full lg:w-1/2">
                <div className="bg-[#F9F9F9] dark:bg-[#FFFFFF1A] p-8 rounded-[20px] h-full">
                  <div className="flex sm:flex-row flex-col items-start gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={ClientImageTwo}
                        alt="John D."
                        className="rounded-xl h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col flex-1 items-start gap-4 lg:gap-6">
                      <Image src={SignImage} width="42" height="28" alt="" />

                      <p className="dark:text-white foreground-color">
                        The team provided exceptional service from start to
                        finish. Their attention to detail and creativity brought
                        our ideas to life in a way we never imagined.
                      </p>
                      <div className="flex flex-col items-start gap-2">
                        <h4 className="dark:text-white">Laura M.</h4>
                        <p className="dark:text-white text-sm">
                          Product Manager at Creative Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-24">
            <button
              className="bg-blue-500 rounded-full w-2 h-2 transition-all duration-300 dot"
              data-slide="0"
            ></button>
            <button
              className="bg-gray-600 hover:bg-gray-500 rounded-full w-2 h-2 transition-all duration-300 dot"
              data-slide="1"
            ></button>
            <button
              className="bg-gray-600 hover:bg-gray-500 rounded-full w-2 h-2 transition-all duration-300 dot"
              data-slide="2"
            ></button>
          </div>
          <button
            id="prevBtn"
            className="hidden top-1/2 left-0 absolute bg-gray-800 hover:bg-gray-700 rounded-full w-12 h-12 text-white transition-all -translate-x-4 -translate-y-1/2 duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <button
            id="nextBtn"
            className="hidden top-1/2 right-0 absolute bg-gray-800 hover:bg-gray-700 rounded-full w-12 h-12 text-white transition-all -translate-y-1/2 translate-x-4 duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
