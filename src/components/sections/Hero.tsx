'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 backdrop-blur-[2px]">
            <div className="container mx-auto px-6 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h2 className="text-blue-400 font-medium text-lg mb-6 tracking-wide uppercase">
                        Portfolio
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-white leading-[1.1]">
                        Vijaya Pardhu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x">
                            Magapu
                        </span>
                    </h1>
                    <p className="text-slate-300 text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Vibe Coder crafting intuitive, student-focused apps and fluid web experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=18QrZto08Jf5O9guzdw1Q0FAxYQeRCYVh"
                            className="px-8 py-4 glass-panel text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </div>

                    {/* Music Player Style Progress Bar */}

                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
