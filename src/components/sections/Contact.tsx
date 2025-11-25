'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Rocket } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
                        Let’s <span className="text-blue-400">Connect</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                            <p className="text-slate-300 mb-8 text-lg font-light leading-relaxed">
                                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                <GlassCard className="flex items-center gap-4 group p-4" hoverEffect>
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Email</p>
                                        <a href="mailto:vijayapardhu17@gmail.com" className="font-medium text-white hover:text-blue-400 transition-colors">vijayapardhu17@gmail.com</a>
                                    </div>
                                </GlassCard>

                                <GlassCard className="flex items-center gap-4 group p-4" hoverEffect>
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Phone</p>
                                        <a href="tel:+919494429963" className="font-medium text-white hover:text-blue-400 transition-colors">9494429963</a>
                                    </div>
                                </GlassCard>

                                <GlassCard className="flex items-center gap-4 group p-4" hoverEffect>
                                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Location</p>
                                        <p className="font-medium text-white">Velangi, Kakinada, Andhra Pradesh</p>
                                    </div>
                                </GlassCard>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <GlassCard className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        aria-label="Your Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        aria-label="Your Email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        aria-label="Your Message"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSent}
                                    aria-label="Send Message"
                                    className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${isSent
                                        ? 'bg-green-500 text-white'
                                        : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-500/25'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Sending...</span>
                                    ) : isSent ? (
                                        <span>Message Sent!</span>
                                    ) : (
                                        <>
                                            Send Message <Rocket size={18} className={isSubmitting ? 'animate-bounce' : ''} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </GlassCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
