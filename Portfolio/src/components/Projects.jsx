import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data';
import { Github, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [cards, setCards] = useState(projects);

    const moveToEnd = (from) => {
        setCards((currentCards) => {
            const newCards = [...currentCards];
            const movedItem = newCards.splice(from, 1)[0];
            newCards.push(movedItem);
            return newCards;
        });
    };

    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured Projects
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Showcasing my technical projects and experiments
                </p>
            </div>

            <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden perspective-1000">
                {cards.map((project, index) => {
                    // Fan effect logic
                    // We want to show a clear stack
                    // Increase rotation and offset to make it visible
                    const rotateValue = index === 0 ? 0 : (index % 2 === 0 ? index * 5 : index * -5);
                    const yValue = index * 8; // Increased for better visibility

                    return (
                        <motion.div
                            key={project.id}
                            layoutId={project.id}
                            initial={false}
                            animate={{
                                rotate: rotateValue,
                                y: yValue,
                                scale: 1 - index * 0.05,
                                zIndex: cards.length - index,
                                opacity: index < 5 ? 1 : 0 // Show more cards
                            }}
                            whileHover={{
                                rotate: index === 0 ? 0 : rotateValue * 1.2,
                                y: yValue,
                                scale: index === 0 ? 1.05 : 1 - index * 0.05
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className={`absolute w-[300px] md:w-[340px] h-[420px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden cursor-pointer origin-bottom`}
                            onClick={() => {
                                moveToEnd(index);
                            }}
                        >
                            {project.loading ? (
                                <div className="h-full w-full flex items-center justify-center bg-slate-50 dark:bg-slate-800/50">
                                    <Loader className="animate-spin text-primary-500" size={48} />
                                </div>
                            ) : (
                                <>
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover pointer-events-none"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                            <h3 className="text-xl font-bold text-white truncate w-full">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="p-4 h-[calc(100%-12rem)] flex flex-col">
                                        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1 mt-auto">
                                            {project.techStack.slice(0, 3).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-300 border border-primary-100 dark:border-primary-800"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 3 && (
                                                <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                                                    +{project.techStack.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {index === 0 && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="absolute top-4 right-4 bg-primary-600 hover:bg-primary-700 text-white text-xs px-3 py-1.5 rounded-full shadow-lg transition-colors z-10 flex items-center gap-1"
                                        >
                                            <Github size={14} />
                                            View Code
                                        </a>
                                    )}
                                </>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
