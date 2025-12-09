import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
