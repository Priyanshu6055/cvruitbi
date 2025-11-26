"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence, Variants } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- ANIMATION CONFIGURATION ---

// Container variants for staggering text elements
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between child animations
      delayChildren: 0.1,    // Initial delay for all children
    },
  },
};

// Child variants (Title, Subtitle/Button)
const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

// Image zoom effect on slide enter
const imageVariants: Variants = {
  hidden: { scale: 1.05, opacity: 0.8 },
  visible: {
    scale: 1.0,
    opacity: 1,
    transition: {
      duration: 3.0, // Slow, dramatic zoom
      ease: "easeInOut",
    },
  },
};

// --- COMPONENT ---

export default function HeroSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    {
      image: "/images/05.webp",
      titleWords: [
        "Innovate.",
        "Create.",
        "Grow with CVRU i-TBI Foundation.",
      ],
      subtitle: "Join the Startup Ecosystem | Know More",
    },
    {
      image: "/images/02.webp",
      titleWords: ["Empowering", "Visionary", "Entrepreneurs."],
      subtitle: "Kickstart Your Journey Today",
    },
    {
      image: "/images/04.webp",
      titleWords: ["Transform", "Ideas", "Into Reality."],
      subtitle: "Connect | Collaborate | Build",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveSlideIndex(swiper.realIndex);
  };


  return (
    <div className="w-full h-[420px] sm:h-[480px] md:h-[850px] overflow-hidden shadow-2xl relative group">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{ delay: 4500, disableOnInteraction: false }} // Slightly longer delay
        pagination={{ clickable: true }}
        loop={true}
        speed={1200}
        onSlideChangeTransitionStart={handleSlideChange}
        className="h-full w-full hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Slide Image with Zoom Effect (Parallax) */}
              <motion.img
                key={`image-${index}-${activeSlideIndex}`} // Key change re-triggers animation
                src={slide.image}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="w-full h-full object-cover absolute inset-0"
                alt={`Slide ${index}`}
              />

              {/* Dark Gradient for readability - Stronger and deeper */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text Container: Uses staggered motion variants */}
              <motion.div
                key={`text-${index}-${activeSlideIndex}`} // Key change re-triggers animation
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-6 bottom-16 sm:left-10 sm:bottom-20 md:bottom-32 max-w-[90%] sm:max-w-[70%] z-20"
              >
                {/* 1. Main Title with Typewriter */}
                <motion.h1
                  variants={textItemVariants}
                  className="
                    text-4xl sm:text-5xl md:text-7xl 
                    font-black 
                    text-white leading-tight drop-shadow-2xl mb-4
                  "
                >
                  {/* We only use Typewriter on the active slide to prevent multiple instances running */}
                  {index === activeSlideIndex && (
                    <Typewriter
                      words={slide.titleWords}
                      loop={1}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={1200}
                    />
                  )}
                  {/* Display static text on inactive slides to avoid pop-in */}
                  {index !== activeSlideIndex && slide.titleWords.join(" ")}
                </motion.h1>

                {/* 2. Subtitle/Button Container */}
                <motion.div
                  variants={textItemVariants}
                  className="mt-6"
                >
                  <button
                    className="
                      bg-[#00d2ef] text-white 
                      px-8 py-4 sm:px-10 sm:py-4 
                      rounded-xl font-bold text-lg 
                      shadow-2xl transition duration-300
                      hover:bg-[#2aa8b6] hover:scale-[1.03]
                      tracking-wide
                    "
                    aria-label={`Go to ${slide.subtitle}`}
                  >
                    {slide.subtitle}
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows: Styled for better UX/UI */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 flex items-center justify-between px-4 sm:px-6">
          <div className="prev-btn pointer-events-auto bg-white/20 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white/40 cursor-pointer backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-[#35c6d6]/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </div>

          <div className="next-btn pointer-events-auto bg-white/20 text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-white/40 cursor-pointer backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-[#35c6d6]/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>

      </Swiper>
    </div>
  );
}