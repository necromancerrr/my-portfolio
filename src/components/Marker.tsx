"use client";

import { useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

// Yellow highlighter that sweeps across its text once it scrolls into view.
export default function Marker({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-15% 0px' });

    return (
        <span ref={ref} className={inView ? 'marker is-on' : 'marker'}>
            {children}
        </span>
    );
}
