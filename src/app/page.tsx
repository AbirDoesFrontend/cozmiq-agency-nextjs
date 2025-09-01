import CTA from "@/components/home/cta/CTA";
import Faq from "@/components/home/faq/Faq";
import Project from "@/components/home/project/Project";
import ServicesSection from "@/components/home/services/ServicesSection";
import StatsSection from "@/components/home/stats/StatsSection";
import Testimonials from "@/components/home/testimonials/Testimonials";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import HeroV2 from "@/components/home/hero/HeroV2";
import TemplatesSlider from "@/components/home/templates-slider/TemplatesSlider";
import ImageSlider from "@/components/home/image-slider/ImageSlider";
import GSAPImageScroller from "@/components/home/image-slider/ImageSlider";

async function getFirstSliderImages() {
    return ["/img/images-v2/templates/template-one.avif", "/img/images-v2/templates/template-two.avif", "/img/images-v2/templates/template-three.avif"];
}

async function getSecondSliderImages() {
    return ["/img/images-v2/templates/template-one.avif", "/img/images-v2/templates/template-four.avif", "/img/images-v2/templates/template-five.avif"];
}


export default async function Home() {

    const templates = await getFirstSliderImages();
    const secondTemplates = await getSecondSliderImages();

    return (<>
        <HeroV2/>
        <section className={"flex flex-col gap-3 mt-[-50px] bg-gradient-to-t from-black to-[#1722d9]"}>
            <TemplatesSlider images={templates} speed={120} direction={"rtl"}/>
            <TemplatesSlider images={secondTemplates} speed={120} direction={"ltr"}/>
        </section>
        <ImageSlider />
        <Project/>
        <StatsSection/>
        <ServicesSection/>
        <WhyChooseUs/>
        <Testimonials/>
        <Faq/>
        <CTA/>
    </>);
}
