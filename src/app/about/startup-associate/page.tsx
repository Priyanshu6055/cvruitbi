"use client";

import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Button from "@/components/ui/Button";

const startups = [
  {
    name: "Aarin Aroma",
    company: "AARIN AROMABLEND LLP",
    website: "https://aarinaroma.com/",
    firm: "Company",
    logo: "/asoociated-startup-logo/aroma.jpeg",
  },
  {
    name: "Virtuon",
    company: "VIRTUON TECHNOLOGIES PRIVATE LIMITED",
    website: "https://virtuon.in/",
    firm: "Company",
    logo: "/asoociated-startup-logo/virtuon.jpeg",
  },
  {
    name: "Sanora Wear",
    company: "AKSH-NATH TECHNOLOGIES PRIVATE LIMITED",
    website:
      "https://in.linkedin.com/company/nath-technologies-pvt-ltd?trk=public_profile_experience-item_profile-section-card_image-click",
    firm: "Company",
    logo: "/asoociated-startup-logo/sanora.jpeg",
  },
  {
    name: "Lirak AI",
    company: "CHALBO INDIA PRIVATE LIMITED",
    website: "https://www.linkedin.com/company/lairak-ai-telematic",
    firm: "Company",
    logo: "/asoociated-startup-logo/lirak.jpeg",
  },
  {
    name: "Vedartva",
    company: "Ganjir Healthcare Private limited",
    website: "https://vedartva.com/",
    firm: "Company",
    logo: "/asoociated-startup-logo/vedartva.jpeg",
  },
  {
    name: "Heiland",
    company: "Oceanic Herbs",
    website: "https://in.linkedin.com/in/heiland-cares-337470291",
    firm: "LLP",
    logo: "/asoociated-startup-logo/heiland.jpeg",
  },
  {
    name: "Eco Biofiber",
    company: "Saanvi Eco Biofiber Private limited",
    website: null,
    firm: "Company",
    logo: "/asoociated-startup-logo/ecofiber.jpeg",
  },
  {
    name: "Azeedo",
    company: "Azeedo Private Limited",
    website: "https://www.azeedoagritech.com/",
    firm: "Company",
    logo: "/asoociated-startup-logo/azeedo.jpeg",
  },
  {
    name: "AutogradeX",
    company: "AUTOGRADEX ASSESSMENTS PRIVATE LIMITED",
    website: "https://autogradex.com/",
    firm: "Company",
    logo: "/asoociated-startup-logo/autox.jpeg",
  },
  {
    name: "Farm Fresco",
    company: "Yummy Yum Food Products Private Limited",
    website: "https://farmfres.co/",
    firm: "Company",
    logo: "/asoociated-startup-logo/farm.jpeg",
  },
  {
    name: "Zenithzap",
    company: "Zenithzap Beverages Private Limited",
    website: "https://www.linkedin.com/company/zenithzap",
    firm: "Company",
    logo: "/asoociated-startup-logo/zenith.jpeg",
  },
  {
    name: "Bald is Bold",
    company: "Meta Madtech",
    website: "https://baldisbold.com/",
    firm: "Proprietorship",
    logo: "/asoociated-startup-logo/bald.jpeg",
  },
  {
    name: "Amrit Manthan",
    company: "Amrit Manthan Naturals Private Limited",
    website: "https://amritmanthan.in/",
    firm: "Company",
    logo: "/asoociated-startup-logo/amrit.jpeg",
  },
  {
    name: "Vandhan",
    company: "Saal Mahua Ventures Pvt Ltd",
    website: "https://www.saalmahua.com/",
    firm: "Company",
    logo: "/asoociated-startup-logo/vandhan.jpeg",
  },
  {
    name: "Grainscope",
    company: "Grainkart Private Limited",
    website: "https://www.grainscope.ai/",
    firm: "Company",
    logo: "/asoociated-startup-logo/grain.jpeg",
  },
];

export default function StartupAssociatePage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = useMemo(() => {
    return startups.filter(
      (s) =>
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.company.toLowerCase().includes(query.toLowerCase()) ||
        s.firm.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const visibleStartups = filtered.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  const handleShowLess = () => {
    setVisibleCount(12);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  return (
    <>
      <BannerWrapper
        animation={animationData}
        heading="Startup Associate"
        subtitle="Meet the passionate innovators driving our mission forward."
      />

      <section className="relative bg-gradient-to-b from-[#f8fdff] to-white text-[#0b1220] py-24 overflow-hidden">
        <div className="container-global px-6 md:px-12 lg:px-20">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#0b1220]">
                Startup <span className="text-[#00d2ef]">Associated</span>
              </h2>
              <p className="text-gray-600 mt-3 text-base md:text-lg max-w-lg">
                Explore startups incubated and supported by our innovation
                ecosystem.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5 w-full md:w-[320px] shadow-sm hover:shadow-md transition-all duration-300">
              <Search size={18} className="text-[#00d2ef]" />
              <input
                type="text"
                placeholder="Search startups or company..."
                className="w-full bg-transparent outline-none text-sm md:text-base text-gray-700 placeholder:text-gray-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {/* COUNTER */}
          <div className="text-sm text-gray-500 mb-8">
            Showing{" "}
            <span className="font-semibold text-[#00b5d6]">
              {visibleStartups.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-[#00b5d6]">
              {filtered.length}
            </span>{" "}
            startups
          </div>

          {/* GRID */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleStartups.map((startup) => (
              <div
                key={startup.name}
                className="startup-card bg-white border border-[#eaf5f7] rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#00d2ef30] hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Logo */}
                <div className="relative w-40 h-28 rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                  {startup.logo ? (
                    <Image
                      src={startup.logo}
                      alt={startup.name}
                      width={160}
                      height={100}
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-2xl font-semibold text-[#00b5d6]">
                      {startup.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-[#0b1220] mb-1">
                  {startup.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{startup.company}</p>
                <p className="text-xs font-medium text-[#00b5d6] bg-[#e6fbff] px-3 py-1 rounded-full inline-block mb-3">
                  {startup.firm}
                </p>

                {/* Button */}
                {startup.website ? (
                  <Button
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium"
                  >
                    Visit Website
                  </Button>
                ) : (
                  <span className="text-xs text-gray-500 bg-[#f1fafe] px-4 py-1.5 rounded-lg border border-dashed border-[#00b5d640]">
                    Not Available
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-14 gap-4">
            {visibleCount < filtered.length && (
              <Button
                onClick={handleLoadMore}
                className=""
              >
                Load More
              </Button>
            )}

            {visibleCount > 12 && (
              <Button
                onClick={handleShowLess}
                className=""
              >
                Show Less
              </Button>
            )}
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#00d2ef]/10 blur-3xl rounded-full pointer-events-none" />
      </section>
    </>
  );
}
