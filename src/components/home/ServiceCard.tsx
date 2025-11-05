"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.035 }}
      transition={{ type: "spring", stiffness: 150, damping: 17 }}
      className="
        relative overflow-hidden rounded-2xl
        bg-white/50 backdrop-blur-xl border border-white/60
        shadow-[0_4px_25px_-6px_rgba(0,0,0,0.10)]
        flex flex-col cursor-pointer select-none
        h-[320px] sm:h-[350px] md:h-[230px]
      "
    >
      {/* Soft organic liquid rising */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={hovered ? { y: ["100%", "0%"], opacity: 0.22 } : { y: "100%", opacity: 0 }}
        transition={{ duration: 1.05, ease: "easeOut" }}
      >
        <svg className="absolute bottom-0 left-0 right-0 w-full h-[150%]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="rgba(0,210,239,0.38)">
            <animate attributeName="d" dur="4s" repeatCount="indefinite"
              values="
              M0,256 C200,280 320,240 480,250 C620,258 780,300 960,260 C1100,230 1260,260 1440,250 L1440,320 L0,320 Z;
              M0,260 C220,230 350,300 520,280 C700,260 820,220 980,230 C1140,240 1300,280 1440,260 L1440,320 L0,320 Z;
              M0,256 C200,280 320,240 480,250 C620,258 780,300 960,260 C1100,230 1260,260 1440,250 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </motion.div>

      {/* Darker ink spot under cursor */}
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full bg-[#0089a0] pointer-events-none"
        style={{ left: coords.x - 80, top: coords.y - 80 }}
        animate={hovered ? { scale: 1.8, opacity: 0.28 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-7">
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2.8 }}
          className="mb-4 text-[#00d2ef]"
        >
          {icon}
        </motion.div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-1">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
