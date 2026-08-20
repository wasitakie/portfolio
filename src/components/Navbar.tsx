"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Navbar");
  const navItems = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ];
  const languageItems = [
    { locale: "en", label: "EN" },
    { locale: "th", label: "TH" },
  ];

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

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            className="flex h-9 items-center rounded-full border border-white/10 bg-white/5 p-1"
            aria-label={t("languageLabel")}
          >
            {languageItems.map((item) => {
              const active = item.locale === locale;

              return (
                <Link
                  key={item.locale}
                  href="/"
                  locale={item.locale}
                  aria-current={active ? "true" : undefined}
                  className={`min-w-10 rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    active
                      ? "bg-purple-600 text-white shadow-[0_0_14px_rgba(147,51,234,0.45)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
