import DownloadSection from "@/components/home/DownloadSection";
import VisionSection from "@/components/home/VisionSection";
import BoxSection from "@/components/home/BoxSection";
import BlogSection from "@/components/home/BlogSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import EventSection from "@/components/home/EventSection";
import TrustedBySection from "@/components/home/TrustedBySection";
import ProgramSection from "@/components/home/ProgramsSection";
import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustedBySection/>
      <AboutPreview />
      <ProgramSection/>
      <ServicesSection />
      <PartnersSection />
      <EventSection />
      
      {/* <DownloadSection /> */}
      {/* <VisionSection /> */}
      {/* <BlogSection/> */}
      {/* <BoxSection/> */}
    </>
  );
}
