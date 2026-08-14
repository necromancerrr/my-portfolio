"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const proofPoints = [
    { value: 'UW CS', label: 'B.S. 2027' },
    { value: '50+', label: 'students mentored' },
    { value: '1,100+', label: 'matches modeled' },
];

const selectedWork = [
    {
        title: 'LoopIn',
        detail: 'Founder-led university app for study sessions, events, and smarter scheduling.',
    },
    {
        title: 'Match Predictor',
        detail: 'ML pipeline with engineered features across 3+ Premier League seasons.',
    },
    {
        title: 'Java Code Coach',
        detail: 'Live feedback tool for UW-style Java conventions and code quality.',
    },
];

const stack = ['React Native', 'Next.js', 'Firebase', 'Python', 'TypeScript'];

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });
    const exitOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
    const exitScale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
    const exitY = useTransform(scrollYProgress, [0, 1], [0, -36]);

    return (
        <section ref={sectionRef} className="hero-section">
            <motion.div
                className="hero-shell"
                style={{ opacity: exitOpacity, scale: exitScale, y: exitY }}
            >
                <motion.div
                    className="hero-copy"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <p className="hero-eyebrow">Software engineer / UW CS / Seattle</p>
                    <h1 className="hero-title">Yitbarek Ejigu</h1>
                    <p className="hero-lede">
                        I build practical, human-centered software: campus products, full-stack
                        dashboards, ML experiments, and tools that make learning easier.
                    </p>

                    <div className="hero-actions">
                        <Link href="#projects" className="btn btn-primary">
                            View work
                        </Link>
                        <Link href="/resume" className="btn btn-outline">
                            Resume
                        </Link>
                    </div>

                    <div className="hero-proof" aria-label="Portfolio highlights">
                        {proofPoints.map((point) => (
                            <div className="hero-proof-item" key={point.label}>
                                <span>{point.value}</span>
                                <small>{point.label}</small>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.aside
                    className="hero-workbench"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    aria-label="Selected work snapshot"
                >
                    <div className="workbench-topline">
                        <span>Current focus</span>
                        <strong>building + shipping</strong>
                    </div>

                    <div className="workbench-focus">
                        <span className="workbench-kicker">Founder project</span>
                        <h2>LoopIn university app</h2>
                        <p>
                            Study sessions, campus events, Firebase-backed product flows, and early
                            AI-assisted scheduling features.
                        </p>
                    </div>

                    <div className="workbench-list">
                        {selectedWork.map((item, index) => (
                            <motion.div
                                className="workbench-row"
                                key={item.title}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                            >
                                <span>{String(index + 1).padStart(2, '0')}</span>
                                <div>
                                    <strong>{item.title}</strong>
                                    <p>{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="workbench-stack" aria-label="Core stack">
                        {stack.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </motion.aside>
            </motion.div>
        </section>
    );
}
