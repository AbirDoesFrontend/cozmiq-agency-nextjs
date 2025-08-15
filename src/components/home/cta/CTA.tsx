import BadgeSecondary from "@/components/global/BadgeSecondary";
import Image from "next/image";

import CtaPersonImage from "../../../../public/img/cta-person.png";
import LeftTagImage from "../../../../public/img/left-tag.png";
import RightTagImage from "../../../../public/img/right-tag.png";

const CTA = () => {
  return (
    <section className="bg-white dark:bg-black py-16 lg:py-[140px] text-center">
      <div className="relative py-14 md:py-16 lg:py-[100px] rounded-[20px] cta wrapper">
        <div className="hidden md:block">
          <Image
            src={LeftTagImage}
            alt={"left decorative image"}
            className="float-animation float-delay hero-floating-tag-left"
            width={1000}
            height={1000}
          />
          <Image
            src={RightTagImage}
            alt={"Decorative Image"}
            className="hero-floating-tag-right float-animation float-delay"
            width={1000}
            height={1000}
          />
        </div>

        <div className="mb-4">
          <BadgeSecondary>Get In Touch</BadgeSecondary>
        </div>

        <h2 className="my-5 text-white">Ready to Elevate Your Brand?</h2>

        <p className="mx-auto max-w-[690px] text-white">
          Let&apos;s start creating something amazing together. Contact Cozmiq
          Agency today to get a custom proposal and discuss how we can help you
          grow online.
        </p>

        <div className="flex justify-start items-start gap-2 mt-[48px] border border-[#FFFFFF1A] rounded-[100px] get-in-touch-btn">
          <Image
            src={CtaPersonImage}
            alt="avatar"
            className="ml-[-10px] w-11 h-11"
            width={1000}
            height={1000}
          />
          <button className="flex flex-col justify-start items-start text-white">
            <p>Schedule A Free Call</p>
            <div className="flex items-center gap-2">
              <div className="bg-[#1DD35A] rounded-full w-2 h-2"></div>
              <span className="text-[12px] text-white">Open and ready</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
