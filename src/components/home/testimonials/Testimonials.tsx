"use client";
import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

import ClientImageTwo from "../../../../public/img/client-image-two.png";
import ClientImageOne from "../../../../public/img/client-imge-one.png";
import SignImage from "../../../../public/img/sign.png";

const testimonialsData = [{
    image: ClientImageOne,
    name: "John D.",
    position: "CEO of Tech Innovators",
    feedback: "Working with this team was a game-changer for our business. They know our vision and delivered a website that truly represents our brand.",
}, {
    image: ClientImageTwo,
    name: "Laura M.",
    position: "Product Manager at Creative Co.",
    feedback: "The team provided exceptional service from start to finish. Their attention to detail and creativity brought our ideas to life in a way we never imagined.",
}, {
    image: ClientImageOne,
    name: "John D.",
    position: "CEO of Tech Innovators",
    feedback: "Working with this team was a game-changer for our business. They know our vision and delivered a website that truly represents our brand.",
}, {
    image: ClientImageTwo,
    name: "Laura M.",
    position: "Product Manager at Creative Co.",
    feedback: "The team provided exceptional service from start to finish. Their attention to detail and creativity brought our ideas to life in a way we never imagined.",
}, {
    image: ClientImageOne,
    name: "John D.",
    position: "CEO of Tech Innovators",
    feedback: "Working with this team was a game-changer for our business. They know our vision and delivered a website that truly represents our brand.",
}, {
    image: ClientImageTwo,
    name: "Laura M.",
    position: "Product Manager at Creative Co.",
    feedback: "The team provided exceptional service from start to finish. Their attention to detail and creativity brought our ideas to life in a way we never imagined.",
},];

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);
    const sliderRef = useRef(null);
    const totalSlides = testimonialsData.length;

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isDesktop) {
                setCurrentSlide((prev) => (prev + 1) % (totalSlides - 1));
            } else {
                setCurrentSlide((prev) => (prev + 1) % totalSlides);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isDesktop, totalSlides]);

    const getTransformValue = () => {
        if (isDesktop) {
            return `-${currentSlide * 50}%`;
        }
        return `-${currentSlide * 100}%`;
    };

    return (<section className="bg-white dark:bg-black py-16 lg:py-[140px] dark:pb-0">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 wrapper">
                <div className="flex lg:flex-row flex-col justify-between items-start lg:items-end lg:gap-[248px]">
                    <div className="lg:w-1/2">
                        <div className="mb-4">
                            <BadgeSecondary text={"Testimonials"} />
                        </div>
                        <h2 className="mb-6 text-black dark:text-white">
                            What Our Clients Say
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="foreground-color dark:dark-foreground-color">
                            Hear from our satisfied clients who&apos;ve experienced the impact
                            of our work.
                        </p>
                    </div>
                </div>

                <div className="relative mt-6 md:mt-12 lg:mt-[64px]">
                    <div className="overflow-hidden">
                        <div
                            ref={sliderRef}
                            id="testimonials-track"
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{transform: `translateX(${getTransformValue()})`}}
                        >
                            {testimonialsData.map((testimonial, index) => (<div
                                    key={index}
                                    className={`flex-shrink-0 px-3 ${isDesktop ? "w-1/2" : "w-full"}`}
                                >
                                    <div className="bg-[#F9F9F9] dark:bg-[#FFFFFF1A] p-8 rounded-[20px] h-full">
                                        <div
                                            className="flex sm:flex-row xl:flex-row flex-col lg:flex-col items-start gap-6">
                                            <div className="flex-shrink-0">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="rounded-xl h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex flex-col flex-1 items-start gap-4 lg:gap-6">
                                                <Image src={SignImage} width="42" height="28" alt=""/>
                                                <p className="dark:text-white foreground-color">
                                                    {testimonial.feedback}
                                                </p>
                                                <div className="flex flex-col items-start gap-2">
                                                    <h4 className="dark:text-white">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="dark:text-white text-sm">
                                                        {testimonial.position}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-16">
                        {Array.from({
                            length: isDesktop ? totalSlides - 1 : totalSlides,
                        }).map((_, index) => (<button
                                key={index}
                                className={`rounded-full w-2 h-2 transition-all duration-300 ${currentSlide === index ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>))}
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
                            />
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
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>);
};

export default Testimonials;
