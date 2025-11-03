"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  icon: string; // e.g. "/icons/mentorship.svg" or "/images/service1.png"
  title: string;
  desc: string;
}

export default function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
    >
      {/* ✅ Use public/ path directly */}
      <Image
        src={icon}
        alt={title}
        width={60}
        height={60}
        className="mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}
