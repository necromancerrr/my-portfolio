"use client";

import { motion } from 'framer-motion';

interface Segment {
    text: string;
    highlight?: boolean;
}

interface RevealTextProps {
    /** Sentence split into segments; highlighted ones render in the primary color */
    segments: Segment[];
    className?: string;
    style?: React.CSSProperties;
}

// Editorial statement that reveals word by word as it scrolls into view.
export default function RevealText({ segments, className, style }: RevealTextProps) {
    // Flatten segments into words, remembering which are highlighted.
    const words = segments.flatMap((seg) =>
        seg.text.split(' ').filter(Boolean).map((word) => ({ word, highlight: seg.highlight }))
    );

    return (
        <motion.p
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.035 }}
            style={style}
            aria-label={words.map((w) => w.word).join(' ')}
        >
            {words.map((w, i) => (
                <span
                    key={i}
                    aria-hidden="true"
                    style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}
                >
                    <motion.span
                        variants={{
                            hidden: { y: '110%', opacity: 0 },
                            visible: {
                                y: '0%',
                                opacity: 1,
                                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            },
                        }}
                        style={{
                            display: 'inline-block',
                            color: w.highlight ? 'var(--primary-color)' : undefined,
                        }}
                    >
                        {w.word}
                    </motion.span>
                    {i < words.length - 1 ? ' ' : ''}
                </span>
            ))}
        </motion.p>
    );
}
