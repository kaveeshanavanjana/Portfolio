import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = ({ src1, src2, alt = "Profile" }) => {
    return (
        <div className="relative w-80 h-80 mx-auto mb-8 perspective-1000 group">
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Image */}
                <div className="absolute inset-0 backface-hidden">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl">
                        <img
                            src={src1}
                            alt={alt}
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>

                {/* Back Image */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl">
                        <img
                            src={src2}
                            alt={alt}
                            className="w-full h-full object-cover scale-110"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProfileImage;
