'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Palette, Cpu, Lightbulb } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const interests = [
    { name: 'App Development', icon: <Smartphone size={32} />, color: 'text-blue-400' },
    { name: 'Web Design', icon: <Palette size={32} />, color: 'text-purple-400' },
    { name: 'AI-assisted Coding', icon: <Cpu size={32} />, color: 'text-green-400' },
    { name: 'Learning New Tech', icon: <Lightbulb size={32} />, color: 'text-yellow-400' },
];

const Interests = () => {
    return (
        <section id="interests" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight">
                        My <span className="text-blue-400">Interests</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {interests.map((interest, index) => (
                            <GlassCard
                                key={interest.name}
                                className="p-8 flex flex-col items-center gap-6 w-48 md:w-56 cursor-pointer group"
                                hoverEffect
                            >
                                <div className={`p-4 rounded-full bg-white/5 ${interest.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {interest.icon}
                                </div>
                                <h3 className="font-medium text-white text-lg text-center">{interest.name}</h3>
                            </GlassCard>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl mx-auto"
                    >
                      
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Interests;
