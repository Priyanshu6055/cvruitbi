"use client";

import { motion } from "framer-motion";


export default function VisionSection() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Our Vision
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
        To create an ecosystem where innovation thrives — nurturing young
        entrepreneurs, supporting technology-driven ventures, and building
        sustainable businesses that impact society positively.
      </p>
    </section>
  );
}
