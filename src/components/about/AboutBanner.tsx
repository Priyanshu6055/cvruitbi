"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { usePathname } from "next/navigation";

interface BannerProps {
  animation: object;
  heading: string;
  subtitle?: string;
}

export default function AboutBanner({ animation, heading, subtitle }: BannerProps) {
  const pathname = usePathname();

  return (
    <section
      key={pathname}
      className="relative overflow-hidden w-full pt-[18vh] md:pt-[22vh] pb-28 px-10 md:px-24 bg-[#030b0e] text-white"
    >
      {/* === Background Neon Glow === */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ef]/10 via-transparent to-[#00d2ef]/5 pointer-events-none" />

      {/* === Floating Shapes === */}
      <motion.div
        className="absolute top-10 left-12 w-32 h-32 border border-[#00d2ef]/40 backdrop-blur-xl rounded-xl"
        animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-28 h-28 border border-[#00d2ef]/30 backdrop-blur-xl rounded-full"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === Main Grid === */}
      <div
        className="
          container-global grid grid-cols-1 md:grid-cols-2
          gap-[2vh] items-center justify-center
          md:place-items-center relative z-10
        "
        style={{ padding: 0 }}
      >
        {/* === LEFT SECTION (Lottie Animation) === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="
              rounded-3xl p-4 md:p-6 backdrop-blur-xl 
              bg-white/10 border border-[#00d2ef]/20 
              shadow-[0_0_35px_rgba(0,210,239,0.15)]
              flex justify-center items-center
              w-[40rem] h-[32rem]
            "
          >
            <div className="w-full h-full">
              <Lottie
                key={pathname}
                animationData={animation}
                loop={true}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* === RIGHT SECTION (Text Content) === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-[#00d2ef] leading-tight"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            {heading}
          </motion.h1>

          {subtitle && (
            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}

          {/* Animated Underline */}
          <motion.div
            className="mt-6 h-[3px] bg-[#00d2ef] rounded-full"
            initial={{ width: "60px" }}
            animate={{ width: ["60px", "150px", "90px"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
