"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Contact.module.css';

export default function CopyEmail({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const t = setTimeout(() => setCopied(false), 1800);
        return () => clearTimeout(t);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <span className={styles.copyWrap}>
            <button type="button" className="nb-btn nb-btn--icon" onClick={copy} aria-label="Copy email address">
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M16 4H6a2 2 0 0 0-2 2v10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </button>
            <AnimatePresence>
                {copied && (
                    <motion.span
                        className={`nb-sticker ${styles.copied}`}
                        initial={{ opacity: 0, y: 8, rotate: -12, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, rotate: -4, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                    >
                        Copied!
                    </motion.span>
                )}
            </AnimatePresence>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
        </span>
    );
}
