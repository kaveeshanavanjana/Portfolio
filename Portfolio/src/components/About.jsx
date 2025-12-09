import React from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { personalInfo } from '../data';
import { User, BookOpen, Globe, Shield } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About Me
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {personalInfo.about.bio}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {personalInfo.about.interests.map((interest, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card delay={0.1} className="flex flex-col items-center text-center p-6">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                            <User size={24} />
                        </div>
                        <h3 className="font-semibold mb-2">Undergraduate</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">University of Kelaniya</p>
                    </Card>

                    <Card delay={0.2} className="flex flex-col items-center text-center p-6">
                        <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                            <Globe size={24} />
                        </div>
                        <h3 className="font-semibold mb-2">Networking</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Network Infrastructure</p>
                    </Card>

                    <Card delay={0.3} className="flex flex-col items-center text-center p-6">
                        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                            <Shield size={24} />
                        </div>
                        <h3 className="font-semibold mb-2">Cybersecurity</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Secure Systems</p>
                    </Card>

                    <Card delay={0.4} className="flex flex-col items-center text-center p-6">
                        <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="font-semibold mb-2">Learning</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Continuous Growth</p>
                    </Card>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
