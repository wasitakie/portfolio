"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
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
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                            {/* Decorative elements behind image */}
                            <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4"></div>
                            <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full transform -translate-x-4 -translate-y-4"></div>

                            {/* Real profile image placeholder */}
                            <div className="absolute inset-0 bg-zinc-800 rounded-full overflow-hidden border-4 border-zinc-900 z-10 relative bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2000&auto=format&fit=crop)' }}>
                                {/* Fallback pattern if image is missing */}
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-purple-500 rounded mb-8"></div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Hello! I&apos;m Wasita, a passionate Full Stack Developer based in Bangkok, Thailand. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
                        </p>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            My core philosophy connects beautiful design with solid engineering. I believe that a great digital experience shouldn&apos;t just look good, it needs to perform flawlessly under the hood. Currently, I&apos;m focused on building accessible, human-centered products at Tech Innovators.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-white font-bold mb-3 border-b border-zinc-800 pb-2 inline-block">Frontend</h3>
                                <ul className="space-y-1 text-gray-400">
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> Next.js</li>
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> React</li>
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> Tailwind CSS</li>
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> TypeScript</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-3 border-b border-zinc-800 pb-2 inline-block">Backend</h3>
                                <ul className="space-y-1 text-gray-400">
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> Node.js</li>
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> Express/NestJS</li>
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> PostgreSQL</li>
                                    <li className="flex items-center gap-2"><span className="text-purple-500">▹</span> MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
