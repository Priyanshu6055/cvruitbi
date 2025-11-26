"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export interface ThreeDWaveCardProps {
  heading: string;
  text: string;
  subText?: string;
  icon?: string | React.ReactNode;
}

export default function ThreeDWaveCard({
  heading,
  text,
  subText,
  icon,
}: ThreeDWaveCardProps) {
  // ✅ Change this variable to easily modify wave color globally
  const waveColor = "rgba(13, 202, 240, 0.38)"; // Cyan / Crayon color

  // 3D motion tilt setup
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateX = useTransform(mvY, [-50, 50], [10, -10]);
  const rotateY = useTransform(mvX, [-50, 50], [-10, 10]);

  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mvX.set(((x / rect.width) * 2 - 1) * 50);
    mvY.set(((y / rect.height) * 2 - 1) * 50);
  };

  const resetTilt = () => {
    mvX.set(0);
    mvY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onMouseEnter={() => setHovered(true)}
      style={{ perspective: 1200 }}
      className="
        relative overflow-hidden rounded-3xl
        bg-gradient-to-br from-white to-[#f0fbfd]
        border border-[#e0f6f8] backdrop-blur-xl
        shadow-[0_15px_35px_rgba(0,0,0,0.08)]
        hover:shadow-[0_25px_55px_rgba(0,0,0,0.12)]
        flex flex-col cursor-pointer select-none
        md:h-[420px] p-10
        transition-all duration-500
      "
    >
      {/* 🌊 Continuous Wave Animation */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-[180%]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill={waveColor}>
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,256 C200,280 320,240 480,250 C620,258 780,300 960,260 C1100,230 1260,260 1440,250 L1440,320 L0,320 Z;
                M0,260 C220,230 350,300 520,280 C700,260 820,220 980,230 C1140,240 1300,280 1440,260 L1440,320 L0,320 Z;
                M0,256 C200,280 320,240 480,250 C620,258 780,300 960,260 C1100,230 1260,260 1440,250 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </motion.div>

      {/* ✨ Soft Light Reflection */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent opacity-0"
        animate={{ opacity: hovered ? 0.3 : 0.15 }}
        transition={{ duration: 0.4 }}
      />

      {/* 💎 3D Tilted Content */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10"
      >
        <div
          className="flex gap-6 items-start"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Icon Box */}
          <div
            className="
              h-16 w-16 rounded-2xl 
              bg-white border border-[#d9f7fa]
              flex items-center justify-center shadow-sm
            "
          >
            {typeof icon === "string" ? (
              <Image
                src={icon}
                alt="icon"
                width={46}
                height={46}
                className="object-contain"
              />
            ) : (
              icon
            )}
          </div>

          {/* Text Section */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-[#0093b1]">{heading}</h3>

            {subText && (
              <p className="text-sm text-gray-500 leading-relaxed">
                {subText}
              </p>
            )}

            <p className="text-[#0b1220] text-[17px] leading-relaxed">
              {text}
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-6 relative w-full">
          <div className="h-[1px] bg-[#0dcaf0]/10 w-full"></div>
          <motion.div
            className="absolute top-0 h-[2px] bg-[#0dcaf0]"
            initial={{ width: "20%", left: "10%" }}
            animate={{
              width: hovered ? "65%" : "20%",
              left: hovered ? "18%" : "10%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
