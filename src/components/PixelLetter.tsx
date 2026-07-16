"use client";

import { motion } from 'framer-motion';

// Renders a letter as a 5x7 grid of pixel blocks. Shared by the hero name and nav logo.

const patterns: Record<string, number[][]> = {
    'Y': [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    'i': [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
    ],
    't': [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
    ],
    'b': [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0],
    ],
    'a': [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1],
    ],
    'r': [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
    ],
    'e': [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
    ],
    'k': [
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
    ],
};

interface PixelLetterProps {
    letter: string;
    color: string;
    size?: string;
    gap?: string;
    radius?: string;
    /** Stagger-assemble the blocks once on mount (used by the hero name) */
    animateIn?: boolean;
    /** Base delay in seconds before this letter starts assembling */
    delay?: number;
}

export default function PixelLetter({
    letter,
    color,
    size = 'clamp(4px, 1.6vw, 16px)',
    gap = 'clamp(1px, 0.25vw, 3px)',
    radius = '1px',
    animateIn = false,
    delay = 0,
}: PixelLetterProps) {
    const pattern = patterns[letter] || patterns['a'];

    return (
        <div
            aria-hidden="true"
            style={{
                display: 'grid',
                gridTemplateRows: `repeat(7, ${size})`,
                gridTemplateColumns: `repeat(5, ${size})`,
                gap: gap,
            }}
        >
            {pattern.flat().map((filled, i) =>
                animateIn && filled ? (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.3,
                            // Deterministic pseudo-random stagger so blocks pop in out of order
                            delay: delay + (((i * 13) % 35) / 35) * 0.45,
                            ease: 'easeOut',
                        }}
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: color,
                            borderRadius: radius,
                        }}
                    />
                ) : (
                    <div
                        key={i}
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: filled ? color : 'transparent',
                            borderRadius: radius,
                        }}
                    />
                )
            )}
        </div>
    );
}
