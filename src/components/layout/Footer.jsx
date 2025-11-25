"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25 });
  const sy = useSpring(y, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      className="relative bg-white pt-20 pb-14 border-t border-gray-200 overflow-hidden"
    >
      {/* Cursor-follow Bubble */}
      <motion.div
        style={{ left: sx, top: sy }}
        className="pointer-events-none absolute w-24 h-24 bg-[#00d2ef]/20 rounded-full mix-blend-multiply z-[1]"
      />

      {/* Main Footer Content */}
      <div className="container-global relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14 items-start">

        {/* Logo + Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Image
              src="/images/cvru-logo.png"
              alt="CVRU Logo"
              width={130}
              height={130}
              className="mb-4 drop-shadow-xl"
            />
          </motion.div>

          <p className="text-gray-600 text-base max-w-xs leading-relaxed">
            CVRU I-TBI Foundation, Bilaspur — Empowering Innovation and Growth
            with next-gen startup incubation and mentoring.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-[#00d2ef] mb-5">
            Contact Us
          </h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Tel:</strong> 07753253801</p>
            <p><strong>Email:</strong> info@cvru.ac.in</p>
            <p><strong>Address:</strong> CVRU I-TBI, Bilaspur, Chhattisgarh</p>
          </div>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end gap-6"
        >
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.div key={i} className="relative group" whileHover={{ scale: 1.2 }}>
              <motion.div
                className="
                  absolute inset-0 rounded-full border-2 border-[#00d2ef]
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500 ease-out
                  shadow-[0_0_20px_4px_rgba(0,210,239,0.4)]
                "
                initial={{ scale: 0 }}
                whileHover={{ scale: [0.8, 1.1, 1] }}
              />
              <motion.a
                href="#"
                className="relative flex items-center justify-center w-14 h-14 text-gray-700 hover:text-[#00d2ef] transition"
              >
                <Icon size={24} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Minimal Copyright Section */}
      <div className="mt-14 px-6">
        <hr className="border-gray-200 mb-4" />

        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#00d2ef] font-semibold">CVRU I-TBI</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
