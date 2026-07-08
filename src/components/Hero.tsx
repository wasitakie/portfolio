"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-purple-500">Wasita Tanawattananon</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
          Full Stack Developer
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          I build beautiful, responsive, and functional web applications using
          modern technologies like Next.js, React, and Tailwind CSS.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-6 mb-12"
      >
        <a
          href="https://github.com/wasitakie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <FaGithub size={30} />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/wasita"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={30} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:wasitat.wa@gmail.com"
          className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <FaEnvelope size={30} />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <a
          href="#projects"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
