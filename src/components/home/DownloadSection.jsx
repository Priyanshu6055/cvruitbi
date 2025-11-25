"use client";

import Button from "@/components/ui/Button"; 

export default function DownloadSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#eef9ff] to-white text-center relative overflow-hidden">

      {/* Soft Static Glows */}
      <div className="absolute top-[-40px] left-[-40px] w-56 h-56 bg-[#00d2ef]/60 rounded-full blur-[80px] mix-blend-screen" />
      <div className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-cyan-500/50 rounded-full blur-[100px] mix-blend-screen" />

      <div className="container-global mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Notice Inviting Quotation for Supply & Installation of D&D Lab
          Equipment at  <span className="text-[#ee9e26]">CVRU i-TBI Foundation</span>, Bilaspur
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-600 text-lg">
          Click below to download the official NIQ PDF.
        </p>

        {/* Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://cvruitbi.com/docs/CVRU%20I-TBI%20NIQ%20for%20Lab%20(D&D)%20Equipment%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="hover:scale-[1.03] transition-all duration-300">
              Download NIQ PDF
            </Button>
          </a>
        </div>
      </div>

    </section>
  );
}
