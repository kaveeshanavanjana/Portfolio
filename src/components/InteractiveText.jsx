import React from 'react';

const InteractiveText = ({ text, className = "" }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            {/* Static Text */}
            <span
                className="relative z-10 block text-white whitespace-nowrap"
                style={{ fontFamily: '"Science Gothic", sans-serif', fontWeight: 900 }}
            >
                {text}
            </span>
        </div>
    );
};

export default InteractiveText;
