'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const certifications = [
    {
        title: 'Legacy Responsive Web Design V8',
        issuer: 'freeCodeCamp',
        date: 'November 2025',
        description: 'Mastered the art of responsive design, building fluid layouts that adapt to any device. Approximately 300 hours of coursework.',
        skills: ['HTML', 'CSS', 'Responsive Design'],
        link: 'https://freecodecamp.org/certification/vijayaapardhu/responsive-web-design'
    },
    {
        title: 'Python Programming',
        issuer: 'APSSDC',
        date: 'June 2025',
        description: 'Deep dive into Python programming, mastering logic, data structures, and algorithmic thinking.',
        skills: ['Python', 'Problem Solving'],
        link: '#'
    },
    {
        title: 'Front-end Web Development',
        issuer: 'Reliance Foundation',
        date: 'April 2024',
        description: 'Comprehensive front-end training, crafting interactive and user-centric web interfaces.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Front-End Design'],
        link: 'https://drive.google.com/file/d/1GQ8XNl0lOSdhPEn9agGcVQ9TKwCvDOvV/view'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
                        My <span className="text-blue-400">Certifications</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <GlassCard
                                key={index}
                                className="p-8 flex flex-col h-full group relative overflow-hidden"
                                hoverEffect
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Award size={100} className="text-blue-400" />
                                </div>

                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Award size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium">
                                        {cert.issuer} • {cert.date}
                                    </p>
                                </div>

                                <p className="text-slate-300 mb-6 font-light leading-relaxed flex-grow">
                                    {cert.description}
                                </p>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                                        View Certificate <ExternalLink size={14} />
                                    </a>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
