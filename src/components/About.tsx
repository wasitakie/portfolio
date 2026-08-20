"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto ">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full transform -translate-x-4 -translate-y-4"></div>

              {/* Real profile image placeholder */}
              <div className="absolute inset-0 w-full h-full rounded-full overflow-hidden z-10 bg-zinc-800 bg-cover bg-center">
                <Image
                  src={"/profile.png"}
                  alt={t("imageAlt")}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
            <div className="w-20 h-1 bg-purple-500 rounded mb-8"></div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-bold mb-3 border-b border-zinc-800 pb-2 inline-block">
                  {t("frontend")}
                </h3>
                <ul className="space-y-1 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> Bootstrap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> TypeScript
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3 border-b border-zinc-800 pb-2 inline-block">
                  {t("backend")}
                </h3>
                <ul className="space-y-1 text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> Express
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> MySQL/PostgreSQL
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">▹</span> Prisma
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
