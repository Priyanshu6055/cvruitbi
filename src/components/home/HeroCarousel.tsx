"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button"; // ✅ import your water-wave button

const images = ["/images/01.jpg", "/images/02.jpg", "/images/04.jpg"];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden  shadow-2xl bg-gradient-to-br from-cyan-900 via-gray-900 to-black">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`Hero ${index + 1}`}
            fill
            className="object-cover object-center brightness-[0.65] contrast-110 saturate-[1.2]"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl px-8 py-6 shadow-xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md tracking-tight">
            Empowering <span className="text-cyan-400">Innovation</span>
          </h1>

          <p className="text-sm md:text-base text-gray-200 mt-3 max-w-md mx-auto leading-relaxed">
            CVRUITBI drives innovation, nurtures startups, and builds a future powered by ideas.
          </p>

          {/* ✅ Replace default button with your water-wave Button */}
          <div className="mt-6">
            <a href="#about">
              <Button>Explore Now</Button>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.7)]"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
