import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { personalInfo } from '../data';
import { Mail, Linkedin, Send, Github } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <SectionWrapper id="contact" className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get In Touch
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Feel free to reach out for collaborations or just a friendly hello
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <Card className="flex items-center gap-4 p-6">
                        <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                                {personalInfo.contact.email}
                            </a>
                        </div>
                    </Card>

                    <Card className="flex items-center gap-4 p-6">
                        <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                            <Linkedin size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold">LinkedIn</h3>
                            <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                                Connect on LinkedIn
                            </a>
                        </div>
                    </Card>

                    <Card className="flex items-center gap-4 p-6">
                        <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                            <Github size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold">GitHub</h3>
                            <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
                                Follow on GitHub
                            </a>
                        </div>
                    </Card>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                                placeholder="john@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                            placeholder="Your message here..."
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-6 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                        <Send size={18} />
                        Send Message
                    </button>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
