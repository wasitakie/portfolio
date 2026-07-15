"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Freelance",
    period: "2025 - Present",
    description:
      "Developed high-performance, multilingual product landing pages, enhancing user engagement and ensuring a seamless customer journey.",
  },
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - 2024",
    description:
      "Lead the development of scalable microservices and modernized the frontend using PHP , resulting in a 40% performance improvement.",
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2019 - 2021",
    description:
      "Developed and maintained full-stack web applications. Assisted in migrating legacy systems to modern React architecture.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-right">
            Experience
          </h2>
          <div className="flex justify-end">
            <div className="w-20 h-1 bg-purple-500 rounded"></div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-[-48px] w-px bg-zinc-800 transform -translate-x-1/2 last:hidden"></div>

              <div
                className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 transform -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_10px_rgba(147,51,234,0.8)] z-10"></div>

                <div className="md:w-[45%]">
                  <span className="text-purple-400 font-mono text-sm block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-gray-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Empty div for spacing on the other side of timeline */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
