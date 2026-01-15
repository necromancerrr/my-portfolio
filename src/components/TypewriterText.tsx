"use client";

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    cursor?: boolean;
}

export default function TypewriterText({ text, speed = 50, delay = 0, className = '', cursor = true }: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, speed]);

    return (
        <span className={`${className}`}>
            {displayedText}
            {cursor && <span className="animate-pulse ml-1 text-[var(--primary-color)]">_</span>}
        </span>
    );
}
