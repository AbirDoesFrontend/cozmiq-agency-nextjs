import About from "@/components/home/about/About";
import Hero from "@/components/home/hero/Hero";
import Project from "@/components/home/project/Project";
import ServicesSection from "@/components/home/services/ServicesSection";
import StatsSection from "@/components/home/stats/StatsSection";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <StatsSection />
      <ServicesSection />
    </>
  );
}
