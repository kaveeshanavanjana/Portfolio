import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const InteractiveText = ({ text, className = "" }) => {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            setWidth(Math.min(100, Math.max(0, percentage)));
        }
    };

    const handleMouseLeave = () => {
        setWidth(0);
    };

    return (
        <div
            ref={containerRef}
            className={`relative inline-block cursor-pointer select-none ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base Text */}
            <span className="relative z-0 text-slate-100 dark:text-slate-100 block py-2">
                {text}
            </span>

            {/* Overlay Text (Orange) */}
            <div
                className="absolute top-0 left-0 overflow-hidden whitespace-nowrap pointer-events-none z-10 h-full transition-[width] duration-75 ease-linear"
                style={{ width: `${width}%` }}
            >
                <span className="block py-2" style={{ color: '#EA580C' }}>
                    {text}
                </span>
            </div>
        </div>
    );
};

export default InteractiveText;
