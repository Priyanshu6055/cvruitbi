"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-primary text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-[#13a3bb] transition"
    >
      {children}
    </motion.button>
  );
}
