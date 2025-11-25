'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} Vijaya Pardhu Magapu. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-xs mt-1 flex items-center justify-center md:justify-start">
                        Built with <Heart size={12} className="text-red-500 mx-1 fill-red-500" /> Next.js & React
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a
                        href="https://github.com/vijayaapardhu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/vijaya-pardhu-magapu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:vijayapardhu17@gmail.com"
                        className="text-slate-400 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
