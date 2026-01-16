"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface BlobConfig {
    color: string;
    size: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    delay?: number;
}

interface GradientBlobsProps {
    variant?: 'hero' | 'skills' | 'projects' | 'experience' | 'contact';
}

const blobConfigs: Record<string, BlobConfig[]> = {
    hero: [
        { color: 'rgba(251, 191, 36, 0.25)', size: '400px', top: '20%', left: '-5%', delay: 0 },
        { color: 'rgba(102, 126, 234, 0.3)', size: '350px', top: '40%', right: '5%', delay: 0.5 },
    ],
    skills: [
        { color: 'rgba(34, 197, 94, 0.2)', size: '350px', top: '10%', right: '-10%', delay: 0 },
        { color: 'rgba(59, 130, 246, 0.2)', size: '300px', bottom: '20%', left: '-5%', delay: 0.3 },
    ],
    projects: [
        { color: 'rgba(168, 85, 247, 0.2)', size: '400px', top: '5%', left: '-8%', delay: 0 },
        { color: 'rgba(251, 146, 60, 0.2)', size: '350px', bottom: '10%', right: '-5%', delay: 0.4 },
    ],
    experience: [
        { color: 'rgba(139, 92, 246, 0.2)', size: '380px', top: '15%', right: '-5%', delay: 0 },
        { color: 'rgba(20, 184, 166, 0.2)', size: '320px', bottom: '15%', left: '-5%', delay: 0.5 },
    ],
    contact: [
        { color: 'rgba(236, 72, 153, 0.2)', size: '350px', top: '20%', left: '-10%', delay: 0 },
        { color: 'rgba(59, 130, 246, 0.25)', size: '400px', bottom: '10%', right: '-5%', delay: 0.3 },
    ],
};

function AnimatedBlob({ config, index }: { config: BlobConfig; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? 30 : -30]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{
                opacity: { duration: 1, delay: config.delay || 0 },
            }}
            style={{
                position: 'absolute',
                top: config.top,
                bottom: config.bottom,
                left: config.left,
                right: config.right,
                width: config.size,
                height: config.size,
                background: `radial-gradient(circle, ${config.color} 0%, transparent 70%)`,
                filter: 'blur(60px)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 0,
                y, x, scale,
                willChange: 'transform', // Optimization
            }}
        />
    );
}

export default function GradientBlobs({ variant = 'hero' }: GradientBlobsProps) {
    const blobs = blobConfigs[variant] || blobConfigs.hero;
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {blobs.map((config, index) => (
                <AnimatedBlob key={index} config={config} index={index} />
            ))}
        </div>
    );
}
