"use client";

import BadgeSecondary from "@/components/global/BadgeSecondary";
import {useState} from "react";
import {BiDownArrowAlt} from "react-icons/bi";

const faqData = [{
    question: "How does real-time market validation work",
    answer: "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
}, {
    question: "Who can use AgileSourcing",
    answer: "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
}, {
    question: "What are the subscription options",
    answer: "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
}, {
    question: "How does AgileSourcing help with sustainability",
    answer: "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
}, {
    question: "Can I use AgileSourcing for niche products like leather goods",
    answer: "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
}, {
    question: "What kind of support is available for users",
    answer: "AgileSourcing is a generative AI-driven platform for agile fashion design, validation, and sourcing that connects designers with sustainable suppliers",
},];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (<section className="bg-white dark:bg-[#01010A] py-16 lg:py-[140px]">
            <div className="mx-auto px-6 lg:px-0 max-w-[1096px]">
                <div className="mb-14 text-center">
                    <div className="mb-8">
                        <BadgeSecondary text={"FAQs"}/>
                    </div>
                    <h2 className="text-black dark:text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqData.map((faq, index) => (<div
                            key={index}
                            className={`shadow-sm border rounded-[20px] overflow-hidden transition-colors duration-500 faq-item
                ${activeIndex === index ? "bg-[#0939D6] text-white border-[#0939D6]" : "bg-transparent border-[#D2D2D5] dark:border-[#FFFFFF1A] hover:bg-[#0939D6] hover:text-white"}`}
                        >
                            <button
                                className="flex justify-between items-center p-6 w-full text-left cursor-pointer"
                                onClick={() => toggleFaq(index)}
                            >
                                <h4 className="font-semibold faq-text">{faq.question}</h4>
                                <BiDownArrowAlt
                                    className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? " text-white" : " text-[#000000] dark:text-white"}`}
                                />
                            </button>
                            <div
                                className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"}`}
                            >
                                <p className="text-[18px] text-white">{faq.answer}</p>
                            </div>
                        </div>))}
                </div>
            </div>
        </section>);
};

export default Faq;
