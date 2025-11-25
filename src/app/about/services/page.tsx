"use client";

import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";
import CardWrapper from "@/components/ui/ThreeDWaveCardWrapper";
import { MdOutlineWork } from "react-icons/md";
import { FaChalkboardTeacher, FaUsers, FaNetworkWired, FaBalanceScale } from "react-icons/fa";
import { AiOutlineTeam } from "react-icons/ai";
import { RiUserSettingsLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
<>
      {/* ✅ Banner Section */}
      <BannerWrapper
        animation={animationData}
        heading="Our Services"
        subtitle="Meet the passionate innovators driving our mission forward."
      />

      {/* ✅ Main Section */}
      <section className="relative py-24 px-6 bg-white">
        
        {/* === Heading Section === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-5xl font-bold text-[#0b1220] mb-3">
            Our Services
          </h2>
          <p className="text-[#555] text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the core services we offer to nurture innovation,
            collaboration, and entrepreneurship.
          </p>

          {/* Cyan underline accent (no animation, smooth fade) */}
          <div className="mx-auto mt-5 h-[4px] w-24 rounded-full bg-[#00d2ef] opacity-80" />
        </motion.div>

        {/* === Cards Grid === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="container-global relative z-10 grid md:grid-cols-3 gap-12 max-w-7xl mx-auto"
        >
          <CardWrapper
            heading="Dedicated Office Spaces"
            text="At CVRU iTBI, we provide professional workspaces designed to foster productivity and collaboration among startups. Our dedicated office spaces are equipped with modern amenities and technology to create an optimal working environment."
            icon={<MdOutlineWork size={56} color="#ee9e26" />}
          />

          <CardWrapper
            heading="Trainings & Workshops"
            text="CVRU iTBI offers a variety of training sessions and workshops aimed at enhancing the entrepreneurial capabilities of startups. These sessions cover business planning, financial management, marketing, and technology."
            icon={<FaChalkboardTeacher size={56} color="#00d2ef" />}
          />

          <CardWrapper
            heading="Mentoring"
            text="We offer expert mentorship from successful entrepreneurs who guide startups from ideation to scaling, providing continuous support at every stage."
            icon={<AiOutlineTeam size={56} color="#ee9e26" />}
          />

          <CardWrapper
            heading="Access to Network"
            text="We connect startups with investors, industry leaders, and experts, helping them build relationships through networking events and collaborations."
            icon={<FaNetworkWired size={56} color="#00d2ef" />}
          />

          <CardWrapper
            heading="HR/Intern Support"
            text="We assist startups in hiring and finding interns through our vast university and industry network, ensuring access to fresh talent and innovation."
            icon={<RiUserSettingsLine size={56} color="#ee9e26" />}
          />

          <CardWrapper
            heading="Events & Competitions"
            text="We host events and competitions that let startups showcase their ideas, gain recognition, and connect with investors and partners."
            icon={<FaUsers size={56} color="#00d2ef" />}
          />

          <CardWrapper
            heading="Legal & Accounting Support"
            text="We provide legal and accounting assistance through our partner network, helping startups stay compliant and financially sound."
            icon={<FaBalanceScale size={56} color="#ee9e26" />}
          />
        </motion.div>
      </section>
    </>
  );
}
