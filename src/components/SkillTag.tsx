"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillTagProps {
    item: string;
    icon?: string;
    index: number;
}

export default function SkillTag({ item, icon, index }: SkillTagProps) {
    return (
        <motion.span
            className="tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                opacity: { duration: 0.4, delay: index * 0.05 },
            }}
            whileHover={{
                scale: 1.05,
                y: -2,
                backgroundColor: 'var(--primary-color)',
                color: 'white',
            }}
            style={{
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                cursor: 'default',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-color)',
            }}
        >
            {icon && (
                <Image
                    src={icon}
                    alt={item}
                    width={18}
                    height={18}
                    unoptimized
                    style={{
                        objectFit: 'contain',
                        // Invert Next.js icon for dark mode
                        filter: item === 'Next.js' ? 'var(--icon-invert, none)' : 'none',
                    }}
                />
            )}
            {item}
        </motion.span>
    );
}
