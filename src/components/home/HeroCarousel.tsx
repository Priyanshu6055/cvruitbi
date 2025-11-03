"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// ✅ Images in public/images/
const images = ["/images/01.jpg", "/images/02.jpg", "/images/04.jpg"];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden bg-gray-900">
      {/* ✅ Background image animation */}
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
            alt={`Hero Image ${index + 1}`}
            fill
            className="object-cover object-center w-full h-full"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* ✅ Overlay Text */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
        >
          Empowering <span className="text-primary">Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base md:text-lg mt-4 max-w-2xl leading-relaxed"
        >
          CVRUITBI fosters startups, innovation, and impactful entrepreneurship.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 inline-block bg-primary hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300"
        >
          Learn More
        </motion.a>
      </div>

      {/* ✅ Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === i ? "bg-primary scale-125" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
