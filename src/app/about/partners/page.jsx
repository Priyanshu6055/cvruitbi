"use client";

import Image from "next/image";
import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";

const partnersData = {
    corporate: [
        { title: "Nasscom Foundation", logo: "/partners-logo/corporate-partners/nasscom.jpg" },
        { title: "Wadhwani Foundation", logo: "/partners-logo/corporate-partners/wadhwani.webp" },
        { title: "Sahabhagi Samaj Sevi Sanstha", logo: "/partners-logo/corporate-partners/sahabhagi.jpg" },
        { title: "SetMyCart", logo: "/partners-logo/corporate-partners/setmycart.png" },
        { title: "Headstart Chhattisagrh", logo: "/partners-logo/corporate-partners/headstart.jpg" },
    ],
    investment: [
        { title: "Real Time Angel Fund", logo: "/partners-logo/investment-partners/realtime.png" },
        { title: "Fluid Venture", logo: "/partners-logo/investment-partners/fluid.png" },
        { title: "Miaana Partners", logo: "/partners-logo/investment-partners/miaana.jpg" },
    ],
};

export default function PartnersPage() {
    return (
        <>
            <BannerWrapper
                animation={animationData}
                heading="Our Partners"
                subtitle="Meet the experts guiding founders toward innovation and success."
            />

            <section className="relative bg-[#f8f8f8] bg-gradient-to-b from-[#f8fdff] to-white text-[#0b1220] py-24 overflow-hidden">
                <div className="container-global px-6 md:px-12 lg:px-20">
                    <h1 className="text-5xl font-extrabold mb-16 text-[#0b1220]">
                        Our <span className="text-[#00d2ef]">Partners</span>
                    </h1>
                    <Section title="Corporate Partners" data={partnersData.corporate} />
                    <Section title="Investment Partners" data={partnersData.investment} />
                </div>

                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#00d2ef]/15 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-10 w-[300px] h-[200px] bg-[#00d2ef]/10 blur-2xl rounded-full pointer-events-none" />
            </section>
        </>
    );
}

function Section({ title, data }) {
    return (
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 tracking-tight text-[#0b1220]">
                <span className="border-l-8 border-[#ee9e26] pl-4">{title}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {data.map((item, i) => (
                    <div
                        key={i}
                        className="relative bg-white border border-[#eaf5f7] rounded-3xl py-16 p-8 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-600 group overflow-hidden"
                    >
                        {/* Accent Corner */}
                        <div className="absolute top-0 right-0 w-28 h-28 bg-[#00d2ef]/10 rounded-bl-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-600"></div>

                        {/* Logo */}
                        <div className="w-40 h-40 mb-6 relative mx-auto drop-shadow-sm">
                            <Image src={item.logo} alt={item.title} fill className="object-contain" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-center text-[#0b1220] group-hover:text-[#00b4cc] transition-colors duration-300">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
