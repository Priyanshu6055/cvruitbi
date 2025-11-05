"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-[#f7f7f7]">
      <div className="container-global">
        <div className="grid lg:grid-cols-2 gap-14 items-start bg-white/60 rounded-3xl p-10 md:p-16 shadow-sm backdrop-blur-xl border border-gray-200/60">

          {/* ✅ Left Content */}
          <div>
            {/* Icon + Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-cyan-500 text-xl">✦</span>
              <span className="text-lg font-medium tracking-wide text-gray-800">CVRU I–TBI</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
              About Us
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                CVRU Incubation and Technology Business Incubation (iTBI) Center is a pioneering
                initiative established under Dr. C.V. Raman University to nurture innovation,
                creativity, and entrepreneurship in the Chhattisgarh region.
              </p>

              <p>
                Our mission is to transform visionary ideas into scalable business ventures,
                thereby contributing to the state’s economic, technological, and social growth.
              </p>

              <p>
                We act as a bridge between academia, industry, and entrepreneurs, offering an
                environment that encourages research-based innovation, product development,
                and startup growth.
              </p>
            </div>
          </div>

          {/* ✅ Right Card with Image + Text Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gray-100 rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Top Text */}
            <div className="absolute top-6 left-6 z-20">
              <h3 className="text-white text-3xl font-bold">Our Work.</h3>
              <h3 className="text-white text-3xl font-bold opacity-90">Their Words.</h3>
            </div>

            <Image
              src="/images/02.jpg"
              alt="CVRU Activities"
              width={900}
              height={600}
              className="w-full h-[500px] object-cover rounded-3xl"
            />

            {/* Bottom Left Name */}
            <div className="absolute bottom-8 left-8 text-white text-lg drop-shadow-lg">
              <p className="font-medium">Nitin Vats</p>
              <p className="text-sm opacity-90">CVRU Chancellor, Bilaspur</p>
            </div>

            {/* Play Button */}
            <button className="absolute bottom-6 right-6 bg-white shadow-md p-3 rounded-full hover:scale-110 transition">
              <Play className="text-black" size={22} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
