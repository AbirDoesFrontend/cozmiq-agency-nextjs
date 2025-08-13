import About from "@/components/home/about/About";
import Hero from "@/components/home/hero/Hero";
import Project from "@/components/home/project/Project";
import StatsSection from "@/components/home/stats/StatsSection";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <StatsSection />
    </>
  );
}
