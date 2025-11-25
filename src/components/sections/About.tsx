'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award, Heart } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const About = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
                        About <span className="text-blue-400">Me</span>
                    </h2>

                    <GlassCard className="p-8 md:p-12 mb-12">
                        <p className="text-slate-200 text-xl leading-relaxed mb-8 font-light">
                            I&apos;m a <span className="text-blue-400 font-medium">Vibe Coder</span> & Creative Developer based in Surampalem. I blend technical expertise with a passion for design to build digital experiences that resonate.
                        </p>

                        <div className="mb-2">
                            <h3 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                                <Heart size={24} className="text-pink-500" /> Beyond the Code
                            </h3>
                            <p className="text-slate-300 text-lg leading-relaxed font-light">
                                For me, development isn&apos;t just about syntax; it&apos;s about the rhythm of problem-solving and the art of creation. I thrive on transforming complex challenges into intuitive, user-centric solutions that just <i>feel</i> right. Whether it&apos;s crafting utility apps for students or architecting community platforms, I bring a unique energy and focus to every project.
                            </p>
                        </div>
                    </GlassCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Education */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                                <GraduationCap className="text-blue-400" size={28} /> Education
                            </h3>

                            <GlassCard className="p-6 relative overflow-hidden group" hoverEffect>
                                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                <div className="flex flex-col mb-2">
                                    <h4 className="text-xl font-bold text-white">Diploma in Computer Engineering</h4>
                                    <span className="text-blue-300 text-sm font-medium mt-1">2023 – 2026</span>
                                </div>
                                <p className="text-slate-400 mb-2 flex items-center gap-2 text-sm">
                                    <School size={16} /> Aditya College of Engineering, Surampalem
                                </p>
                                <p className="text-white font-medium">76%</p>
                            </GlassCard>

                            <GlassCard className="p-6 relative overflow-hidden group" hoverEffect>
                                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                                <div className="flex flex-col mb-2">
                                    <h4 className="text-xl font-bold text-white">SSC (Secondary School Certificate)</h4>
                                    <span className="text-purple-300 text-sm font-medium mt-1">Completed</span>
                                </div>
                                <p className="text-slate-400 mb-2 flex items-center gap-2 text-sm">
                                    <School size={16} /> ZPHS Velangi School, Velangi
                                </p>
                                <p className="text-white font-medium">Score: 485/600</p>
                            </GlassCard>
                        </div>

                        {/* Certifications & Achievements */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                                <Award className="text-yellow-400" size={28} /> Achievements
                            </h3>

                            <GlassCard className="p-8 h-full">
                                <ul className="space-y-8">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[24px] text-green-400"><Award size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">Hackathon Participant</h4>
                                            <p className="text-base text-slate-400 mt-1 font-light">Participated in college-level coding hackathons, building prototypes for student utilities.</p>
                                        </div>
                                    </li>
                                </ul>
                            </GlassCard>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
