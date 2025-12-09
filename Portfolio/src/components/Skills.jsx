import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { skills } from '../data';

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Technical Skills
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    My technical expertise and proficiency levels
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <Card key={index} delay={index * 0.05} className="flex items-center gap-4 p-4 hover:bg-white dark:hover:bg-slate-800">
                        <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                            <skill.icon size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <h3 className="font-semibold">{skill.name}</h3>
                                <span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
