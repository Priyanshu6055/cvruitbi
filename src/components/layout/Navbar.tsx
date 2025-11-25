"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

interface NavLink {
  name: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll();
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.25]);
  const boxShadow = useTransform(
    shadowOpacity,
    (v) => `0 8px 25px rgba(0, 210, 239, ${v})`
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    {
      name: "About",
      subLinks: [
        { name: "Who We Are", href: "/about" },
        { name: "Services We Offer", href: "/about/services" },
        { name: "Our Team", href: "/about/team" },
        { name: "Mentor", href: "/about/mentor" },
        { name: "Startup Associated", href: "/about/startup-associate" },
        { name: "Partners", href: "/about/partners" },
      ],
    },
    { name: "Program", subLinks: [{ name: "Program", href: "/program" }] },
    { name: "Facility", subLinks: [{ name: "Facilities", href: "/facility" }] },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleMouseEnter = (name: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setOpenDropdown(null), 180);
    setHoverTimeout(timeout);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ boxShadow }}
      className={`fixed top-4 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "backdrop-blur-xl bg-white/70 border-b border-[#00d2ef]/40 py-3 md:py-4"
          : "backdrop-blur-lg bg-white/90 border-b border-[#00d2ef]/30 py-5 md:py-6"
        }`}
    >
      <div className="container-global px-6 flex justify-between items-center">
        {/* === Logo === */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/" className="relative flex items-center select-none">
            <div className="h-16 md:h-30 flex items-center">
              <motion.img
                src="/images/cvru-logo-plane-orange.gif"
                alt="CVRU Logo"
                className="max-h-full w-auto object-contain"
                animate={scrolled ? { scale: 0.95 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </Link>
        </motion.div>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex items-center space-x-14 text-[1.1rem] font-medium text-gray-800">
          {links.map((link) =>
            link.subLinks ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  whileHover={{ color: "#00d2ef" }}
                  className="flex items-center gap-1"
                >
                  {link.name}
                  <motion.div
                    animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.ul
                      key={link.name}
                      initial={{ opacity: 0, y: -12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="absolute left-0 mt-3 w-64 bg-white rounded-2xl border border-gray-100/50 backdrop-blur-xl p-2"
                    >
                      {link.subLinks.map((sub) => (
                        <motion.li key={sub.name} whileHover={{ x: 8 }} className="rounded-xl">
                          <Link
                            href={sub.href}
                            className="block px-5 py-3 text-gray-700 hover:text-[#00d2ef] hover:bg-[#00d2ef]/10 rounded-xl transition-all"
                          >
                            {sub.name}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div key={link.name} whileHover={{ color: "#00d2ef" }}>
                <Link href={link.href!} className="relative">
                  {link.name}
                  <motion.span
                    className="absolute left-0 bottom-[-4px] h-[2px] bg-[#00d2ef] rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            )
          )}

          {/* === Apply Button === */}
          <Link href="/apply">
            <Button>Apply</Button>
          </Link>
        </nav>

        {/* === Mobile Menu Icon === */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={32} /> : <Menu size={32} />}
        </motion.button>
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-xl px-8 py-6 space-y-5"
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
                          <Link
                            href={sub.href}
                            className="block text-gray-600 py-2 hover:text-[#00d2ef]"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={link.href!}
                    className="block font-semibold text-gray-800 hover:text-[#00d2ef]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <Link href="/apply">
              <Button>Apply</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}