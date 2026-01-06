"use client";
import { Code2, BrainCircuit, Database, Cloud } from "lucide-react";

const programs = [
  { title: "Web Development", icon: <Code2 size={24} />, desc: "Full-stack mastery with modern frameworks." },
  { title: "AI & Machine Learning", icon: <BrainCircuit size={24} />, desc: "Build intelligent systems and neural networks." },
  { title: "Data Science", icon: <Database size={24} />, desc: "Transform raw data into actionable insights." },
  { title: "Cloud & DevOps", icon: <Cloud size={24} />, desc: "Scale infrastructure with modern automation." },
];

export default function ProgramsSection() {
  return (
    <section className="container-global py-16 bg-gray-50/30">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
          Our <span className="text-[#ee9e26]">Programs</span>
        </h2>
        <div className="h-1 w-10 bg-[#ee9e26] mx-auto mt-3 rounded-full" />
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base leading-relaxed">
          Industry-leading courses designed to bridge the gap between learning and employment.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((prog, index) => (
          <div key={index} className="group perspective w-full h-[260px] cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
              
              {/* Front Face */}
              <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center backface-hidden shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#ee9e26]/10 text-[#ee9e26] flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                  {prog.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{prog.title}</h3>
                <div className="flex items-center gap-2 text-[10px] font-bold text-[#ee9e26] uppercase tracking-widest">
                  <span>Explore</span>
                  <div className="w-3 h-[1px] bg-[#ee9e26]" />
                </div>
                <span className="absolute top-3 right-5 text-4xl font-black text-gray-50 -z-10 group-hover:text-[#ee9e26]/5 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 bg-[#ee9e26] rounded-2xl p-6 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] rounded-2xl" />
                <h3 className="text-white text-lg font-bold mb-2 relative z-10">{prog.title}</h3>
                <p className="text-orange-50 text-xs leading-relaxed mb-5 relative z-10">
                  {prog.desc} Hands-on projects and expert guidance.
                </p>
                <button className="relative z-10 bg-white text-[#ee9e26] px-5 py-2 rounded-full text-xs font-bold hover:bg-orange-50 transition-colors">
                  View Program
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}