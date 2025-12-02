"use client";

import BannerWrapper from "@/components/about/AboutBannerWrapper";
import CardWrapper from "@/components/ui/ThreeDWaveCardWrapper";
import { MdOutlineWork } from "react-icons/md";
import { FaChalkboardTeacher, FaUsers, FaNetworkWired, FaBalanceScale } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <>
      {/* ✅ Banner Section — Smaller & No animation */}
      <BannerWrapper
        heading="Our Services"
        subtitle="Empowering innovators through our core offerings."
      />

      {/* ========================= MAIN SECTION ========================= */}
      <section className="relative py-8 px-3 bg-white md:py-10">

        {/* === Heading Section (30% smaller) === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1220] mb-1">
            Our Services
          </h2>

          <p className="text-[#555] text-xs md:text-sm max-w-md mx-auto leading-relaxed">
            Discover how we help startups grow and innovate.
          </p>

          <div className="mx-auto mt-3 h-[2.5px] w-16 rounded-full bg-[#00d2ef] opacity-90" />
        </motion.div>

        {/* === Cards Grid — Reduced By 30% === */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="
            container-global grid 
            grid-cols-1 sm:grid-cols-2 md:grid-cols-3
            gap-4 md:gap-6 max-w-5xl mx-auto
          "
        >
          <CardWrapper
            heading="Dedicated Office Spaces"
            text="Workspaces that boost productivity and collaboration."
            icon={<MdOutlineWork size={28} color="#ee9e26" />}   // 30% smaller
          />

          <CardWrapper
            heading="Trainings & Workshops"
            text="Skill-building sessions on business, marketing & tech."
            icon={<FaChalkboardTeacher size={28} color="#00d2ef" />}
          />

          <CardWrapper
            heading="Mentoring"
            text="Guidance from successful entrepreneurs and experts."
            icon={<AiOutlineTeam size={28} color="#ee9e26" />}
          />

          <CardWrapper
            heading="Access to Network"
            text="Connect with investors, business leaders & innovators."
            icon={<FaNetworkWired size={28} color="#00d2ef" />}
          />

          <CardWrapper
            heading="HR / Intern Support"
            text="Helping startups hire interns and young talent."
            icon={<RiUserSettingsLine size={28} color="#ee9e26" />}
          />

          <CardWrapper
            heading="Events & Competitions"
            text="Pitch your ideas, gain visibility & attract investors."
            icon={<FaUsers size={28} color="#00d2ef" />}
          />

          <CardWrapper
            heading="Legal & Accounting Support"
            text="Support with legal, compliance & financial structuring."
            icon={<FaBalanceScale size={28} color="#ee9e26" />}
          />
        </motion.div>
      </section>
    </>
  );
}
