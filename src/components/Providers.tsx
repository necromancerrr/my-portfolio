"use client";

import { MotionConfig } from 'framer-motion';

// Respect the user's prefers-reduced-motion setting for all framer-motion animations.
export default function Providers({ children }: { children: React.ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
