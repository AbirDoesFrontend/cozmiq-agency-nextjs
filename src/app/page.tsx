import About from "@/components/home/about/About";
import CTA from "@/components/home/cta/CTA";
import Discovery from "@/components/home/discovery/Discovery";
import Faq from "@/components/home/faq/Faq";
import Pricing from "@/components/home/pricing/Pricing";
import Project from "@/components/home/project/Project";
import ServicesSection from "@/components/home/services/ServicesSection";
import StatsSection from "@/components/home/stats/StatsSection";
import Testimonials from "@/components/home/testimonials/Testimonials";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import HowWeWork from "@/components/home/work/HowWeWork";
import HeroV2 from "@/components/home/hero/HeroV2";
import TemplatesSlider from "@/components/home/templates-slider/TemplatesSlider";

async function getImages() {
    return ["/img/images-v2/templates/template-one.avif", "/img/images-v2/templates/template-one.avif", "/img/images-v2/templates/template-one.avif", "/img/images-v2/templates/template-one.avif", "/img/images-v2/templates/template-one.avif",];
}


export default async function Home() {

    const templates = await getImages();

    return (<>
        <HeroV2/>
        <section className={"flex flex-col gap-3 mt-[-50px] bg-gradient-to-t from-black to-[#1722d9]"}>
            <TemplatesSlider images={templates} speed={45} direction={"rtl"}/>
            <TemplatesSlider images={templates} speed={45} direction={"ltr"}/>
        </section>
        <Project/>
        <StatsSection/>
        <ServicesSection/>
        <HowWeWork/>
        <Discovery/>
        <WhyChooseUs/>
        <Testimonials/>
        <Pricing/>
        <Faq/>
        <CTA/>
    </>);
}
