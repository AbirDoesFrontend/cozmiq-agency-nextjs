import About from "@/components/home/about/About";
import Discovery from "@/components/home/discovery/Discovery";
import Hero from "@/components/home/hero/Hero";
import Project from "@/components/home/project/Project";
import ServicesSection from "@/components/home/services/ServicesSection";
import StatsSection from "@/components/home/stats/StatsSection";
import HowWeWork from "@/components/home/work/HowWeWork";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <StatsSection />
      <ServicesSection />
      <HowWeWork />
      <Discovery />
    </>
  );
}
