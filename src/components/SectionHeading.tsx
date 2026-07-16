"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
    /** Chapter number, rendered zero-padded (1 -> "01") */
    index: number;
    /** Short monospace label, e.g. "whoami" */
    label: string;
    /** Section title */
    title: string;
    align?: 'left' | 'center';
}

// Numbered chapter heading: `// 01 — whoami` eyebrow, a rule that draws in,
// and the section title. Gives the page its story-chapter rhythm.
export default function SectionHeading({ index, label, title, align = 'left' }: SectionHeadingProps) {
    const number = String(index).padStart(2, '0');

    return (
        <div style={{ marginBottom: '48px', textAlign: align }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '16px',
                    flexDirection: align === 'center' ? 'column' : 'row',
                }}
            >
                <span className="section-eyebrow">
                    {'// '}{number} — {label}
                </span>
                {align === 'left' && (
                    <motion.span
                        className="section-rule"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                        style={{ transformOrigin: '0% 50%' }}
                    />
                )}
            </motion.div>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ marginBottom: 0 }}
            >
                {title}
            </motion.h2>
        </div>
    );
}
