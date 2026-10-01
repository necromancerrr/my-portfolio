"use client";

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    delay?: number;
    /** Also grow hard shadows inside from 0 to full offset, like a stamp */
    stamp?: boolean;
    /** Animate on mount instead of when scrolled into view (above-the-fold content) */
    onMount?: boolean;
}

// Snappy entrance: drops into place with a little spring overshoot.
export default function Reveal({ children, className, style, delay = 0, stamp = true, onMount = false }: RevealProps) {
    const hidden = { opacity: 0, y: 18, ...(stamp ? { '--stamp': 0 } : {}) };
    const shown = { opacity: 1, y: 0, ...(stamp ? { '--stamp': 1 } : {}) };
    const transition = {
        opacity: { duration: 0.25, delay },
        y: { type: 'spring' as const, stiffness: 420, damping: 24, delay },
        '--stamp': { duration: 0.32, ease: [0.34, 1.56, 0.64, 1] as const, delay: delay + 0.12 },
    };

    return (
        <motion.div
            className={className}
            style={style}
            initial={hidden}
            {...(onMount ? { animate: shown } : { whileInView: shown, viewport: { once: true, margin: '-60px' } })}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}
