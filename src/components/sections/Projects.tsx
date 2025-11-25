'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, AlertTriangle, GraduationCap } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const projects = [
    {
        title: 'HeySara',
        description: 'Sara is your intelligent, all-in-one voice assistant for Android. With Sara, you can control your device, manage daily tasks, send messages, make calls, set reminders, and much more—all hands-free. Designed for speed, privacy, and accessibility, Sara empowers you to get things done.',
        tags: ['Android', 'Voice Assistant', 'Accessibility', 'Privacy', 'Java/Kotlin'],
        icon: <Smartphone size={24} />,
        color: 'text-purple-400',
        highlight: 'Intelligent, all-in-one voice assistant designed for speed and privacy.',
        links: {
            github: 'https://github.com/Vijayapardhu/HeySara',
            demo: 'https://heysara-assistant.vercel.app'
        }
    },
    {
        title: 'Crash Alert Safety',
        description: 'A comprehensive Android crash detection and emergency alert application. Automatically detects vehicle accidents using device sensors (accelerometer & gyroscope) and notifies emergency contacts with precise GPS location when the driver is unable to respond.',
        tags: ['Android', 'Java', 'Sensors', 'GPS', 'AES Encryption'],
        icon: <AlertTriangle size={24} />,
        color: 'text-red-400',
        highlight: 'Real-time crash detection with automated emergency alerts.',
        links: {
            github: 'https://github.com/Vijayapardhu/Accident-Alert',
            demo: 'https://github.com/Vijayapardhu/Accident-Alert/releases/download/version/'
        }
    },
    {
        title: 'EduVision - College ERP',
        description: 'A smart integrated college management system built with Django. Features QR-based attendance tracking, online tests, document storage, and role-based access for students and faculty. Streamlines administrative tasks and enhances the academic experience.',
        tags: ['Django', 'Python', 'QR Attendance', 'PostgreSQL', 'Web App'],
        icon: <GraduationCap size={24} />,
        color: 'text-indigo-400',
        highlight: 'Complete ERP solution with QR attendance and online testing.',
        links: {
            github: 'https://github.com/Vijayapardhu/College-Management-System',
            demo: 'https://github.com/Vijayapardhu/College-Management-System'
        }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
                        Featured <span className="text-blue-400">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                        {projects.map((project, index) => (
                            <GlassCard
                                key={index}
                                className="flex flex-col md:flex-row h-full group p-0 overflow-hidden"
                                hoverEffect
                            >
                                <div className="p-8 flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`p-3 rounded-xl bg-white/5 ${project.color}`}>
                                            {project.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-300 mb-6 font-light leading-relaxed text-lg">
                                        {project.description}
                                    </p>

                                    <div className="mb-6">
                                        <p className="text-base text-slate-400 italic border-l-2 border-blue-500 pl-4">
                                            &quot;{project.highlight}&quot;
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-sm font-medium px-4 py-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                                            <Github size={20} /> View Code
                                        </a>
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                                            <ExternalLink size={20} /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
