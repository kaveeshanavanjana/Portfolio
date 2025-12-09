import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo } from '../data';
import InteractiveText from './InteractiveText';
import ProfileImage from './ProfileImage';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-0">
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <ProfileImage src1={profile1} src2={profile2} />

                    <span className="inline-block text-primary-600 dark:text-primary-300 text-xl font-medium mb-6">
                        Hello, I'm
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <InteractiveText text={personalInfo.name} />
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-light mb-8">
                        {personalInfo.title}
                    </h2>

                    <motion.p
                        className="text-lg text-slate-400 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed h-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    delayChildren: 0.5,
                                    staggerChildren: 0.03
                                }
                            }
                        }}
                    >
                        {personalInfo.tagline.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a href="#about" aria-label="Scroll down">
                    <ArrowDown size={24} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;