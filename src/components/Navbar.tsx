'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4',
                isScrolled ? 'pt-4' : 'pt-6'
            )}
        >
            <div className={cn(
                "glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 backdrop-blur-2xl",
                isScrolled ? "w-[90%] md:w-[70%] bg-black/40" : "w-[95%] md:w-[80%] bg-transparent border-transparent shadow-none"
            )}>
                <Link href="/" className="text-xl font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
                    Vijaya Pardhu
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full opacity-50 backdrop-blur-2xl" />
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 border-l border-white/20 pl-4 backdrop-blur-2xl">
                        <a href="https://github.com/vijayapardhu" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://linkedin.com/in/vijayaapardhu" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:vijayapardhu17@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-20 left-4 right-4 glass-panel rounded-2xl md:hidden overflow-hidden backdrop-blur-2xl"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-white hover:text-white/70 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
                                <a href="https://github.com/vijayapardhu" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://linkedin.com/in/vijayaapardhu" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:vijayapardhu17@gmail.com" className="text-white/80 hover:text-white transition-colors">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
