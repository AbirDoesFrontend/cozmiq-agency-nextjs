import BadgeSecondary from '@/components/global/BadgeSecondary'
import React from 'react'

const Pricing = () => {
  return (
    <section
      className="bg-black px-4 py-24 md:py-28 lg:py-[140px] dark:pb-0 text-white"
    >
      <div className="relative mx-auto py-4 wrapper">
        <div
          className="absolute inset-0 border border-gray-600 border-dashed rounded-lg pointer-events-none"
        ></div>

        <div className="relative md:p-8">
          <div
            className="flex lg:flex-row flex-col justify-between items-start gap-8 mb-12 md:mb-16 lg:mb-[84px]"
          >
            <div className="flex flex-col items-start gap-5 max-w-[546px]">
              <BadgeSecondary>Pricing Plan</BadgeSecondary>

              <h2 className="text-white">Affordable Packages to Fit Your Needs</h2>
            </div>

            <div className="lg:text-right text-start">
              <p className="mb-3 lg:mb-6 text-white">
                We offer flexible pricing plans designed<br />
                to suit businesses of all sizes.
              </p>

              <div
                className="grid grid-cols-2 bg-gray-800/50 backdrop-blur p-1.5 rounded-[100px]"
              >
                <button
                  id="monthlyBtn"
                  className="px-4 py-2 rounded-[100px] text-white transition-all"
                >
                  Monthly
                </button>
                <button
                  id="quarterlyBtn"
                  className="bg-blue-600 px-4 py-2 rounded-[100px] text-white"
                >
                  Quarterly
                </button>
              </div>

              <p id="saveText" className="mt-2 text-white text-xs">
                No hidden charge (Save up to 15%)
              </p>
            </div>
          </div>

          <div className="gap-6 grid md:grid-cols-3">
            <div
              className="group relative hover:shadow-2xl border border-[#FFFFFF1A] rounded-[20px] hover:scale-105 active:scale-95 transition-all hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <div className="p-4">
                <div className="bg-[#ffffff11] mb-8 p-4 rounded-[20px]">
                  <div className="mb-5.5">
                    <button
                      className="bg-gray-800/50 backdrop-blur mb-4 px-3 py-2 rounded-[100px] font-medium text-sm"
                    >
                      Basic
                    </button>
                    <div className="flex items-baseline mb-5">
                      <span id="basicPrice" className="font-bold text-4xl"
                        >$1000</span>
                      <span className="ml-1 text-gray-400">/month</span>
                    </div>
                    <p className="mb-8 text-gray-400 text-sm">
                      For growing teams with consistent design needs
                    </p>
                  </div>

                  <button
                    className="bg-gray-800/50 hover:bg-gray-800 backdrop-blur px-8 py-3.5 rounded-[100px] w-full font-semibold text-gray-300 hover:text-[#0939d6] text-lg duration-200 b-none"
                  >
                    Book a Free Call
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >40 hours of dedicated design support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Full-Stack Delivery Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >All design services included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >Daily communication Slack + Loom</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >1 active request per team member</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">2 meetings per month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Same-day response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Unlimited requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >Weekly updates and monthly reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Pro Plan (Most Popular) --> */}

            <div
              className="group relative bg-[#FFFFFF1A] hover:shadow-2xl border border-[#FFFFFF1A] rounded-[20px] hover:scale-105 active:scale-95 transition-all hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <div className="p-4">
                <div className="bg-[#ffffff1f] mb-8 p-4 rounded-[20px]">
                  <div className="mb-5.5">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        className="bg-gray-800/50 backdrop-blur px-3 py-2 rounded-[100px] font-medium text-sm"
                      >
                        Pro
                      </button>
                      <button
                        className="bg-[#063DFC] backdrop-blur px-3 py-2 rounded-[100px] font-medium text-sm"
                      >
                        Most Popular
                      </button>
                    </div>
                    <div className="flex items-baseline mb-5">
                      <span id="proPrice" className="font-bold text-4xl"
                        >$1200</span>
                      <span className="ml-1 text-gray-400">/month</span>
                    </div>
                    <p className="mb-8 text-gray-400 text-sm">
                      For growing teams with consistent design needs
                    </p>
                  </div>

                  <button className="mt-8 lg:mt-0 px-8 py-3 w-full get-started-btn">
                    Book A Free Call
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >40 hours of dedicated design support</span
                    >
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Full-Stack Delivery Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >All design services included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >Daily communication Slack + Loom</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >1 active request per team member</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">2 meetings per month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Same-day response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Unlimited requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >Weekly updates and monthly reports</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group relative hover:shadow-2xl border border-[#FFFFFF1A] rounded-[20px] hover:scale-105 active:scale-95 transition-all hover:-translate-y-2 duration-300 cursor-pointer"
            >
              <div className="p-4">
                <div className="bg-[#ffffff11] mb-8 p-4 rounded-[20px]">
                  <div className="mb-5.5">
                    <button
                      className="bg-gray-800/50 backdrop-blur mb-4 px-3 py-2 rounded-[100px] font-medium text-sm"
                    >
                      Premium
                    </button>
                    <div className="flex items-baseline mb-5">
                      <span id="premiumPrice" className="font-bold text-4xl"
                        >$3500</span>
                      <span className="ml-1 text-gray-400">/month</span>
                    </div>
                    <p className="mb-8 text-gray-400 text-sm">
                      For growing teams with consistent design needs
                    </p>
                  </div>

                  <button
                    className="bg-gray-800/50 hover:bg-gray-800 backdrop-blur px-8 py-3.5 rounded-[100px] w-full font-semibold text-gray-300 hover:text-[#0939d6] text-lg duration-200"
                  >
                    Book a Free Call
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >40 hours of dedicated design support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Full-Stack Delivery Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >All design services included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >Daily communication Slack + Loom</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >1 active request per team member</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">2 meetings per month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Same-day response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]">Unlimited requests</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-[#3273FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-[#FFFFFF]"
                      >Weekly updates and monthly reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing