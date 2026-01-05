"use client";
import Image from "next/image";

const logos = [
  { src: "/trusted-by-logo/dst-logo.png", alt: "DST" },
  { src: "/trusted-by-logo/meic-logo - Copy.jpg", alt: "MEIC" },
  { src: "/trusted-by-logo/awadh-logo.jpg", alt: "AWADH" },
  { src: "/trusted-by-logo/aicte-logo.jpg", alt: "AICTE" },
  { src: "/trusted-by-logo/nasscom-logo.png", alt: "NASSCOM" },
];

export default function TrustedBySection() {
  return (
    <section className="py-12 bg-[#f7f7f7]">
      <div className="container-global lg:-mt-[12vh] sticky z-[2] px-4">
        <div className="max-w-6xl mx-auto bg-white backdrop-blur-2xl rounded-3xl border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2">
            
            {/* Title Badge */}
            <div className="flex items-center gap-3 px-8 py-3 bg-gray-50 rounded-full border border-gray-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee9e26] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee9e26]"></span>
              </span>
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 whitespace-nowrap">
                Trusted By
              </h2>
            </div>

            {/* Logo Row */}
            <div className="flex flex-1 items-center justify-around w-full px-4 md:px-8 overflow-hidden gap-4">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="relative h-8 md:h-12 w-24 md:w-32 transition-all duration-500 hover:scale-110"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}