"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          WA<span className="text-purple-500">.</span>
        </a>

        <div className="hidden md:flex gap-8">
          <a
            href="#about"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
