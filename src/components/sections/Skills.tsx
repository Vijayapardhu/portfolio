'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone, Terminal, Users, Brain, Clock, MessageSquare, Zap, Palette } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const skills = {
    technical: [
        { name: 'Java', icon: <Code size={24} />, level: 90 },
        { name: 'Android Studio', icon: <Smartphone size={24} />, level: 85 },
        { name: 'Firebase', icon: <Database size={24} />, level: 85 },
        { name: 'Web Development', icon: <Layout size={24} />, level: 80 },
        { name: 'HTML/CSS/JS', icon: <Code size={24} />, level: 85 },
        { name: 'Python', icon: <Terminal size={24} />, level: 60 },
        { name: 'Git & Version Control', icon: <Code size={24} />, level: 75 },
        { name: 'C Language', icon: <Terminal size={24} />, level: 70 },
        { name: 'Adobe Photoshop', icon: <Palette size={24} />, level: 85 },
        { name: 'Adobe Premiere Pro', icon: <Palette size={24} />, level: 60 },
        { name: 'Adobe Illustrator', icon: <Palette size={24} />, level: 20 },
    ],
    soft: [
        { name: 'Problem Solving', icon: <Brain size={20} /> },
        { name: 'Communication', icon: <MessageSquare size={20} /> },
        { name: 'Quick Learning', icon: <Zap size={20} /> },
        { name: 'Time Management', icon: <Clock size={20} /> },
        { name: 'Teamwork', icon: <Users size={20} /> },
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
                        My <span className="text-blue-400">Skills</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Technical Skills */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <Terminal className="text-blue-400" /> Technical Skills
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {skills.technical.map((skill, index) => (
                                    <GlassCard
                                        key={skill.name}
                                        className="p-4 flex items-center gap-4 group"
                                        hoverEffect
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover:text-white group-hover:bg-blue-500 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-2">
                                                <h4 className="font-medium text-white">{skill.name}</h4>
                                                <span className="text-xs text-slate-400">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                />
                                            </div>
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                                <Users className="text-yellow-400" /> Soft Skills
                            </h3>
                            <div className="flex flex-wrap gap-4 mb-12">
                                {skills.soft.map((skill, index) => (
                                    <GlassCard
                                        key={skill.name}
                                        className="px-6 py-3 rounded-full flex items-center gap-2 cursor-default hover:bg-white/10"
                                    >
                                        <span className="text-yellow-400">{skill.icon}</span>
                                        <span className="text-slate-200 font-medium">{skill.name}</span>
                                    </GlassCard>
                                ))}
                            </div>

                            {/* Additional Context */}
                            <GlassCard className="p-8 border-l-4 border-l-blue-500">
                                <p className="text-slate-300 italic text-lg leading-relaxed font-light">
                                    &quot;I believe in continuous learning and adapting to new technologies. My technical foundation is strong, but my ability to solve problems and work in a team [...]
                                </p>
                            </GlassCard>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;