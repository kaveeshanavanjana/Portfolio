import React from 'react';
import { personalInfo } from '../data';

const Footer = () => {
    return (
        <footer className="bg-black dark:bg-black border-t border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-slate-400 dark:text-slate-400 mb-2">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
