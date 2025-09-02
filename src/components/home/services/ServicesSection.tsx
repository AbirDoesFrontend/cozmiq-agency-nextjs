import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";

import ArrowImage from "../../../../public/img/arrow.png";
import {SERVICES_ITEMS} from "@/constants/services";
import ServiceIcon from "@/components/home/services/ServiceIcon";

const ServicesSection = () => {
    return (<section className="bg-white dark:bg-[#01010A] service-sec">
            <div>
                <div className="mx-auto wrapper">
                    <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end mb-12 lg:mb-16">
                        <div className="mb-8 lg:mb-0">
                            <div className={"mb-8"}>
                                <BadgeSecondary text={"Services We Provide"}/>
                            </div>
                            <h2 className="my-5 text-[#07080B] dark:text-white">
                                Expert Services to Drive Success
                            </h2>
                            <p className="text-[#07080B] dark:text-white">
                                Transforming your digital presence with innovative web design
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="flex justify-start basis-2/5">
                                <button className="px-8 py-3 border border-[#FFFFFF1A] get-started-btn">
                                    More About Us
                                    <i className="fa-arrow-right fa-solid"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2">
                        {SERVICES_ITEMS.map((service, index) => (<div
                                key={index}
                                className="group relative bg-[#F9F9F9] hover:bg-[#0939D6] dark:bg-[#0f0f17] dark:bg-[url('/img/Blur.png')] dark:hover:bg-[#0939D6] bg-cover bg-bottom p-8 rounded-[16px] hover:text-white transition-all duration-300 cursor-pointer service-card"
                            >
                                <div className="flex justify-between items-start mb-8 md:mb-10 lg:mb-12">
                                    {/*<Image*/}
                                    {/*  src={service.whiteIcon}*/}
                                    {/*  alt={service.title}*/}
                                    {/*  className="w-[64px] h-[64px]"*/}
                                    {/*  width={1000}*/}
                                    {/*  height={1000}*/}
                                    {/*/>*/}
                                    <ServiceIcon title={service.title} icon={service.icon}
                                                 whiteIcon={service.whiteIcon}/>
                                    <div className="top-0 right-0 absolute bg-[#F9F9F9] p-[15px] card-icon-arrow">
                                        <Image src={ArrowImage} alt=""/>
                                    </div>
                                </div>
                                <h3 className="mb-4 text-[#07080B] group-hover:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-[#07080B] group-hover:text-white">
                                    {service.description}
                                </p>
                            </div>))}
                    </div>
                </div>
            </div>
        </section>);
};

export default ServicesSection;
