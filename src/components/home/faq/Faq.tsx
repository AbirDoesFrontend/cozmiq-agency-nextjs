import BadgeSecondary from "@/components/global/BadgeSecondary";
import React from "react";

const Faq = () => {
  return (
    <section className="bg-white dark:bg-black py-24 md:py-28 lg:py-[140px]">
      <div className="mx-auto px-6 lg:px-0 max-w-[1096px]">
        <div className="mb-14 text-center">
          <div className="mb-4">
            <BadgeSecondary>Testimonials</BadgeSecondary>
          </div>
          <h2 className="">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          <div className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item">
            <button className="flex justify-between items-center px-6 py-4 w-full text-left">
              <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                How does real-time market validation work
              </span>

              <i className="w-5 h-5 transition-transform duration-300 fa-solid fa-arrow-down transform faq-arrow"></i>
            </button>
            <div className="hidden bg-[#0939D6] px-6 py-4 faq-content">
              <p className="text-white">
                AgileSourcing is a generative AI-driven platform for agile
                fashion design, validation, and sourcing that connects designers
                with sustainable suppliers
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item">
            <button className="flex justify-between items-center px-6 py-4 w-full text-left">
              <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                Who can use AgileSourcing
              </span>

              <i className="w-5 h-5 transition-transform fa-solid fa-arrow-down transform faq-arrow"></i>
            </button>
            <div className="hidden bg-[#0939D6] px-6 py-4 faq-content">
              <p className="text-white">
                AgileSourcing is a generative AI-driven platform for agile
                fashion design, validation, and sourcing that connects designers
                with sustainable suppliers
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item">
            <button className="flex justify-between items-center px-6 py-4 w-full text-left">
              <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                What are the subscription options
              </span>

              <i className="w-5 h-5 transition-transform fa-solid fa-arrow-down transform faq-arrow"></i>
            </button>
            <div className="hidden bg-[#0939D6] px-6 py-4 faq-content">
              <p className="text-white">
                AgileSourcing is a generative AI-driven platform for agile
                fashion design, validation, and sourcing that connects designers
                with sustainable suppliers
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item">
            <button className="flex justify-between items-center px-6 py-4 w-full text-left">
              <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                How does AgileSourcing help with sustainability
              </span>

              <i className="w-5 h-5 transition-transform fa-solid fa-arrow-down transform faq-arrow"></i>
            </button>
            <div className="hidden bg-[#0939D6] px-6 py-4 faq-content">
              <p className="text-white">
                AgileSourcing is a generative AI-driven platform for agile
                fashion design, validation, and sourcing that connects designers
                with sustainable suppliers
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item">
            <button className="flex justify-between items-center px-6 py-4 w-full text-left">
              <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                Can I use AgileSourcing for niche products like leather goods
              </span>

              <i className="w-5 h-5 transition-transform fa-solid fa-arrow-down transform faq-arrow"></i>
            </button>
            <div className="hidden bg-[#0939D6] px-6 py-4 faq-content">
              <p className="text-white">
                AgileSourcing is a generative AI-driven platform for agile
                fashion design, validation, and sourcing that connects designers
                with sustainable suppliers
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item">
            <button className="flex justify-between items-center px-6 py-4 w-full text-left">
              <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                What kind of support is available for users
              </span>

              <i className="w-5 h-5 transition-transform fa-solid fa-arrow-down transform faq-arrow"></i>
            </button>
            <div className="hidden bg-[#0939D6] px-6 py-4 faq-content">
              <p className="text-white">
                AgileSourcing is a generative AI-driven platform for agile
                fashion design, validation, and sourcing that connects designers
                with sustainable suppliers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
