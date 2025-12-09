import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';

export const useFloatingEffect = (delay = 0, duration = 6) => {
    return {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            },
        },
    };
};

export const FloatingElement = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            animate={{
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
