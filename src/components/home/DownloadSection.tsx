"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function DownloadSection() {
  return (
    <section
      className="py-20 bg-gray-50 text-center niq-section"
      aria-labelledby="niq-heading"
    >
      <div className="container mx-auto px-6 niq-container">
        <motion.h2
          id="niq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-gray-900 max-w-3xl mx-auto leading-relaxed"
        >
          Notice Inviting Quotation for Supply &amp; Installation of D&amp;D Lab
          Equipment at CVRU I-TBI Foundation, Bilaspur
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8"
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
