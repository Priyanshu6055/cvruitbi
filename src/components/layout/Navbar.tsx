"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button"; 

interface NavLink {
  name: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "About",
      subLinks: [
        { name: "Who We Are", href: "/about" },
        { name: "Services We Offer", href: "/services" },
        { name: "Our Team", href: "/team" },
        { name: "Mentor", href: "/mentor" },
        { name: "Startup Associate", href: "/startup-associate" },
        { name: "Partners", href: "/partners" },
      ],
    },
    { name: "Program", subLinks: [{ name: "Program", href: "/program" }] },
    { name: "Facility", subLinks: [{ name: "Facilities", href: "/facilities" }] },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-3 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/30 py-2"
          : "backdrop-blur-lg bg-white/80 py-4"
      }`}
    >
<div className="max-w-7xl mx-auto px-4 md:px-0 flex justify-between items-center gap-4 md:gap-16">



        {/* ✅ Animated Logo */}
        <a href="/" className="relative group select-none flex items-center">
          <motion.img
            src="/images/cvru-logo.png"
            alt="CVRU Logo"
            className="h-24 w-auto object-contain drop-shadow-xl"
            animate={scrolled ? { scale: 0.82 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            whileHover={{
              rotate: [0, -4, 4, -2, 2, 0],
              scale: 1.08,
              transition: { duration: 0.9 },
            }}
          />

          {/* Glow */}
          <motion.div
            className="absolute inset-0 scale-[1.7] blur-2xl bg-[#00d2ef]/40 opacity-0 group-hover:opacity-80 -z-10 rounded-full"
            animate={{ scale: [1.1, 1.4, 1.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </a>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-16 text-[1.1rem] font-medium text-gray-800">
          {links.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="modern-link flex items-center gap-1">
                  {link.name}
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="absolute left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100/60 backdrop-blur-xl p-2"
                    >
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <a className="block px-6 py-3 rounded-xl text-gray-700 hover:bg-[#00d2ef]/10 hover:text-[#00d2ef] transition-all">
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a key={link.name} href={link.href!} className="modern-link">
                {link.name}
              </a>
            )
          )}

          {/* ✅ Liquid CTA */}
          <a href="/apply">
            <Button>Apply</Button>
          </a>
        </nav>

        {/* ✅ Mobile menu icon */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          <motion.div
            key={mobileOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {mobileOpen ? <X size={34} /> : <Menu size={34} />}
          </motion.div>
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/90 backdrop-blur-xl px-8 py-6 space-y-6 shadow-xl"
          >
            {links.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <details>
                    <summary className="font-semibold text-gray-800 py-2 cursor-pointer flex justify-between">
                      {link.name}
                    </summary>
                    <ul className="pl-4 space-y-2">
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <a className="block text-gray-600 py-2">{sub.name}</a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a href={link.href!} className="block font-semibold text-gray-800">
                    {link.name}
                  </a>
                )}
              </div>
            ))}

            <Button>Apply</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
