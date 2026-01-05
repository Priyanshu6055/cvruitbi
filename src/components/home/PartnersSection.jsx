"use client";

import Image from "next/image";

const logos = [
  "/partners-logo/corporate-partners/nasscom.jpg",
  "/partners-logo/corporate-partners/wadhwani.webp",
  "/partners-logo/corporate-partners/sahabhagi.jpg",
  "/partners-logo/corporate-partners/setmycart.png",
  "/partners-logo/corporate-partners/headstart.jpg",
  "/partners-logo/investment-partners/realtime.png",
  "/partners-logo/investment-partners/fluid.png",
  "/partners-logo/investment-partners/miaana.jpg",
];

export default function PartnersSection() {
  return (
    <section className="py-14 bg-gray-50/80 overflow-hidden">
        
      <div className="container-global mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Our <span className="text-[#ee9e26]">Partners</span>
          </h2>
          <div className="h-1 w-20 bg-[#ee9e26] mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-20" />

          <div className="flex w-max animate-marquee gap-8 py-4">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center min-w-[200px] h-32 bg-white rounded-xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#ee9e26]/30 hover:-translate-y-1"
              >
                <div className="relative w-32 h-16">
                  <Image
                    src={logo}
                    alt="Partner Logo"
                    fill
                    className="object-contain transition duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
