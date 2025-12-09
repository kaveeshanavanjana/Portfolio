import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.20,
                    scaleMobile: 1.20,
                    color: 0xcd4e0e, // Dimmer Orange for thinner look
                    color2: 0xffffff, // White
                    backgroundColor: 0x000000, // Black
                    points: 11.00,
                    maxDistance: 21.00,
                    spacing: 20.00
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            className="fixed inset-0 -z-10"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default VantaBackground;
