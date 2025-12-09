import React from 'react';
import SectionWrapper from './SectionWrapper';
import Card from './Card';
import { certifications } from '../data';
import { Award } from 'lucide-react';

const Certifications = () => {
    const [showAll, setShowAll] = React.useState(false);

    const displayedCerts = showAll ? certifications : certifications.slice(0, 3); // Show 3 initially or all

    return (
        <SectionWrapper id="certifications">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Certifications
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Professional achievements and qualifications
                </p>
            </div>

            {/* Slider / Grid Container */}
            <div className={`
                ${showAll
                    ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
                    : 'relative w-full overflow-hidden'
                }
            `}>
                <div className={`
                    ${showAll
                        ? 'contents'
                        : 'flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]'
                    }
                `}>
                    {(showAll ? certifications : [...certifications, ...certifications]).map((cert, index) => (
                        <div
                            key={`${cert.id}-${index}`}
                            className={`
                                ${showAll ? '' : 'min-w-[200px] md:min-w-[240px]'}
                            `}
                        >
                            <Card delay={showAll ? index * 0.1 : 0} className="flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors cursor-pointer h-full p-4 overflow-hidden">
                                {cert.embedHtml ? (
                                    <div className="w-[150px] h-[240px] scale-75 origin-center flex items-center justify-center -mb-16" dangerouslySetInnerHTML={{ __html: cert.embedHtml }} />
                                ) : (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full h-full flex flex-col items-center justify-center"
                                    >
                                        <div className="mb-3 flex items-center justify-center relative group">
                                            {cert.image ? (
                                                <img
                                                    src={cert.image}
                                                    alt={cert.title}
                                                    className="w-[50px] h-[50px] object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                                                />
                                            ) : (
                                                <Award size={40} className="text-slate-400 dark:text-slate-500" />
                                            )}
                                        </div>

                                        <h3 className="text-sm font-bold mb-1 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-primary-600 dark:text-primary-400 text-xs font-medium mb-0.5">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            {cert.date}
                                        </p>
                                    </a>
                                )}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                >
                    {showAll ? 'Show Less' : 'See All Certifications'}
                </button>
            </div>
        </SectionWrapper >
    );
};

export default Certifications;
