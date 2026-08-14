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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.035 }}
        >
            {icon && (
                <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    width={16}
                    height={16}
                    unoptimized
                    style={{
                        objectFit: 'contain',
                        filter: item === 'Next.js' ? 'var(--icon-invert, none)' : 'none',
                    }}
                />
            )}
            {item}
        </motion.span>
    );
}
