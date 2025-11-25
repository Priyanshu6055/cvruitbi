"use client";

import { useState, useMemo } from "react";
import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";
import { AiOutlineClose, AiFillLinkedin, AiOutlineUser } from "react-icons/ai";
import Button from "@/components/ui/Button";

/* ---------------- Mentor Data ---------------- */
const mentors = [
    {
        name: "Sachin Kale",
        profile: "Agripreneur. Started agriculture company after 10+ industry experience.",
        media: "https://thebetterindia.com/94285/sachin-kale-innovative-agrilife-solutions-engineer-turned-farmer/",
        city: "Bilaspur",
        sector: "Agriculture/AgriTech",
        expertise: "Agriculture, Innovative Farming",
        linkedin: "https://www.linkedin.com/in/dr-sachin-ashok-kale-80721121/"
    },
    {
        name: "Satendrasingh Lilhare",
        profile: "Founder of Bastar se Bazaar Tak; manufacturing, supply, and global export of natural and organic agricultural products. Won many awards at National & International forums for promoting rural economy.",
        extraLink: "http://www.bastarsebazaartak.in/",
        city: "Bastar",
        sector: "Rural E-Commerce",
        expertise: "Business Development",
        linkedin: "https://www.linkedin.com/in/satendrasingh-lilhare-8995b4a6"
    },
    {
        name: "Abhijit Tripathy",
        profile: "Founder & CEO of Presear Softwares. Senior Business Development Executive at Prodigal AI (Australia). Engineer, author, researcher and mentor in Kaggle. Several awards including IAF Most Promising Startup Award 2022.",
        city: "Bilaspur",
        sector: "IT/ITES",
        expertise: "IT/ITES/AI",
        linkedin: "https://www.linkedin.com/in/abhijit-tripathy/"
    },
    {
        name: "Dr. Domendra Singh Ganjir",
        profile: "CoFounder of Businessgarh",
        city: "Raipur",
        sector: "D2C",
        expertise: "D2C",
        linkedin: "https://www.linkedin.com/in/dr-domendra-singh-ganjir-9760a929/"
    },
    {
        name: "Harsh Vardhan Agrawal",
        profile: "Founder & CEO PrintMine.in and CoFounder of Businessgarh",
        city: "Raipur",
        sector: "D2C",
        expertise: "D2C",
        linkedin: "https://www.linkedin.com/in/harshvagrawal"
    },
    {
        name: "Aashtha Amanat",
        profile: "",
        city: "Raipur",
        sector: "D2C",
        expertise: "Brand Building & PR",
        linkedin: "https://www.linkedin.com/in/aastha-amanat/"
    },
    {
        name: "Saurabh Jain",
        profile: "Founder, Fun2Do Labs (EdTech Startup), Ex-Vice President @Paytm, Startup Guru",
        city: "Delhi",
        sector: "EdTech",
        expertise: "BMC, Lean Canvas",
        linkedin: "https://www.linkedin.com/in/saurabhskj/"
    },
    {
        name: "Gautam Jha",
        profile: "Start-Up Ecosystem Events / Live Pitching / Fund Raising / Angel Investment / Consultancy",
        city: "Noida",
        sector: "Angel Investment",
        expertise: "Fund Raising",
        linkedin: "https://www.linkedin.com/in/gautaam-jhha/"
    },
    {
        name: "Lokesh Patade",
        profile: "Founder, Meadow Agrotech",
        city: "Bilaspur",
        sector: "Agritech",
        expertise: "Agriculture, Innovative Farming",
        linkedin: ""
    },
    {
        name: "Anshu Agrawal",
        profile: "",
        city: "Korba",
        sector: "SaaS",
        expertise: "IT/ITES/AI",
        linkedin: "https://www.linkedin.com/in/anshuevdt"
    },
    {
        name: "Dr. Rupal Farista",
        profile: "Personal site / profile",
        extraLink: "https://aminfarista.com/amin/index.php",
        city: "Rajnandgaon/Raipur",
        sector: "",
        expertise: "Sustainable Fabric",
        linkedin: ""
    }
];
/* ---------------- Utilities ---------------- */
const initials = (name: string) =>
    name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

/* ---------------- Page Component ---------------- */
export default function MentorPage() {
    const [search, setSearch] = useState("");
    const [sector, setSector] = useState("");
    const [selected, setSelected] = useState<any>(null);

    const filtered = useMemo(() => {
        const q = search.toLowerCase();

        return mentors.filter((m) => {
            const matchSearch =
                m.name.toLowerCase().includes(q) ||
                (m.city || "").toLowerCase().includes(q) ||
                (m.sector || "").toLowerCase().includes(q) ||
                (m.expertise || "").toLowerCase().includes(q);

            const matchSector = !sector || m.sector === sector;

            return matchSearch && matchSector;
        });
    }, [search, sector]);

    return (
        <>
            <BannerWrapper
                animation={animationData}
                heading="Mentors"
                subtitle="Meet the experts guiding founders toward innovation and success."
            />

            {/* MAIN SECTION */}
            <section className="relative bg-gradient-to-b from-[#f8fdff] to-white py-24 overflow-hidden">

                {/* 🔵 BLUISH BACKGROUND GLOW (same as startups page) */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#00d2ef]/10 blur-[120px] rounded-full pointer-events-none" />

                {/* Container */}
                <div className="container-global px-6 md:px-12 lg:px-20 relative z-10">

                    {/* Heading & Filters */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-14">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-semibold text-[#0b1220]">
                                Mentor <span className="text-[#00cce3]">Directory</span>
                            </h2>
                            <p className="text-gray-600 mt-3 text-base max-w-lg">
                                Explore mentors across diverse expertise and sectors.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 flex-wrap">
                            <input
                                placeholder="Search mentors..."
                                className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full px-5 py-2.5 w-[260px] text-gray-700 shadow-sm focus:ring-2 focus:ring-[#00cce3]/40 outline-none transition"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <select
                                className="bg-white/60 backdrop-blur-sm  border border-gray-200 rounded-full px-5 py-2.5 text-gray-700 shadow-sm focus:ring-2 focus:ring-[#00cce3]/40 outline-none transition"
                                value={sector}
                                onChange={(e) => setSector(e.target.value)}
                            >
                                <option value="">All Sectors</option>
                                <option value="Agriculture/AgriTech">Agriculture/AgriTech</option>
                                <option value="SaaS">SaaS</option>
                                <option value="Rural E-Commerce">Rural E-Commerce</option>
                                <option value="IT/ITES">IT/ITES</option>
                                <option value="D2C">D2C</option>
                                <option value="EdTech">EdTech</option>
                                <option value="Angel Investment">Angel Investment</option>
                                <option value="Agritech">Agritech</option>
                            </select>
                        </div>
                    </div>

                    {/* GRID */}
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((m, index) => (
                            <div
                                key={index}
                                className="bg-white/80 border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#00d2ef] to-[#0092a1] rounded-xl flex items-center justify-center text-white shadow">
                                        <AiOutlineUser size={26} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg text-[#0b1220]">
                                            {m.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">{m.city}</p>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {m.sector && (
                                        <span className="text-xs px-3 py-1 rounded-full bg-[#e6fbff] text-[#00b5d6] border border-[#00cce33a]">
                                            {m.sector}
                                        </span>
                                    )}
                                    {m.expertise && (
                                        <span className="text-xs px-3 py-1 rounded-full bg-[#fff4e5] text-[#ee9e26] border border-[#ee9e2633]">
                                            {m.expertise}
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-gray-600 mt-4 line-clamp-3 min-h-[48px]">
                                    {m.profile || "—"}
                                </p>

                                <div className="flex gap-3 mt-6">
                                    <Button
                                        className="text-sm px-4 py-2 border text-[#00b5d6] hover:text-white"
                                        onClick={() => setSelected(m)}
                                    >
                                        Details
                                    </Button>

                                    {m.linkedin && (
                                        <a
                                            href={m.linkedin}
                                            target="_blank"
                                            className="px-4 py-2 border border-[#ee9e26] text-[#ee9e26] rounded-lg text-sm flex items-center gap-1 hover:bg-[#ee9e26] hover:text-white transition"
                                        >
                                            <AiFillLinkedin size={18} />
                                            LinkedIn
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-12">
                        Tip: click “Details” to view complete profile
                    </p>

                </div>

                {/* MODAL */}
                {selected && (
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-6">
                        <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 border border-gray-200 max-h-[85vh] overflow-y-auto">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold">{selected.name}</h3>
                                    <p className="text-gray-500 text-sm">
                                        {selected.city} • {selected.sector}
                                    </p>
                                </div>

                                <button
                                    onClick={() => setSelected(null)}
                                    className="p-2 border rounded-lg hover:bg-gray-100 transition"
                                >
                                    <AiOutlineClose size={18} />
                                </button>
                            </div>

                            <p className="mt-4 text-gray-700">{selected.profile}</p>

                            {selected.expertise && (
                                <p className="mt-3 text-sm">
                                    <strong>Expertise:</strong> {selected.expertise}
                                </p>
                            )}

                            {selected.media && (
                                <p className="mt-3 text-sm">
                                    <strong>Media:</strong>{" "}
                                    <a href={selected.media} target="_blank" className="text-[#ee9e26]">
                                        {selected.media}
                                    </a>
                                </p>
                            )}

                            {selected.extraLink && (
                                <p className="mt-3 text-sm">
                                    <strong>Website:</strong>{" "}
                                    <a href={selected.extraLink} target="_blank" className="text-[#ee9e26]">
                                        {selected.extraLink}
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                )}

            </section>
        </>
    );
}
