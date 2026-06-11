"use client";
import HeroText from "@/components/hero/heroText";
import Hero2 from "@/components/hero2/hero2";
import CarouselPage from "@/components/layout/3DCarousel/carousel";
import FeaturedWorkMarquee from "@/components/marquee/marquee1";
import Reveal from "@/components/marquee/reveal";
import Projects from "@/components/projects/projects";
import FeaturedProjects from "@/components/projects/faturedProjects";




export default function HomePage() {
  return (
    <main className="min-h-screen bg-[background] scroll-smooth">
      <HeroText />
      <Hero2 />
      <FeaturedWorkMarquee text="featured works©" />
      <Projects />
      <FeaturedProjects />

      <Reveal>
        <FeaturedWorkMarquee text="creative AI labs©" />
      </Reveal>

      <CarouselPage />
    </main>
  );
}


