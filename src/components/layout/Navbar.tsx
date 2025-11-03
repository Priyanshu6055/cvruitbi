"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href?: string;
  subLinks?: { name: string; href: string }[];
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // ✅ Strongly typed function
  const toggleDropdown = (menu: string) =>
    setOpenDropdown(openDropdown === menu ? null : menu);

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
    {
      name: "Program",
      subLinks: [{ name: "Program", href: "/program" }],
    },
    {
      name: "Facility",
      subLinks: [{ name: "Facilities", href: "/facilities" }],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* ✅ Logo from public/images */}
        <a href="/" className="flex items-center">
          <img
            src="/images/cvru-logo.png"
            alt="CVRU Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {links.map((link) =>
            link.subLinks ? (
              <div key={link.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center gap-1 hover:text-[#16b6cf]"
                >
                  {link.name} <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {openDropdown === link.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 z-50"
                    >
                      {link.subLinks.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.href}
                            className="block px-4 py-2 text-sm hover:bg-[#16b6cf]/10 hover:text-[#16b6cf]"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#16b6cf] transition-colors"
              >
                {link.name}
              </a>
            )
          )}

          <a
            href="/apply"
            className="ml-4 bg-[#16b6cf] text-white px-5 py-2 rounded-lg hover:bg-[#12a0b7] transition"
          >
            Apply
          </a>
        </nav>

        {/* ✅ Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-4 space-y-4"
          >
            {links.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className="flex justify-between w-full text-left font-medium text-gray-700"
                    >
                      {link.name}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.ul
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="mt-2 pl-4 space-y-2"
                        >
                          {link.subLinks.map((sub) => (
                            <li key={sub.name}>
                              <a
                                href={sub.href}
                                className="block text-sm text-gray-600 hover:text-[#16b6cf]"
                              >
                                {sub.name}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block font-medium text-gray-700 hover:text-[#16b6cf]"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}

            <a
              href="/apply"
              className="block bg-[#16b6cf] text-white text-center py-2 rounded-lg mt-4"
            >
              Apply
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
