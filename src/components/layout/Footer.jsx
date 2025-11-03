"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ✅ Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <img
            src="/images/cvru-logo.png"
            alt="CVRU Logo"
            className="h-20 w-auto mb-3"
          />
          <p className="text-sm text-gray-500 text-center md:text-left">
            CVRU I-TBI Foundation, Bilaspur — Empowering Innovation and Growth.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-lg font-semibold text-[#16b6cf] mb-4">
            Contact Us
          </h3>
          <p><span className="font-medium">Tel:</span> 07753253801</p>
          <p><span className="font-medium">Email:</span> info@cvru.ac.in</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-end items-center"
        >
          <ul className="flex gap-5">
            <li>
              <a href="#" className="text-gray-600 hover:text-[#16b6cf] transition">
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#16b6cf] transition">
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#16b6cf] transition">
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-[#16b6cf] transition">
                <FaLinkedinIn size={20} />
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#16b6cf] py-4 text-white text-center text-sm">
        © {new Date().getFullYear()} <strong>CVRU I-TBI</strong>. All Rights Reserved.
      </div>
    </footer>
  );
}
