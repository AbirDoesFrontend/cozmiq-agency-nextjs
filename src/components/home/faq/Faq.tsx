"use client";
import BadgeSecondary from "@/components/global/BadgeSecondary";
import { MoveDown, MoveRight } from "lucide-react";
import React, { useState } from "react";

const faqData = [
  {
    question: "How does real-time market validation work",
    answer:
      "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
  },
  {
    question: "Who can use AgileSourcing",
    answer:
      "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
  },
  {
    question: "What are the subscription options",
    answer:
      "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
  },
  {
    question: "How does AgileSourcing help with sustainability",
    answer:
      "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
  },
  {
    question: "Can I use AgileSourcing for niche products like leather goods",
    answer:
      "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
  },
  {
    question: "What kind of support is available for users",
    answer:
      "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-black py-16 lg:py-[140px] dark:pt-0">
      <div className="mx-auto px-6 lg:px-0 max-w-[1096px]">
        <div className="mb-14 text-center">
          <div className="mb-4">
            <BadgeSecondary>Testimonials</BadgeSecondary>
          </div>
          <h2 className="">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF1A] hover:bg-[#0939D6] shadow-sm border border-[#D2D2D5] dark:border-[#FFFFFF1A] rounded-[20px] overflow-hidden transition-colors duration-400 faq-item"
            >
              <button
                className="flex justify-between items-center px-6 py-4 w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-[18px] md:text-[20px] lg:text-[24px] faq-text">
                  {faq.question}
                </span>
                <MoveRight className="w-5 h-5 text-[#000000] dark:text-white rotate-90 transition-transform duration-300 fa-solid fa-arrow-down transform" />
              </button>
              <div
                className={`px-6 py-4 faq-content transition-all duration-300 ${
                  activeIndex === index ? "block" : "hidden"
                } bg-[#0939D6]`}
              >
                <p className="text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
