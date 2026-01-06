import HeroCarousel from "@/components/home/HeroCarousel";
import DownloadSection from "@/components/home/DownloadSection";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import VisionSection from "@/components/home/VisionSection";
import EventSection from "@/components/home/EventSection";
import BoxSection from "@/components/home/BoxSection";
import BlogSection from "@/components/home/BlogSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import ProgramSection from "@/components/home/ProgramsSection";

import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <TrustedBySection/>
      {/* <BoxSection/> */}
      {/* <DownloadSection /> */}
      <AboutPreview />
      <ProgramSection/>
      {/* <BlogSection/> */}
      <ServicesSection />
      <PartnersSection />
      {/* <VisionSection /> */}
      <EventSection />
    </>
  );
}
