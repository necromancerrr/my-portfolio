"use client";

import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
    to: number;
    from?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
}

// Counts from `from` to `to` the first time it scrolls into view. The final value
// is server-rendered, so the number is correct without JavaScript.
export default function CountUp({ to, from = 0, decimals = 0, prefix = '', suffix = '' }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reduceMotion = useReducedMotion();
    const format = (n: number) => `${prefix}${n.toFixed(decimals)}${suffix}`;

    useEffect(() => {
        const el = ref.current;
        if (!inView || reduceMotion || !el) return;
        const controls = animate(from, to, {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, reduceMotion, from, to, decimals, prefix, suffix]);

    return <span ref={ref}>{format(to)}</span>;
}
