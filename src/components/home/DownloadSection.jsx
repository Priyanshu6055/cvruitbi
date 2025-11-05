"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button"; // ✅ your button

export default function DownloadSection() {
  return (
<section className="py-24 bg-gradient-to-b from-[#eef9ff] to-white text-center relative overflow-hidden">

  {/* Soft Floating Glows */}
  <motion.div
    initial={{ opacity: 0.4, scale: 0.9 }}
    animate={{ opacity: 0.75, scale: 1.15 }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
    className="absolute top-[-40px] left-[-40px] w-56 h-56 bg-[#00d2ef] rounded-full blur-[80px] mix-blend-screen"
  />

  <motion.div
    initial={{ opacity: 0.4, scale: 0.9 }}
    animate={{ opacity: 0.7, scale: 1.2 }}
    transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", delay: 1 }}
    className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-cyan-500 rounded-full blur-[100px] mix-blend-screen"
  />

      <div className="container-global mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
        >
          Notice Inviting Quotation for Supply & Installation of D&D Lab
          Equipment at CVRU I-TBI Foundation, Bilaspur
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-gray-600 text-lg"
        >
          Click below to download the official NIQ PDF.
        </motion.p>

        {/* Button Animation wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://cvruitbi.com/docs/CVRU%20I-TBI%20NIQ%20for%20Lab%20(D&D)%20Equipment%20.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Download NIQ PDF</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
