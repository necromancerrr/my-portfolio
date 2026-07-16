"use client";

import { motion, useScroll, useSpring } from 'framer-motion';

// Thin scroll-progress bar fixed to the top of the viewport.
export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

    return (
        <motion.div
            aria-hidden="true"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                transformOrigin: '0% 50%',
                scaleX,
                background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color))',
                zIndex: 1100,
                pointerEvents: 'none',
            }}
        />
    );
}
