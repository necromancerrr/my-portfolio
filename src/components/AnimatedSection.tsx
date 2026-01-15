"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Stagger container for child animations
export function StaggerContainer({ children, className = '', style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

// Individual stagger item
export function StaggerItem({ children, className = '' }: { children: ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
