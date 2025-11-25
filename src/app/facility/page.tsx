"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWifi, FaBook, FaCouch, FaRegLightbulb, FaBolt, FaPrint, FaTools } from "react-icons/fa";
import BannerWrapper from "@/components/about/AboutBannerWrapper";
import animationData from "@/../public/JSON/rocket-launch.json";

export default function FacilityPage() {
  const coworkingImages = [
    "/images/06.webp",
    "/images/04.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % coworkingImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [coworkingImages.length]);
  return (
    <>
      <BannerWrapper
        animation={animationData}
        heading="Facilities"
        subtitle="Meet the passionate innovators driving our mission forward."
      />
      <section className="bg-white text-[#0b1220] py-20 md:py-28 overflow-hidden">
        <div className="container-global px-6 lg:px-20 space-y-28">
          {/* 🏢 Co-Working Space Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            {/* Image Carousel with Parallax Fade */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)] h-[420px]"
            >
              {/* Cinematic crossfade + slight zoom animation */}
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={coworkingImages[currentImage]}
                  alt="Co-Working Space"
                  fill
                  className="object-cover w-full h-full rounded-3xl transition-transform duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>

              {/* Dots Indicator (with soft glow) */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {coworkingImages.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: currentImage === i ? 1.3 : 1,
                      opacity: currentImage === i ? 1 : 0.4,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${currentImage === i
                        ? "bg-[#00d2ef] shadow-[0_0_10px_#00d2ef80]"
                        : "bg-white/40"
                      }`}
                  ></motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content with Float-Up Effect */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <h2 className="text-4xl font-extrabold mb-3 text-[#0b1220]">
                Co-Working <span className="text-[#00d2ef]">Space</span>
              </h2>
              <div className="h-[3px] w-16 bg-[#00d2ef] rounded-full mb-6"></div>

              <p className="text-gray-600 leading-relaxed mb-5">
                Step into our workspace and experience a fresh brewing coffee aroma,
                coupled with an energetic atmosphere. Our co-working space fosters
                collaboration, creativity, and flexibility—designed to suit the dynamic
                needs of startups. At CVRU-I-TBI, we provide well-furnished workspaces
                divided into hot desks, dedicated desks, and cabins.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-gray-700">
                {[
                  { icon: <FaWifi />, text: "Free high-speed WiFi" },
                  { icon: <FaBook />, text: "Access to a well-equipped library" },
                  { icon: <FaCouch />, text: "Hangout Area & Relax Zones" },
                  { icon: <FaRegLightbulb />, text: "Conference, Meeting & Discussion Rooms" },
                  { icon: <FaBolt />, text: "Electricity with UPS backup" },
                  { icon: <FaPrint />, text: "Printers, Scanners & Stationery" },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[#00d2ef] text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* 🧪 I4 Lab Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 gap-14 items-center"
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-extrabold mb-3 text-[#0b1220]">
                I4 Lab —{" "}
                <span className="text-[#00d2ef]">
                  Innovation Integration Incubation & Implementation
                </span>
              </h2>
              <div className="h-[3px] w-16 bg-[#00d2ef] rounded-full mb-6"></div>

              <div className="space-y-6 text-gray-700">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-[#0093b1]">
                    Rapid Prototyping
                  </h3>
                  <p className="mt-2 leading-relaxed">
                    Our Rapid Prototyping Lab is equipped with the latest technology to help
                    startups quickly develop high-quality product models at minimal cost.
                    This ensures a fast design-to-production cycle and efficient resource
                    management.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-[#0093b1]">Fabrication</h3>
                  <p className="mt-2 leading-relaxed">
                    The Fab Lab at CVRU-I-TBI offers state-of-the-art digital fabrication
                    tools, enabling startups to build, test, and refine their ideas with
                    ease. It’s fully customizable to fit specific startup requirements.
                  </p>
                </motion.div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-[#00d2ef]">
                <FaTools className="text-xl" />
                <p className="text-sm font-medium text-gray-600">
                  Empowering startups with hands-on innovation
                </p>
              </div>
            </motion.div>

            {/* Image with slow zoom & fade */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
            >
              <Image
                src="/images/3d-printing.webp"
                alt="I4 Lab Facility"
                width={700}
                height={500}
                className="object-cover w-full h-[420px] transition-transform duration-[2500ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00000091]/25 to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
